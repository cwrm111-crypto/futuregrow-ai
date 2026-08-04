"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser, logout, type User } from "@netlify/identity";

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<User | null>(null);
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        getUser().then((u) => {
            if (!u) {
                router.replace("/login");
            } else {
                setUser(u);
            }
            setChecked(true);
        });
    }, [router]);

    async function handleLogout() {
        await logout();
        router.replace("/login");
    }

    if (!checked) return null;
    if (!user) return null;

    const displayName = user.name || user.email;

    return (
        <div className="dashboard">
            <div className="dashboard-header">
                <h2 className="hero-title dashboard-title">👋 স্বাগতম, {displayName}!</h2>
                <button className="btn-primary logout-btn" onClick={handleLogout}>
                    লগ আউট
                </button>
            </div>

            <div className="dashboard-grid">
                <div className="stat-card">
                    <span className="stat-label">💳 ওয়ালেট</span>
                    <span className="stat-value">$0.00</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">📋 টাস্ক</span>
                    <span className="stat-value">০টি</span>
                </div>
                <div className="stat-card">
                    <span className="stat-label">🏆 লিডারবোর্ড</span>
                    <span className="stat-value">—</span>
                </div>
            </div>
        </div>
    );
}
