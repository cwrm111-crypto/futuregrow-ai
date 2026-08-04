import Link from "next/link";

export default function TasksPage() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">📋 টাস্ক</h1>
        <p className="hero-desc">
          টাস্কগুলো খুব শীঘ্রই চালু হচ্ছে। টাস্ক সম্পন্ন করে আয় করার সুযোগ পাবেন।
        </p>
        <div className="hero-buttons">
          <Link href="/" className="button button-secondary btn-large">
            হোমে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
}
