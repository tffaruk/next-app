import Footer from "@/partials/Footer";
import Head from "@/partials/Head";
import Header from "@/partials/Header";
import Providers from "@/partials/Providers";
import "@/styles/main.scss";

export default function RootLayout({
  title,
  meta_title,
  description,
  image,
  noindex,
  canonical,
  children,
}: {
  title: string;
  meta_title: string;
  image: string;
  canonical: string;
  noindex: boolean;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head
        title={title}
        meta_title={meta_title}
        image={image}
        canonical={canonical}
        noindex={noindex}
        description={description}
      />

      <body suppressHydrationWarning={true}>
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
