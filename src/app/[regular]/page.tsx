import Default from "@/layouts/Default";
import { getSinglePage } from "@/lib/contentParser";
import { notFound } from "next/navigation";

// for all regular pages
const RegularPages = async ({ params }: { params: any }) => {
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
