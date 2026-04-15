export default function HomePage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f8fafc",
        fontFamily: "Arial, sans-serif",
        padding: "24px",
      }}
    >
      <div
        style={{
          maxWidth: "720px",
          width: "100%",
          background: "white",
          borderRadius: "24px",
          padding: "40px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ fontSize: "48px", margin: 0, color: "#1d4ed8" }}>
          MatchForge
        </h1>
        <p style={{ fontSize: "20px", color: "#334155", marginTop: "16px" }}>
          From cohort to career, before graduation.
        </p>
      </div>
    </main>
  );
}
