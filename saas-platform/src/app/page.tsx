export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a, #020617)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "20px"
    }}>
      
      <h1 style={{
        fontSize: "48px",
        fontWeight: "700",
        marginBottom: "20px"
      }}>
        🚀 LeadForge AI
      </h1>

      <p style={{
        fontSize: "18px",
        maxWidth: "600px",
        marginBottom: "30px",
        color: "#94a3b8"
      }}>
        Generate high-quality leads, automate outreach, and scale your business using AI — all in one platform.
      </p>

      <button style={{
        padding: "12px 24px",
        fontSize: "16px",
        borderRadius: "8px",
        border: "none",
        background: "#6366f1",
        color: "white",
        cursor: "pointer",
        transition: "0.3s"
      }}>
        Get Started
      </button>

      <div style={{
        marginTop: "40px",
        fontSize: "14px",
        color: "#64748b"
      }}>
        Trusted by modern agencies • Built for growth 🚀
      </div>

    </div>
  );
}
