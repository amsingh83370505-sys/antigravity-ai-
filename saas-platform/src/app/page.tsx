"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const generateLeads = () => {
    if (!input) return;

    const cities = ["New York","London","Dubai","Mumbai","Singapore","Berlin","Toronto"];
    let leads = `🔥 Leads for ${input}\n\n`;

    for (let i = 0; i < 8; i++) {
      const city = cities[Math.floor(Math.random() * cities.length)];
      leads += `${i + 1}. ${input} Agency - ${city}\n`;
    }

    setResult(leads);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #0f172a, #020617)",
      color: "white",
      padding: "40px"
    }}>

      {/* HERO */}
      <div style={{
        textAlign: "center",
        marginTop: "80px"
      }}>
        <h1 style={{
          fontSize: "64px",
          fontWeight: "800",
          marginBottom: "20px",
          background: "linear-gradient(90deg,#6366f1,#8b5cf6)",
          WebkitBackgroundClip: "text",
          color: "transparent"
        }}>
          LeadForge AI 🚀
        </h1>

        <p style={{
          fontSize: "20px",
          color: "#94a3b8",
          maxWidth: "600px",
          margin: "0 auto 30px"
        }}>
          Generate high-quality business leads instantly using AI automation.
        </p>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          flexWrap: "wrap"
        }}>
          <input
            placeholder="Enter business (Gym, Dentist...)"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              padding: "14px",
              borderRadius: "10px",
              border: "1px solid #1e293b",
              background: "#020617",
              color: "white",
              width: "260px"
            }}
          />

          <button
            onClick={generateLeads}
            style={{
              padding: "14px 24px",
              borderRadius: "10px",
              background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
              border: "none",
              color: "white",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Generate Leads
          </button>
        </div>
      </div>

      {/* RESULT */}
      {result && (
        <div style={{
          marginTop: "40px",
          maxWidth: "600px",
          marginLeft: "auto",
          marginRight: "auto",
          background: "#020617",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #1e293b"
        }}>
          <pre style={{ whiteSpace: "pre-wrap" }}>{result}</pre>
        </div>
      )}

      {/* FEATURES */}
      <div style={{
        marginTop: "100px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px"
      }}>

        <div style={card}>
          ⚡ Instant Leads  
          <p style={desc}>Generate leads in seconds using AI.</p>
        </div>

        <div style={card}>
          🎯 Targeted Results  
          <p style={desc}>Get niche-specific business data.</p>
        </div>

        <div style={card}>
          💰 Built for Agencies  
          <p style={desc}>Close more clients with automation.</p>
        </div>

      </div>

    </div>
  );
}

const card = {
  background: "#020617",
  padding: "25px",
  borderRadius: "15px",
  border: "1px solid #1e293b",
  fontSize: "18px",
  fontWeight: "600"
};

const desc = {
  fontSize: "14px",
  color: "#94a3b8",
  marginTop: "10px"
};
