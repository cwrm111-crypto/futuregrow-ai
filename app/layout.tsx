import "./globals.css";
import Link from "next/link";
import { FaGoogle, FaTelegram, FaGithub, FaFacebook } from "react-icons/fa";

export const metadata = {
  title: "FutureGrow AI",
  description: "Game Center + CPA guided tasks",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body>
        <div className="shell">
          <header className="nav">
            <Link href="/" className="brand">
              🚀 FutureGrow AI
            </Link>
            <nav className="nav-links">
              <Link href="/">হোম</Link>
              <Link href="/games">গেম সেন্টার</Link>
              <Link href="/tasks">টাস্ক</Link>
              <Link href="/dashboard">ড্যাশবোর্ড</Link>
            </nav>
          </header>

          <main className="container">{children}</main>

          <footer className="footer">
            <div className="container footer-content">
              <p className="muted small">
                © {new Date().getFullYear()} FutureGrow AI. All rights reserved.
              </p>
              <div className="social-links">
                <a href="https://google.com" target="_blank" rel="noopener noreferrer" title="Google">
                  <FaGoogle />
                </a>
                <a href="https://t.me/your_bot" target="_blank" rel="noopener noreferrer" title="Telegram">
                  <FaTelegram />
                </a>
                <a href="https://github.com/your_org" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FaGithub />
                </a>
                <a href="https://facebook.com/your_page" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <FaFacebook />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
