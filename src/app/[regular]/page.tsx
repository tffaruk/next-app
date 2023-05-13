import Default from "@/layouts/Default";
import { getSinglePage } from "@/lib/contentParser";

export const generateStaticParams = async () => {
  const regularPages = getSinglePage("pages");

  return regularPages.map((page) => ({
    regular: page.slug,
  }));
};

// for all regular pages
const RegularPages = async ({ params }: { params: { regular: string } }) => {
  const regularData = getSinglePage("pages");
  const pageData = regularData.filter(
    (page) => page.slug === params.regular
  )[0];

  return <Default data={pageData} />;
};

export default RegularPages;
