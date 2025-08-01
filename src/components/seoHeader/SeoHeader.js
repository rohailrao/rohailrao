import React from "react";
import { Helmet } from "react-helmet";
import {
  greeting,
  seo,
  socialMediaLinks,
  experience,
  contactPageData,
  certifications,
} from "../../portfolio.js";

function SeoHeader() {
  // Extract social media links excluding mail and tel
  const sameAs = socialMediaLinks
    .filter(
      (media) =>
        !(media.link.startsWith("tel") || media.link.startsWith("mailto"))
    )
    .map((media) => media.link);

  // Safe extraction of email from either 'mailto:' or Gmail URL
  let mail = "";
  const mailMedia = socialMediaLinks.find((media) =>
    media.link.startsWith("mailto:")
  );
  if (mailMedia) {
    mail = mailMedia.link.substring("mailto:".length);
  } else {
    const gmailMedia = socialMediaLinks.find((media) =>
      media.link.includes("mail.google.com")
    );
    if (gmailMedia) {
      const params = new URLSearchParams(gmailMedia.link.split("?")[1] || "");
      mail = params.get("to") || "";
    }
  }

  // Extract first work experience safely
  const job = experience.sections?.find((section) => section.work)
    ?.experiences?.[0];

  // Prepare structured data for certifications
  const credentials = certifications.certifications.map((cert) => ({
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalCredential",
    url: cert.certificate_link,
    name: cert.title,
    description: cert.subtitle,
  }));

  // Construct the schema.org JSON-LD
  const data = {
    "@context": "https://schema.org/",
    "@type": "Person",
    name: greeting.title,
    url: seo?.og?.url,
    email: mail || undefined,
    telephone: contactPageData.phoneSection?.subtitle || undefined,
    sameAs: sameAs,
    jobTitle: job?.title || "Data Analyst",
    worksFor: {
      "@type": "Organization",
      name: job?.company || "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: contactPageData.addressSection?.locality || "",
      addressRegion: contactPageData.addressSection?.region || "",
      addressCountry: contactPageData.addressSection?.country || "",
      postalCode: contactPageData.addressSection?.postalCode || "",
      streetAddress: contactPageData.addressSection?.streetAddress || "",
    },
    hasCredential: credentials,
  };

  return (
    <Helmet>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:title" content={seo?.og?.title} />
      <meta property="og:type" content={seo?.og?.type} />
      <meta property="og:url" content={seo?.og?.url} />
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}

export default SeoHeader;
