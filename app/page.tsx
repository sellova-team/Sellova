import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="sellovaPage">
    <main className="home">
      {/* ================= NAVBAR ================= */}

      <nav className="navbar">

        <div className="logoBox">

          <Image
            src="/logo.png"
            alt="Sellova"
            width={340}
            height={220}
            priority
          />

          <p className="logoSub">
            AI POWERED ADVERTISING
          </p>

        </div>
     </nav>
        
        <nav className="navButtons">

         
         

          <Link
            href="/workspace"
            className="startBtn">
          

            Get Started →

          </Link>


      </nav>

      {/* ================= HERO ================= */}

      <section className="hero">

        {/* LEFT */}

        <div className="heroLeft">
           

          
          <h1>

            AI Advertising

            <span> Suite</span>

          </h1>

         <h2 className="heroTitle">
  The Complete AI Platform
  <br />
  for <span>Modern Brands</span>
</h2>

<p className="heroDesc">
  Create professional AI product images, cinematic videos,
  avatars, personal branding, captions, hashtags and custom
  brand music. Transform a single product into unlimited
  marketing content for Instagram, TikTok, Facebook,
  YouTube Shorts and online stores, helping your business
  stand out and increase sales faster.
</p>

<section className="featuresBar">

<div className="featureItem">
    <Image src="/assets/icons/ai/lightning.png" alt="" width={34} height={34}/>
    <div>
      <h4>Super Fast</h4>
      <p>Generate content in seconds</p>
    </div>
  </div>

  <div className="featureItem">
    <Image src="/assets/icons/ai/diamond.png" alt="" width={34} height={34}/>
    <div>
      <h4>AI Powered</h4>
      <p>Advanced AI models</p>
    </div>
  </div>

  <div className="featureItem">
    <Image src="/assets/icons/ai/commercial.png" alt="" width={34} height={34}/>
    <div>
      <h4>Commercial Use</h4>
      <p>Use anywhere</p>
    </div>
  </div>
<div className="featureItem">
    <Image src="/assets/icons/ai/cloud.png" alt="" width={34} height={34}/>
    <div>
      <h4>Cloud Storage</h4>
      <p>All files in one place</p>
    </div>
  </div>

  <div className="featureItem">
    <Image src="/assets/icons/ai/support.png" alt="" width={34} height={34}/>
    <div>
      <h4>24/7 Support</h4>
      <p>Always here to help</p>
    </div>
  </div>


</section>



        </div>

        {/* RIGHT */}

        <div className="heroRight">

          <Image
            src="/assets/icons/ai/crown.png"
            alt="Sellova Crown"
            width={4500}
            height={4500}
            priority
            className="crown"
          />
<Image src="/assets/icons/ai/ai-image.png" alt="" width={120} height={120} className="card imageCard" />

<Image src="/assets/icons/ai/ai-avatar.png" alt="" width={120} height={120} className="card avatarCard" />

<Image src="/assets/icons/ai/ai-video.png" alt="" width={120} height={120} className="card videoCard" />

<Image src="/assets/icons/ai/ai-music.png" alt="" width={120} height={120} className="card musicCard" />

<Image src="/assets/icons/ai/ai-personal-brand.png" alt="" width={120} height={120} className="card brandCard" />

<Image src="/assets/icons/ai/ai-video-edit.png" alt="" width={120} height={120} className="card editCard" />


        </div>

      </section>

{/* ================= FEATURES ================= */}

<section className="homeFeatures">

  <div className="featureWhy">

    <span className="miniTitle">
      WHY SELLOVA ?
    </span>

    <div className="whyGrid">

      <div className="whyItem">
        <Image src="/assets/icons/ai/lightning.png" alt="" width={52} height={53}/>
        <h3>Lightning Fast</h3>
        <p>Create content in seconds</p>
      </div>

      <div className="whyItem">
        <Image src="/assets/icons/ai/permium-quality.png" alt="" width={58} height={58}/>
        <h3>Premium Quality</h3>
        <p>High quality realistic AI</p>
      </div>

      <div className="whyItem">
        <Image src="/assets/icons/ai/avatar.png" alt="" width={58} height={58}/>
        <h3>AI Avatars</h3>
        <p>Realistic AI models</p>
      </div>

      <div className="whyItem">
        <Image src="/assets/icons/ai/music.png" alt="" width={58} height={58}/>
        <h3>Brand Music</h3>
        <p>Custom AI music</p>
      </div>

      <div className="whyItem">
        <Image src="/assets/icons/ai/multi.png" alt="" width={58} height={58}/>
        <h3>Multi Platform</h3>
        <p>Instagram • TikTok • FB</p>
      </div>

      <div className="whyItem">
        <Image src="/assets/icons/ai/safe&sequr.png" alt="" width={58} height={58}/>
        <h3>Safe & Secure</h3>
        <p>100% secure cloud</p>
      </div>

    </div>

  </div>





  <div className="featureIndustry">

    <span className="miniTitle">
      SUPPORTED INDUSTRIES
    </span>

    <div className="industryGrid">

<div className="industryItem">
        <Image src="/assets/icons/ai/dress.png" alt="" width={60} height={60}/>
        <h3>Fashion</h3>
        <p>Clothing & Accessories</p>
      </div>

      <div className="industryItem">
        <Image src="/assets/icons/ai/shopping.png" alt="" width={60} height={60}/>
        <h3>Shoping</h3>
        <p>Rings & Necklaces</p>
      </div>

      <div className="industryItem">
        <Image src="/assets/icons/ai/beatuy.png" alt="" width={60} height={60}/>
        <h3>Beauty</h3>
        <p>Cosmetics & Skincare</p>
      </div>

      <div className="industryItem">
        <Image src="/assets/icons/ai/bear.png" alt="" width={60} height={60}/>
        <h3>Toys</h3>
        <p>Kids & Baby</p>
      </div>

      <div className="industryItem">
        <Image src="/assets/icons/ai/sofa.png" alt="" width={60} height={60}/>
        <h3>Home Decor</h3>
        <p>Furniture & Home</p>
      </div>

      <div className="industryItem">
        <Image src="/assets/icons/ai/watch.png" alt="" width={60} height={60}/>
        <h3> Watch</h3>
        <p>Luxury Watches</p>
      </div>

      <div className="industryItem">
        <Image src="/assets/icons/ai/bag.png" alt="" width={60} height={60}/>
        <h3>Bags</h3>
        <p>Leather Goods</p>
      </div>

      <div className="industryItem">
        <Image src="/assets/icons/ai/personal brand.png" alt="" width={60} height={60}/>
        <h3>Personal Brand</h3>
        <p>Online Stores</p>
      </div>

    </div>

  </div>


</section>
<section className="ctaSection">

  <div className="ctaContent">

    <h2>Ready to Take Your Brand to the Next Level?</h2>

    <p>
      Join thousands of sellers and brands who are already creating
      stunning ads, videos and marketing content with Sellova.
    </p>

    <Link href="/workspace"
    className="ctaButton">
      Get Started Now →
      </Link>

    <div className="ctaUsers">
      <div className="users">
        <img src="/assets/icons/ai/avatar1.png" alt="" />
        <img src="/assets/icons/ai/avatar2.png" alt="" />
        <img src="/assets/icons/ai/avatar3.png" alt="" />
        <img src="/assets/icons/ai/avatar4.png" alt="" />
         <img src="/assets/icons/ai/avatar5.png" alt="" />
      </div>

      <div>
        <strong>10K+</strong>
        <span>Happy Users</span>
      </div>
    </div>

  </div>



<div className="sellovaInfoBox">
  <h3>What is Sellova?</h3>

  <p>
    Sellova is an AI-powered platform that helps online sellers create high-quality product ads in seconds.  
    It generates images, videos, avatars, captions, and marketing content automatically.  
    Designed for fast e-commerce growth and social media marketing.  
    No design skills needed — just upload your product and get professional ads instantly.  
    Built for Instagram, TikTok, and online stores.  
    Your all-in-one AI marketing assistant.
  </p>
</div>
</section>

<div className="featureItem sellovaAcademy">
  <div>
    <h4>Sellova Academy</h4>
    <p>
      Learn how to create high-converting AI ads, videos, branding content
      and grow your online business using Sellova tools.
      Step-by-step tutorials, strategies, and creative guides for modern sellers.
    </p>
  </div>
</div>

    </main>
    </div>
  );
}

<Image
  src="/assets/icons/ai/rocket.png"
  className="rocket"
  width={70}
  height={70}
  alt="rocket"
/>
