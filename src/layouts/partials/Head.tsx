"use client";

import config from "@/config/config.json";
import theme from "@/config/theme.json";
import { plainify } from "@/lib/utils/textConverter";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Head = ({
  title,
  meta_title,
  canonical,
  noindex,
  description,
  image,
}: {
  title: string;
  meta_title: string;
  image: string;
  canonical: string;
  noindex: boolean;
  description: string;
}) => {
  const { meta_image, meta_author, meta_description } = config.metadata;
  const { base_url, favicon } = config.site;
  const pathname = usePathname();

  // import google font css
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  const [fontcss, setFontcss] = useState("");
  useEffect(() => {
    fetch(
      `https://fonts.googleapis.com/css2?family=${pf}${
        sf ? "&family=" + sf : ""
      }&display=swap`
    ).then((res) => res.text().then((css) => setFontcss(css)));
  }, [pf, sf]);

  return (
    <head>
      {/* title */}
      <title>
        {plainify(meta_title ? meta_title : title ? title : config.site.title)}
      </title>

      {/* canonical url */}
      {canonical && <link rel="canonical" href={canonical} itemProp="url" />}

      {/* noindex robots */}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* meta-description */}
      <meta
        name="description"
        content={plainify(description ? description : meta_description)}
      />

      {/* author from config.json */}
      <meta name="author" content={meta_author} />

      {/* og-title */}
      <meta
        property="og:title"
        content={plainify(
          meta_title ? meta_title : title ? title : config.site.title
        )}
      />

      {/* og-description */}
      <meta
        property="og:description"
        content={plainify(description ? description : meta_description)}
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${base_url}/${pathname.replace("/", "")}`}
      />

      {/* twitter-title */}
      <meta
        name="twitter:title"
        content={plainify(
          meta_title ? meta_title : title ? title : config.site.title
        )}
      />

      {/* twitter-description */}
      <meta
        name="twitter:description"
        content={plainify(description ? description : meta_description)}
      />

      {/* og-image */}
      <meta
        property="og:image"
        content={`${base_url}${image ? image : meta_image}`}
      />

      {/* twitter-image */}
      <meta
        name="twitter:image"
        content={`${base_url}${image ? image : meta_image}`}
      />
      <meta name="twitter:card" content="summary_large_image" />

      {/* responsive meta */}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5"
      />

      {/* favicon */}
      <link rel="shortcut icon" href={favicon} />
      {/* theme meta */}
      <meta name="theme-name" content="nextplate" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: light)"
        content="#fff"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#000"
      />

      {/* google font css */}
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <style>{fontcss}</style>
    </head>
  );
};

export default Head;
