import Link from "next/link";

export default function HomePage() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">🚀 আপনার অনলাইন আয়ের স্মার্ট প্ল্যাটফর্ম</h1>
        <p className="hero-desc">
          গেম খেলুন, টাস্ক সম্পন্ন করুন, AI সহায়তা নিন এবং আয় করুন। সবকিছু এক জায়গায়!
        </p>
        <div className="hero-buttons">
          <Link href="/login" className="button button-primary btn-large">
            শুরু করুন (লগইন)
          </Link>
          <Link href="/games" className="button button-secondary btn-large">
            গেম সেন্টার দেখুন
          </Link>
        </div>
      </div>
    </div>
  );
}
