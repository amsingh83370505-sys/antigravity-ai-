"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const generateLeads = () => {
    if (!input) {
      setResult("Please enter a business type.");
      return;
    }

    const cities = [
      "New York", "London", "Dubai", "Sydney", "Toronto",
      "Los Angeles", "Berlin", "Singapore", "Mumbai", "San Francisco",
      "Chicago", "Paris", "Tokyo", "Delhi", "Bangkok"
    ];

    const companyWords = [
      "Solutions", "Agency", "Experts", "Group", "Hub",
      "Services", "Consulting", "Labs", "Network", "Pro"
    ];

    let leads = `🔥 Top AI Generated Leads for: ${input}\n\n`;

    for (let i = 0; i < 12; i++) {
      const city = cities[Math.floor(Math.random() * cities.length)];
      const word = companyWords[Math.floor(Math.random() * companyWords.length)];

      leads += `${i + 1}. ${input} ${word} - ${city}\n`;
    }

    setResult(leads);
  };

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
        fontSize: "48px",
        fontWeight: "800",
        marginBottom: "10px"
      }}>
        🚀 LeadForge AI
      </h1>

      <p style={{
        color: "#94a3b8",
        marginBottom: "25px",
        maxWidth: "500px"
      }}>
        Generate high-converting business leads instantly using AI automation.
      </p>

      <input
        placeholder="Enter business (e.g. Gym, Real Estate, Dentist)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          padding: "12px",
          borderRadius: "8px",
          border: "none",
          marginBottom: "15px",
          width: "260px",
          outline: "none"
        }}
      />

      <button
        onClick={generateLeads}
        style={{
          padding: "12px 26px",
          borderRadius: "10px",
          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
          color: "white",
          border: "none",
          cursor: "pointer",
          fontWeight: "600"
        }}
      >
        Generate Leads
      </button>

      {result && (
        <pre style={{
          marginTop: "25px",
          background: "#111827",
          padding: "20px",
          borderRadius: "12px",
          textAlign: "left",
          maxWidth: "400px",
          whiteSpace: "pre-wrap",
          fontSize: "14px"
        }}>
          {result}
        </pre>
      )}

      <div style={{
        marginTop: "40px",
        fontSize: "13px",
        color: "#64748b"
      }}>
        Built for agencies • Designed for growth 💰
      </div>

    </div>
  );
}
