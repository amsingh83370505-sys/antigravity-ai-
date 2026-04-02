export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #020617, #0f172a)",
      color: "white",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "20px"
    }}>
      
      <h1 style={{
        fontSize: "52px",
        fontWeight: "800",
        marginBottom: "16px",
        letterSpacing: "1px"
      }}>
        🚀 LeadForge AI
      </h1>

      <p style={{
        fontSize: "20px",
        maxWidth: "600px",
        marginBottom: "30px",
        color: "#94a3b8"
      }}>
        Generate high-converting leads, automate outreach, and scale your business using AI.
      </p>

      <button style={{
        padding: "14px 28px",
        fontSize: "16px",
        borderRadius: "10px",
        border: "none",
        background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
        color: "white",
        cursor: "pointer",
        fontWeight: "600"
      }}>
        Start Generating Leads
      </button>

      <div style={{
        marginTop: "50px",
        fontSize: "14px",
        color: "#64748b"
      }}>
        Built for agencies • Designed for growth 💰
      </div>

    </div>
  );
}
