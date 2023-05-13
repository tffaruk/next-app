import { getSinglePage } from "@/lib/contentParser";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const regularPages = getSinglePage("pages");

  return regularPages.map((page) => ({
    regular: page.slug,
  }));
};

// for all regular pages
const RegularPages = async ({ params }: { params: any }) => {
  const regularData = getSinglePage("pages");
  const pageData = regularData.filter(
    (page) => page.slug === params.regular
  )[0];

  if (!pageData) {
    notFound();
  }

  // const { data } = await allRegulerPages(params.regular);

  return <h1>{pageData?.frontmatter?.title}</h1>;
};

export default RegularPages;
