import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialize Stripe with a dummy key if not present, so the build doesn't fail.
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_mockkey", {
  apiVersion: "2026-03-25.dahlia",
});

export async function POST(req: Request) {
  try {
    const { priceId, isSubscription } = await req.json();

    if (!process.env.STRIPE_SECRET_KEY) {
      // Mock flow if no API key
      return NextResponse.json({ 
        url: "/dashboard?checkout_mock=success",
        message: "This is a mock checkout url because no STRIPE_SECRET_KEY was found." 
      });
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: isSubscription ? "subscription" : "payment",
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard/settings/pricing?canceled=true`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe Checkout Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
