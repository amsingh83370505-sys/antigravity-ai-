import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_mockkey", {
  apiVersion: "2026-03-25.dahlia",
});

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature");

    if (!process.env.STRIPE_SECRET_KEY || !webhookSecret) {
      // Mock flow if no APIs present
      console.log("Mock Webhook Triggered (No Keys Configured)");
      return NextResponse.json({ received: true, mock: true });
    }

    if (!signature) {
      return NextResponse.json({ error: "No signature found" }, { status: 400 });
    }

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (err: any) {
      console.error(`Webhook signature verification failed. ${err.message}`);
      return NextResponse.json({ error: err.message }, { status: 400 });
    }

    // Handle the event
    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("Payment successful for session:", session.id);
        // Here we would typically:
        // 1. Find the user by email or client reference ID
        // 2. Update their subscription record in Prisma
        // await db.subscription.update({...})
        break;
      case "invoice.payment_succeeded":
        const invoice = event.data.object as Stripe.Invoice;
        console.log("Recurring payment succeeded for invoice:", invoice.id);
        break;
      case "customer.subscription.deleted":
        const subscription = event.data.object as Stripe.Subscription;
        console.log("Subscription canceled:", subscription.id);
        // Update user to FREE plan
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }
}
