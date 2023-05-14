import Default from "@/layouts/Default";
import { getSinglePage } from "@/lib/contentParser";
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
  const getRegularPages = getSinglePage("pages");

  const filterRegularPages = getRegularPages.filter(
    (page: any) => !page.frontmatter.layout
  );

  const regularPages = filterRegularPages.map((page: any) => ({
    regular: page.slug,
  }));

  return regularPages;
};

// for all regular pages
const RegularPages = ({ params }: { params: { regular: string } }) => {
  const regularData = getSinglePage("pages");
  const pageData = regularData.filter(
    (page) => page.slug === params.regular
  )[0];

  if (!pageData) {
    notFound();
  }

  return <Default data={pageData} />;
};

export default RegularPages;
