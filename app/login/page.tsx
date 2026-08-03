import { FaGoogle, FaTelegram, FaGithub } from "react-icons/fa";

export default function LoginPage() {
    return (
        <div className="login-wrapper">
            <div className="login-card">
                <h1>🔐 স্বাগতম</h1>
                <p className="muted">আপনার অ্যাকাউন্টে লগইন করুন</p>

                <div className="social-buttons">
                    <button className="btn-google">
                        <FaGoogle /> Google দিয়ে লগইন
                    </button>
                    <button className="btn-telegram">
                        <FaTelegram /> Telegram দিয়ে লগইন
                    </button>
                    <button className="btn-github">
                        <FaGithub /> GitHub দিয়ে লগইন
                    </button>
                </div>

                <div className="divider">অথবা ইমেইল দিয়ে</div>

                <form className="login-form">
                    <input type="email" placeholder="আপনার ইমেইল" className="input-field" />
                    <input type="password" placeholder="পাসওয়ার্ড" className="input-field" />
                    <button type="submit" className="btn-primary">
                        লগইন করুন
                    </button>
                </form>

                <p className="small mt">
                    অ্যাকাউন্ট নেই? <a href="#" className="link">রেজিস্টার করুন</a>
                </p>
            </div>
        </div>
    );
}
