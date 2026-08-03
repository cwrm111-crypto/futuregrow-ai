export default function Page() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "2rem",
      background: "#f8fafc",
      color: "#111827",
    }}>
      <div style={{
        maxWidth: 640,
        width: "100%",
        textAlign: "center",
        padding: "2rem",
        borderRadius: 20,
        background: "#ffffff",
        boxShadow: "0 24px 80px rgba(15, 23, 42, 0.12)",
      }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
          লগইন পেজে সরাসরি রিডাইরেক্ট হচ্ছে...
        </h1>
        <p style={{ marginBottom: "1.5rem", color: "#4b5563" }}>
          আপনি যদি এখানে আছেন, তাহলে অনুগ্রহ করে নীচের বাটনে ক্লিক করে লগইন পেজ দেখুন।
        </p>
        <a
          href="/login"
          style={{
            display: "inline-block",
            padding: "0.95rem 1.5rem",
            borderRadius: 12,
            background: "#2563eb",
            color: "white",
            fontWeight: 600,
            textDecoration: "none",
          }}>
          লগইন পেজ খুলুন
        </a>
      </div>
    </main>
  );
}
