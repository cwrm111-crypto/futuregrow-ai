"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
    login,
    signup,
    oauthLogin,
    handleAuthCallback,
    getUser,
    AuthError,
} from "@netlify/identity";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function LoginPage() {
    const router = useRouter();
    const [mode, setMode] = useState<"login" | "signup">("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [error, setError] = useState("");
    const [info, setInfo] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUser().then((user) => {
            if (user) router.replace("/dashboard");
        });

        handleAuthCallback()
            .then((result) => {
                if (!result) return;
                if (result.type === "oauth" || result.type === "confirmation") {
                    router.replace("/dashboard");
                } else if (result.type === "recovery") {
                    setInfo("পাসওয়ার্ড রিসেট করতে নতুন পাসওয়ার্ড দিন।");
                }
            })
            .catch((err) => {
                if (err instanceof AuthError) setError(err.message);
            });
    }, [router]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        setInfo("");
        setLoading(true);
        try {
            if (mode === "login") {
                await login(email, password);
                router.replace("/dashboard");
            } else {
                const user = await signup(email, password, { full_name: name });
                if (user.confirmedAt) {
                    router.replace("/dashboard");
                } else {
                    setInfo("অ্যাকাউন্ট তৈরি হয়েছে। ইমেইল কনফার্ম করে লগইন করুন।");
                }
            }
        } catch (err) {
            if (err instanceof AuthError) {
                if (err.status === 401) setError("ইমেইল বা পাসওয়ার্ড ভুল।");
                else if (err.status === 403) setError("সাইনআপ বন্ধ আছে।");
                else if (err.status === 422) setError("সঠিক ইমেইল ও পাসওয়ার্ড দিন (কমপক্ষে ৬ ক্যারেক্টার)।");
                else setError(err.message);
            } else {
                setError("কিছু ভুল হয়েছে, আবার চেষ্টা করুন।");
            }
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h1>🔐 স্বাগতম</h1>
                <p className="muted">
                    {mode === "login" ? "আপনার অ্যাকাউন্টে লগইন করুন" : "নতুন অ্যাকাউন্ট তৈরি করুন"}
                </p>

                <div className="social-buttons">
                    <button className="btn-google" onClick={() => oauthLogin("google")} type="button">
                        <FaGoogle /> Google দিয়ে লগইন
                    </button>
                    <button className="btn-github" onClick={() => oauthLogin("github")} type="button">
                        <FaGithub /> GitHub দিয়ে লগইন
                    </button>
                </div>

                <div className="divider">অথবা ইমেইল দিয়ে</div>

                {error && <p className="small auth-error">{error}</p>}
                {info && <p className="small auth-info">{info}</p>}

                <form className="login-form" onSubmit={handleSubmit}>
                    {mode === "signup" && (
                        <input
                            type="text"
                            placeholder="আপনার নাম"
                            className="input-field"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    )}
                    <input
                        type="email"
                        placeholder="আপনার ইমেইল"
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="পাসওয়ার্ড"
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        minLength={6}
                    />
                    <button type="submit" className="btn-primary" disabled={loading}>
                        {loading ? "অপেক্ষা করুন..." : mode === "login" ? "লগইন করুন" : "রেজিস্টার করুন"}
                    </button>
                </form>

                <p className="small mt">
                    {mode === "login" ? (
                        <>
                            অ্যাকাউন্ট নেই?{" "}
                            <a href="#" className="link" onClick={(e) => { e.preventDefault(); setMode("signup"); setError(""); setInfo(""); }}>
                                রেজিস্টার করুন
                            </a>
                        </>
                    ) : (
                        <>
                            অ্যাকাউন্ট আছে?{" "}
                            <a href="#" className="link" onClick={(e) => { e.preventDefault(); setMode("login"); setError(""); setInfo(""); }}>
                                লগইন করুন
                            </a>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
