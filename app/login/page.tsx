"use client";

import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setMessage("এটি প্রিমিয়ারী প্লেসহোল্ডার লগইন পেজ। আপনার প্রকৃত auth ইন্টিগ্রেশন যোগ করুন।");
    };

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
                width: "100%",
                maxWidth: 420,
                borderRadius: 16,
                padding: "2rem",
                boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                background: "#ffffff",
            }}>
                <h1 style={{ marginBottom: "1.25rem", fontSize: "1.75rem" }}>লগইন করুন</h1>
                <p style={{ marginBottom: "1.5rem", color: "#4b5563" }}>
                    আপনি যদি প্রকৃত লগইন সিস্টেম চান, তাহলে এখানে NextAuth/Firebase সেটআপ করুন এবং Vercel এ env variables যোগ করুন।
                </p>
                <form onSubmit={handleSubmit}>
                    <label style={{ display: "block", marginBottom: "0.75rem" }}>
                        ইমেইল
                        <input
                            type="email"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="example@mail.com"
                            required
                            style={{
                                width: "100%",
                                marginTop: 8,
                                padding: "0.75rem 0.85rem",
                                borderRadius: 10,
                                border: "1px solid #d1d5db",
                                fontSize: "1rem",
                            }}
                        />
                    </label>
                    <label style={{ display: "block", marginBottom: "1rem" }}>
                        পাসওয়ার্ড
                        <input
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.target.value)}
                            placeholder="********"
                            required
                            style={{
                                width: "100%",
                                marginTop: 8,
                                padding: "0.75rem 0.85rem",
                                borderRadius: 10,
                                border: "1px solid #d1d5db",
                                fontSize: "1rem",
                            }}
                        />
                    </label>
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "0.95rem 1rem",
                            borderRadius: 10,
                            border: "none",
                            background: "#2563eb",
                            color: "white",
                            fontWeight: 600,
                            cursor: "pointer",
                        }}>
                        লগইন চেষ্টা করুন
                    </button>
                </form>
                {message && (
                    <p style={{ marginTop: "1rem", color: "#dc2626" }}>{message}</p>
                )}
            </div>
        </main>
    );
}
