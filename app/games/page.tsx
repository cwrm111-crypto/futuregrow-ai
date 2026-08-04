import Link from "next/link";

export default function GamesPage() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">🎮 গেম সেন্টার</h1>
        <p className="hero-desc">
          গেমগুলো খুব শীঘ্রই চালু হচ্ছে। এখানে খেলে আয় করার সুযোগ পাবেন।
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
