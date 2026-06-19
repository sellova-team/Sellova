import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="heroPage">

      {/* Navbar */}

      <nav className="navbar">

        <div className="logoWrap">
          <Image
            src="/logo1.png"
            alt="Sellova"
            width={450}
            height={280}
            priority
          />
          <p className="logoSub">
            AI POWERED ADVERTISING
          </p>
        </div>

        <div className="menu">
          <a>Features</a>
          <a>Solutions</a>
          <a>Templates</a>
          <a>Pricing</a>
          <a>Resources</a>
        </div>

        <div className="navButtons">
          <Link href="/login" className="loginBtn">
            Login
          </Link>

          <Link href="/dashboard" className="startBtn">
            Get Started
          </Link>
        </div>

      </nav>

      {/* Hero */}

      <section className="heroSection">

        {/* Left */}

        <div className="leftSide"
  
      >

          <h1>
            AI Advertising
            <span> Suite</span>
          </h1>

          

          <p>
            Create stunning ads, images, videos, avatars,
            music and marketing content in minutes with AI.
          </p>

        <div className="iconRow">
  <Image src="/assets/icons/ai/ai-image.png" width={190} height={160}  alt="ai image" />
  <Image src="/assets/icons/ai/ai-avatar.png" width={200} height={130}  alt="ai avatar" />
  <Image src="/assets/icons/ai/ai-video.png" width={190} height={160} alt="ai video" />
  <Image src="/assets/icons/ai/ai-music.png" width={190} height={150} alt="ai music" />
</div>
<div className="featureBar">

  <div className="featureItem">
    <Image src="/assets/icons/ai/lightning.png" width={56} height={56} alt="fast" />
    <div>
      <p>Lightning Fast</p>
      <span>Generate content in seconds</span>
    </div>
  </div>

  <div className="featureItem">
    <Image src="/assets/icons/ai/powered.png" width={66} height={66} alt="ai" />
    <div>
      <p>AI Powered</p>
      <span>Advanced AI models</span>
    </div>
  </div>

  <div className="featureItem">
    <Image src="/assets/icons/ai/commercial.png" width={76} height={76} alt="commercial" />
    <div>
      <p>Commercial Use</p>
      <span>Use anywhere, anytime</span>
    </div>
  </div>

  <div className="featureItem">
    <Image src="/assets/icons/ai/cloud.png" width={66} height={66} alt="cloud" />
    <div>
      <p>Cloud Storage</p>
      <span>All your files in one place</span>
    </div>
  </div>

  <div className="featureItem">
    <Image src="/assets/icons/ai/support.png" width={66} height={66} alt="support" />
    <div>
      <p>24/7 Support</p>
      <span>We’re here to help you</span>
    </div>
  </div>

</div>

        </div>

        {/* Right */}

  <div className="rightSide">
    <Image
    src="/assets/icons/ai/crown.png"
    alt="Crown"
    width={720}
    height={720}
    className="crown"
    />
  </div>

 
      </section>

    </main>
  );
}
