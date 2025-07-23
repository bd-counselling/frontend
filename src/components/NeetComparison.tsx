import React, { useState } from "react";

type StateOption = "" | "delhi" | "up" | "maha";

interface NeetStats {
  registered: string;
  appeared: string;
  qualified: string;
}

const data: Record<StateOption, { "2024": NeetStats; "2025": NeetStats }> = {
  "": {
    "2024": { registered: "", appeared: "", qualified: "" },
    "2025": { registered: "", appeared: "", qualified: "" },
  },
  delhi: {
    "2024": { registered: "6,819", appeared: "6,612", qualified: "4,681" },
    "2025": { registered: "6,046", appeared: "5,910", qualified: "4,171" },
  },
  up: {
    "2024": {
      registered: "3,49,759",
      appeared: "3,33,333",
      qualified: "2,15,768",
    },
    "2025": {
      registered: "3,52,478",
      appeared: "3,37,778",
      qualified: "2,17,009",
    },
  },
  maha: {
    "2024": {
      registered: "2,82,051",
      appeared: "2,74,542",
      qualified: "1,42,829",
    },
    "2025": {
      registered: "2,48,201",
      appeared: "2,42,858",
      qualified: "1,25,777",
    },
  },
};

// Simple prediction for 2026: 2% increase over 2025 for all values
function predict2026(stats2025: NeetStats): NeetStats {
  const predict = (val: string) => {
    const n = parseInt(val.replace(/,/g, ""), 10);
    if (isNaN(n)) return "";
    return Math.round(n * 1.02).toLocaleString("en-IN");
  };
  return {
    registered: predict(stats2025.registered),
    appeared: predict(stats2025.appeared),
    qualified: predict(stats2025.qualified),
  };
}

const colorMap = {
  registered: "#42a5f5",
  appeared: "#66bb6a",
  qualified: "#ffa726",
};

const labelMap = {
  registered: "Registered",
  appeared: "Appeared",
  qualified: "Qualified",
};

const NeetComparison: React.FC = () => {
  const [selectedState, setSelectedState] = useState<StateOption>("");

  const stats2024 = selectedState ? data[selectedState]["2024"] : null;
  const stats2025 = selectedState ? data[selectedState]["2025"] : null;
  const stats2026 =
    stats2025 && stats2025.registered
      ? predict2026(stats2025)
      : { registered: "", appeared: "", qualified: "" };

  // Calculate difference between 2024 and 2025
  const getDiff = (key: keyof NeetStats) => {
    if (!stats2024 || !stats2025) return "";
    const n2024 = parseInt(stats2024[key].replace(/,/g, ""), 10);
    const n2025 = parseInt(stats2025[key].replace(/,/g, ""), 10);
    if (isNaN(n2024) || isNaN(n2025)) return "";
    const diff = n2025 - n2024;
    const percent =
      n2024 === 0
        ? ""
        : ` (${diff > 0 ? "+" : ""}${((diff / n2024) * 100).toFixed(1)}%)`;
    return `${diff > 0 ? "+" : ""}${diff.toLocaleString("en-IN")}${percent}`;
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)",
        borderRadius: "1.5rem",
        padding: "2.5rem 1.5rem",
        boxShadow: "0 10px 32px rgba(33,150,243,0.10)",
        marginBottom: "3rem",
        maxWidth: 800,
        margin: "2rem auto",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2
          style={{
            fontSize: "2.2rem",
            marginBottom: "0.5rem",
            color: "#1a237e",
            letterSpacing: "1px",
            fontWeight: 700,
          }}
        >
          NEET UG 2024 vs 2025{" "}
          <span style={{ color: "#ff4081" }}>+ 2026 Prediction</span>
        </h2>
        <p style={{ color: "#333", fontSize: "1.1rem" }}>
          Select a state to compare NEET stats and see a basic prediction for
          2026.
        </p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          marginBottom: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value as StateOption)}
          style={{
            padding: "0.9rem 1.2rem",
            fontSize: "1.1rem",
            borderRadius: "0.7rem",
            border: "1.5px solid #90caf9",
            minWidth: "220px",
            background: "#fff",
            color: "#1a237e",
            fontWeight: 500,
            boxShadow: "0 2px 8px rgba(33,150,243,0.07)",
            outline: "none",
          }}
        >
          <option value="">-- Select State --</option>
          <option value="delhi">Delhi</option>
          <option value="up">Uttar Pradesh</option>
          <option value="maha">Maharashtra</option>
        </select>
      </div>

      {stats2024 && stats2025 && (
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginTop: "1.5rem",
          }}
        >
          {(["registered", "appeared", "qualified"] as const).map((key) => (
            <div
              key={key}
              style={{
                background: "#fff",
                borderRadius: "1rem",
                padding: "2rem 2rem",
                textAlign: "center",
                flex: "1 1 38%",
                boxShadow: "0 6px 18px rgba(33,150,243,0.08)",
                minWidth: 90,
                position: "relative",
                borderTop: `5px solid ${colorMap[key]}`,
                transition: "transform 0.2s",
              }}
            >
              <div
                style={{
                  fontWeight: 600,
                  color: "#333",
                  fontSize: "1.1rem",
                  marginBottom: 8,
                }}
              >
                {labelMap[key]}
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "#90caf9",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                    }}
                  >
                    2024
                  </div>
                  <div
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "#1976d2",
                    }}
                  >
                    {stats2024[key]}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      color: "#f06292",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                    }}
                  >
                    2025
                  </div>
                  <div
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "#d81b60",
                    }}
                  >
                    {stats2025[key]}
                  </div>
                </div>
                <div>
                  <div
                    style={{
                      color: "#81c784",
                      fontSize: "1.1rem",
                      fontWeight: 500,
                    }}
                  >
                    2026*
                  </div>
                  <div
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "#388e3c",
                    }}
                  >
                    {stats2026[key]}
                  </div>
                </div>
              </div>
              <div
                style={{
                  marginTop: "1rem",
                  fontSize: "0.98rem",
                  color: getDiff(key).startsWith("+") ? "#388e3c" : "#d32f2f",
                  fontWeight: 500,
                  background: "#f5f5f5",
                  borderRadius: "0.5rem",
                  padding: "0.3rem 0.7rem",
                  display: "inline-block",
                  letterSpacing: "0.5px",
                }}
              >
                {getDiff(key) && (
                  <>
                    {getDiff(key).startsWith("+") ? "▲" : "▼"} {getDiff(key)}{" "}
                    from 2024 to 2025
                  </>
                )}
              </div>
              <div style={{ fontSize: "0.9rem", color: "#888", marginTop: 6 }}>
                *2026 is a basic prediction (+2% over 2025)
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default NeetComparison;
