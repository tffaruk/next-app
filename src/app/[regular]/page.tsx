import Default from "@/layouts/Default";
import NotFound from "@/layouts/NotFound";
import { getListPage, getSinglePage } from "@/lib/contentParser";

export const generateStaticParams = async () => {
  const regularPages = getSinglePage("pages");

  return regularPages.map((page) => ({
    regular: page.slug,
  }));
};

// for all regular pages
const RegularPages = async ({ params }: { params: { regular: string } }) => {
  const regularData = getSinglePage("pages");
  const NotFoundData = getListPage("pages/404.md");
  const pageData = regularData.filter(
    (page) => page.slug === params.regular
  )[0];

  return (
    <>
      {pageData ? (
        <Default data={pageData} />
      ) : (
        <NotFound data={NotFoundData} />
      )}
    </>
  );
};

export default RegularPages;
