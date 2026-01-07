import type React from "react"
import type { Metadata } from "next"
import { Poppins, Playfair_Display } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
// @ts-ignore: allow side-effect css import without module declarations
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sanaz9t9.vercel.app"),
  title: {
    default: "Sana Hafeez - UI/UX Designer & Creative Portfolio",
    template: "%s | Sana Hafeez",
  },
  description:
    "Sana Hafeez (Sana) is a UI/UX Designer, Digital Marketing & Graphic Design specialist from Pakistan. Explore my portfolio, projects, and creative work. Available for freelance projects.",
  keywords: [
    "Sana",
    "Sana Hafeez",
    "Sana portfolio",
    "Sana Hafeez portfolio",
    "Sana Hafeez designer",
    "Sana Hafeez Pakistan",
    "UI UX designer Pakistan",
    "UI designer",
    "UX designer",
    "graphic designer",
    "digital marketing designer",
    "web designer",
    "creative designer",
    "freelance designer Pakistan",
    "visual designer",
    "product designer",
    "design portfolio",
    "Figma designer",
    "Adobe XD designer",
    "branding designer",
    "UI design services",
  ],
  authors: [{ name: "Sana Hafeez", url: "https://sanaz9t9.vercel.app" }],
  creator: "Sana Hafeez",
  publisher: "Sana Hafeez",
  applicationName: "Sana Hafeez Portfolio",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sanaz9t9.vercel.app",
    siteName: "Sana Hafeez Portfolio",
    title: "Sana Hafeez - UI/UX Designer & Creative Portfolio",
    description:
      "Sana Hafeez - Professional UI/UX Designer & Creative Specialist. Explore innovative designs and digital solutions crafted with passion.",
    images: [
      {
        url: "https://sanaz9t9.vercel.app/images/pic.jpg",
        width: 1200,
        height: 1200,
        alt: "Sana Hafeez - UI/UX Designer Portfolio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sana Hafeez - UI/UX Designer & Creative Portfolio",
    description:
      "Professional UI/UX & Graphic Designer from Pakistan. View portfolio, projects, and creative work.",
    images: ["https://sanaz9t9.vercel.app/images/pic.jpg"],
    creator: "@sanahafeez",
    site: "@sanahafeez",
  },
  alternates: {
    canonical: "https://sanaz9t9.vercel.app",
    languages: {
      "en-US": "https://sanaz9t9.vercel.app",
      "en": "https://sanaz9t9.vercel.app",
    },
  },
  category: "portfolio",
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icon-light-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#ec4899",
    "msapplication-TileColor": "#ec4899",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "format-detection": "telephone=no",
  },
}

// JSON-LD Structured Data for SEO - Person Schema
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://sanaz9t9.vercel.app/#person",
  name: "Sana Hafeez",
  alternateName: ["Sana"],
  url: "https://sanaz9t9.vercel.app",
  image: "https://sanaz9t9.vercel.app/images/pic.jpg",
  sameAs: [
    "https://www.linkedin.com/in/sana-hafeez-839599361/",
    "https://www.instagram.com/sanahafeez",
  ],
  jobTitle: "UI/UX Designer",
  worksFor: {
    "@type": "Organization",
    name: "Self-Employed",
  },
  description:
    "Professional UI/UX Designer and Graphic Design Specialist from Pakistan with expertise in digital marketing and creative design solutions.",
  email: "mailto:sanahafeez8oct@gmail.com",
  telephone: "+923143707610",
  knowsAbout: [
    "UI Design",
    "UX Design",
    "Graphic Design",
    "Digital Marketing",
    "Web Design",
    "Product Design",
    "Figma",
    "Adobe XD",
    "Adobe Photoshop",
    "Canva",
    "Branding",
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
    addressRegion: "Pakistan",
  },
}

// JSON-LD Portfolio/Website Schema
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sanaz9t9.vercel.app/#website",
  url: "https://sanaz9t9.vercel.app",
  name: "Sana Hafeez Portfolio",
  description:
    "Professional portfolio showcasing UI/UX design, graphic design, and digital marketing work by Sana Hafeez",
  author: {
    "@id": "https://sanaz9t9.vercel.app/#person",
  },
  creator: {
    "@id": "https://sanaz9t9.vercel.app/#person",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://sanaz9t9.vercel.app/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
}

// JSON-LD Organization Schema
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sanaz9t9.vercel.app/#organization",
  name: "Sana Hafeez",
  url: "https://sanaz9t9.vercel.app",
  logo: "https://sanaz9t9.vercel.app/favicon.svg",
  description: "Professional UI/UX Designer and Creative Design Services",
  sameAs: [
    "https://www.linkedin.com/in/sana-hafeez-839599361/",
    "https://www.instagram.com/sanahafeez",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Support",
    email: "sanahafeez8oct@gmail.com",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <link rel="canonical" href="https://sanaz9t9.vercel.app" />
        <meta name="author" content="Sana Hafeez" />
        <meta name="copyright" content="Sana Hafeez" />
        <meta name="geo.region" content="PK" />
        <meta name="geo.placename" content="Pakistan" />
        <meta name="geo.position" content="24.8607;67.0011" />
        <meta name="ICBM" content="24.8607, 67.0011" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
