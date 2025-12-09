// locales/en.ts

export const enMessages = {
  // --- Dashboard ---
  dashboard: {
    welcome: "Welcome to Sellova Dashboard",
    languageLabel: "Language",
    cards: {
      uploadGuide: "Upload guide",
      generateImage: "Generate image",
      generateVideo: "Generate video",
      createAvatar: "Create avatar",
      captionsHashtags: "Captions & hashtags",
      advisoryAnalysis: "Advisory & analysis",
      upgradePlan: "Upgrade plan",
      settings: "Settings",
      brandOverlay: "Brand overlay",
      promoSlides: "Promo slides",
      sellovaGuide: "Sellova guide",
      academyInsight: "Academy insight",
    },
  },

  // --- Login ---
  auth: {
    signIn: "Sign in",
    signUp: "Create account",
    name: "Name",
    email: "Email",
    password: "Password",
    continue: "Continue",
    backHome: "← Back to home",
  },

  // --- Generate Image ---
generateImage: {
  title: "AI Product Photo Studio",
  uploadLabel: "Upload product image",
  styleLabel: "Photo style",
  bgLabel: "Background",
  platformLabel: "Platform size",
  promptLabel: "Prompt",
  suggest: "Suggest",
  generate: "Generate",
  createAvatar: "Create Avatar",
  download: "Download",
  credits: "Credits used",

  // Messages
  generating: "Generating...",
  hint: "",
  costWarning: "This action costs 5 credits. Continue?",
  notEnoughCredit: "Not enough credits.",
  serverError: "Server error. Please try again.",
  success: "Image generated successfully!"
},


  // --- Generate Video ---
generateVideo: {
  title: "Generate promotional videos with AI",
  uploadTitle: "Upload your product image",
  chooseAvatar: "Choose avatar",
  orContinue: "or continue without avatar",

  platformLabel: "Video format (platform)",
  sizeHint: "Choose the aspect ratio for your video",

  lengthLabel: "Video length",
  seconds5: "5 seconds",
  seconds10: "10 seconds",

  cameraLabel: "Camera motion",
  effectsLabel: "Effects",
  effectsHint: "Optional cinematic effects for your video",

  lightingLabel: "Lighting",
  promptLabel: "Prompt",
  promptPlaceholder: "Describe how the video should look…",
  suggest: "Suggest",

  plan: "Current plan",
  planBasic: "Basic",
  creditsLeft: "Credits left",

  creditCostLabel: "Credit cost",
  videoTypeAmazon: "Amazon optimized video",
  videoTypeStandard: "Standard promotional video",

  generate: "Generate video",
  generating: "Generating video…",
  previewCaption: "This is a preview of your AI-generated video.",

  costWarning: "This action costs credits. Continue?",
  notEnoughCredit: "Not enough credits.",
  serverError: "Server error. Please try again.",
  success: "Video generated successfully!",
},

 // --- Avatar ---
avatar: {
  title: "Sellova — Avatar Studio",
  subtitle:
    "Create culture-tailored marketing photos & Amazon promo previews (credits explained in platform menu)",

  // Category
  categoryLabel: "Category",
  women: "Women",
  men: "Men",
  kids: "Kids",

  // Face
  faceSelectionLabel: "Face selection",
  faceUploadHelp:
    "You can use your own real face photo or an existing avatar as the model. Please upload a clear, front-facing photo.",

  // Platform + output
  platformLabel: "Platform",
  platformHelp:
    "Amazon Lifestyle: 3 photos = 30 credits • Amazon Promo Video 5s = 40 credits • 10s = 50 credits",

  platformInstagram: "Instagram (1:1) — 3 photos = 18 credits",
  platformInstagramStory: "Instagram Story (9:16) — 3 photos = 18 credits",
  platformTiktok: "TikTok (9:16) — 3 photos = 18 credits",
  platformYoutube: "YouTube (16:9) — 3 photos = 18 credits",
  platformFacebook: "Facebook (1200×630) — 3 photos = 18 credits",
  platformFacebookCover: "Facebook Cover — 3 photos = 18 credits",
  platformAmazonLifestyle: "Amazon Lifestyle (2000×2000) — 3 photos = 30 credits",
  platformAmazonVideo5: "Amazon Promo Video — 5s (preview) = 40 credits",
  platformAmazonVideo10: "Amazon Promo Video — 10s (preview) = 50 credits",

  outputVideoLabel: "Output",
  outputVideoHelp:
    "Video preview (single frame). Final video generation pipeline can be added later.",

  outputTypeLabel: "Output type",
  outputTypePhoto: "Photo (3 variants)",
  outputTypeVideo: "Video (single preview)",

  // Product & prompt
  productImageLabel: "Product image",
  promptLabel: "Prompt (optional)",
  promptPlaceholder: "Optional overlay text",

  // Buttons / credits / outputs
  generateButton: "Generate",
  generatingButton: "Generating...",
  requiredCreditsPrefix: "Required credits:",
  requiredCreditsAmazonLifestyle: "• Premium quality for Amazon (2000×2000).",
  requiredCreditsAmazonVideo: "• Amazon promo video preview frame.",
  outputsLabel: "Outputs",
  downloadButton: "Download",
  noOutputsYet: "No outputs yet. Click Generate.",

  // Alerts & footer text (برای ژنریشن)
  alertNoProduct: "Please upload a product image.",
  alertNoFace: "Please select a face or upload your own avatar.",
  alertNoCreditsPrefix: "Insufficient credits. Required:",
  alertNoCreditsSuffix: "Available:",
  alertGenericError: "Generation error. Please try again.",

  footerAmazon: "Basic • 500 credits • Amazon Lifestyle • 3 photos = 30 credits",
  footerStandard: "Basic • 500 credits • 3 photos = 18 credits",
  amazonVideoBanner: "Amazon Promo Video Preview • Conversion Optimized",
},

  // --- Hashtags & Captions ---
  hashtags: {
    title: "Generate Hashtags & Captions",
    previewLabel: "Preview",
    uploadButton: "Upload product image",
    productLabel: "Product name",
    productPlaceholder: 'e.g. "Luxury watch", "Silver necklace"...',
    platformLabel: "Platform",
    platformInstagram: "Instagram",
    platformFacebook: "Facebook",
    platformTiktok: "TikTok",
    platformTwitter: "Twitter (X)",
    platformYoutube: "YouTube",
    platformAmazon: "Amazon",
    suggestedHashtagsLabel: "hashtags (10)",
    noHashtagsText: 'No hashtags yet — click "Hashtags".',
    suggestHashtagsButton: "Hashtags",
    captionLabel: "Caption",
    captionPlaceholder: "Your caption will appear here...",
    suggestCaptionButton: "Caption",
    generateAllButton: "Generate All",
  },

  // --- Advisory & Analysis ---
  advisory: {
    title: "Advisory & analysis",

    setupTitle: "Setup",
    businessFieldLabel: "Business name / field",
    businessFieldPlaceholder: "e.g., Jewelry boutique, Handmade gifts…",
    pageUrlLabel: "Page URL / Username",
    pageUrlPlaceholder: "https://instagram.com/yourpage — or @yourhandle",
    platformLabel: "Platform",
    analyzeButton: "Analyze Page",
    analyzingButton: "Analyzing…",

    setupHint:
      "• Results here are simple demo logic on the client. Later you can plug a real backend (Scraper/API) for live data.",

    resultsTitle: "Results",
    competitorsCardTitle: "Top 7 competitors",
    competitorsEmpty:
      "Fill the form and click “Analyze Page” to see competitors.",
    activityCardTitle: "Competitor activity & differentiators",
    auditCardTitle: "Your page audit",

    strengthsTitle: "Strengths",
    weaknessesTitle: "Weaknesses",
    recommendationsTitle: "Recommendations",

    emptyPlaceholder: "—",

    tableNameHandle: "Name / Handle",
    tableFollowers: "Followers",
    tablePostsPerWeek: "Posts/W",
    tableStoriesPerDay: "Stories/D",
    tableAvgEng: "Avg Eng.",
    tableTopTags: "Top Tags",

    compSummary: [
      "Common post frequency is 3–5 posts/week; stories 2–4/day for top pages.",
      "Best-performing content: clean product closeups + 1 benefit caption + CTA.",
      "Top tags mix: 2–3 trending + 5–7 niche + 1 brand hashtag.",
      "Most engagement around 7–10 PM local time (Mon, Wed, Sat).",
    ],
    auditStrengths: ["Clear niche targeting potential."],
    auditWeaknesses: ["Posting cadence unclear or inconsistent."],
    auditActions: [
      "Set a fixed schedule: 4 posts/week + daily stories (Mon–Thu + Sat).",
      "Adopt a repeatable shoot preset for consistent look (background/light).",
      "Caption recipe: Hook → benefit → CTA.",
      "Keep a hashtag bank (20–30) and rotate.",
    ],
  },

  // --- Brand overlay ---
  brandOverlay: {
    title: "Add Brand Overlay",
    productUploadLabel: "Upload Product Image",
    logoUploadLabel: "Upload Your Brand Logo",
    positionLabel: "Position",
    sizeLabel: "Size (%)",
    opacityLabel: "Opacity (%)",
    paddingLabel: "Padding (px)",
    downloadButton: "Download Result",

    positionTopLeft: "Top Left",
    positionTopRight: "Top Right",
    positionBottomLeft: "Bottom Left",
    positionBottomRight: "Bottom Right",
    positionCenter: "Center",

    productAlt: "Product",
    logoAlt: "Logo",
  },

  // --- Settings ---
  settings: {
    title: "Account Settings",

    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Enter your name",

    emailLabel: "Email Address",
    emailPlaceholder: "Enter your email",

    passwordLabel: "Password",
    passwordPlaceholder: "Enter new password",

    subscriptionLabel: "Subscription Type",

    languageLabel: "Language",

    saveButton: "Save Changes",
    supportButton: "Go to Support",

    saveAlertTitle: "Settings Saved!",
    saveAlertNameLabel: "Name",
    saveAlertEmailLabel: "Email",
    saveAlertLanguageLabel: "Language",
  },

 // --- support ---
support: {
  title: "Support",
  subtitle: "Tell us what you need help with and we’ll get back to you.",
  formTitle: "Contact support",
  formDescription: "Send us a short message about your issue. Attachments and advanced features can be added later via the web app.",
  nameLabel: "Full name",
  namePlaceholder: "Enter your name",
  emailLabel: "Email address",
  emailPlaceholder: "Enter your email",
  topicLabel: "Topic",
  topicTechnical: "Technical issue / Bug",
  topicBilling: "Billing / Subscription",
  topicOther: "Other / General question",
  messageLabel: "Message",
  messagePlaceholder: "Describe your question or problem…",
  sendButton: "Send message",
  responseNote: "We usually respond within 24–48 hours (business days).",
  alertSent: "Your message has been sent! We will contact you soon.",
  faqTitle: "Frequently asked questions",
  faqIntro: "Here are a few quick answers for the most common questions.",
  faq1Q: "How can I create ad images and videos with my products?",
  faq1A: "Go to the Image & Video Creator pages from the main menu, upload your product photo, choose your platform, and click Generate.",
  faq2Q: "How do I upgrade or change my subscription?",
  faq2A: "Open the Settings page, look at your current plan, and use the upgrade option (coming soon in the web app).",
  faq3Q: "Can I download the content I generate?",
  faq3A: "Yes. On image / video pages, after generation you can click the Download button under each result.",
  extraTitle: "Still need help?",
  extraText: "Use the form on the left and describe your case in detail (platform, type of content, and your goals). This helps us give you more precise advice.",
},

// --- Promo slides ---
promo: {
  title: "Promo slides — brand-aware & multi-product",
  projectInputs: "Project inputs",
  uploadProduct: "Upload product image",
  uploadLogo: "Upload brand logo (optional)",
  productTypeLabel: "Product type",
  productTypePlaceholder: "Perfume, Sofa, T-shirt…",
  priceLabel: "Price",
  pricePlaceholder: "$199 / 8,900,000 T",
  specsLabel: "Key specs (comma separated)",
  specsPlaceholder: "Long-lasting, Elegant design, Gift-ready",
  platformLabel: "Platform",
  notesLabel: "Notes (anything special?)",
  notesPlaceholder: "Any special request to apply later by AI…",
  creditsLabel: "Credits",
  creditsText: "(Amazon removed). UI only — AI pipeline will be wired later.",
  generateButton: "Generate",
  downloadButton: "Download PNG",
  prevButton: "◀ Prev",
  nextButton: "Next ▶",
  slideLabel: "Slide",
  otherOption: "Other",
},

// --- Sellova guide ---
sellovaGuide: {
  slides: [
    {
      title: "Welcome to Sellova",
      subtitle: "We Build. You Shine. ✨",
      text: "Sellova is your all-in-one creative partner for modern advertising. From stunning images to powerful videos, avatars, and captions — everything you need to promote your brand in one place.",
      credits: "Free access",
    },
    {
      title: "Generate Images Like a Pro",
      subtitle: "AI-powered visual design",
      text: "Upload your product photo, and Sellova will remove the background, apply a luxury or minimal scene, perfect lighting, and create professional promo images for any platform.",
      credits: "Uses 3 credits per image",
    },
    {
      title: "Create Realistic Avatars",
      subtitle: "Turn imagination into faces",
      text: "Design your own brand model or spokesperson. Customize hair, pose, outfit, and vibe — or let Sellova suggest avatar styles that match your product category perfectly.",
      credits: "Uses 10 credits per avatar",
    },
    {
      title: "Generate Promo Videos",
      subtitle: "5–10 seconds of pure attention",
      text: "Turn static products into cinematic short ads. Add captions, effects, and transitions automatically designed to match your product’s personality.",
      credits: "Uses 15 credits per video",
    },
    {
      title: "Promo Slides",
      subtitle: "Showcase your products with impact",
      text: "Sellova automatically creates stylish slides that highlight your product features, benefits, and final tagline — ideal for posts, stories, or shop banners.",
      credits: "Uses 17 credits (Amazon excluded)",
    },
    {
      title: "Captions & Hashtags",
      subtitle: "Let AI write what sells",
      text: "Our copy engine creates catchy captions, smart hashtags, and emotional phrases optimized for engagement. You can also add your own brand tone.",
      credits: "Uses 3 credits per caption set",
    },
    {
      title: "Brand Overlay",
      subtitle: "Your brand identity, everywhere",
      text: "Add your logo and brand color automatically to all your images and videos with one click. Keep your posts consistent and professional.",
      credits: "Free forever",
    },
    {
      title: "Advisory & Analysis",
      subtitle: "Smart insights for smarter marketing",
      text: "Sellova analyzes your campaign data, identifies strengths and weaknesses, and recommends how to improve conversions and engagement.",
      credits: "Uses 5 credits per analysis",
    },
    {
      title: "Academy Insight",
      subtitle: "Learn from the best in minutes",
      text: "Short, text-based guides (no videos) that teach you marketing psychology, product photography, and AI trends — completely free for all users.",
      credits: "Free forever",
    },
    {
      title: "Ready to Start?",
      subtitle: "Your creative journey begins now",
      text: "Join thousands of creators and sellers using Sellova to build professional branding, boost visibility, and grow revenue faster than ever.",
      credits: "Let’s create your first project!",
    },
  ],
},

//--- Academy insight ---
  academyInsight: {
    title: "Sellova Academy — Insight",
    quickTipsTitle: "Quick Tips",
    meta: "This page is educational and uses no credits.",
    locale: "en",
  },
};

