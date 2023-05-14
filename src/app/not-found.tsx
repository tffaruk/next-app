import NotFound from "@/layouts/NotFound";
import { getListPage } from "@/lib/contentParser";

const PageNotFound = () => {
  const data = getListPage("pages/404.md");
  return <NotFound data={data} />;
};

export default PageNotFound;
