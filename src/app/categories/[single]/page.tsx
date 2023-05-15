import BlogCard from "@/components/BlogCard";
import config from "@/config/config.json";
import { getSinglePage } from "@/lib/contentParser";
import { getTaxonomy } from "@/lib/taxonomyParser";
import taxonomyFilter from "@/lib/utils/taxonomyFilter";
import PageHeader from "@/partials/PageHeader";
const { blog_folder } = config.settings;

export const generateStaticParams = () => {
  const categories = getTaxonomy(blog_folder, "categories");

  return categories.map((category) => {
    return {
      params: { category },
    };
  });
};

const CategorySingle = ({ params }: { params: { single: string } }) => {
  const posts = getSinglePage(blog_folder);
  const filterByCategories = taxonomyFilter(posts, "categories", params.single);

  return (
    <>
      <PageHeader title={params.single} />
      <div className="section-sm pb-0">
        <div className="container">
          <div className="row">
            {filterByCategories.map((post: any, index: number) => (
              <div className="mb-14 md:col-6 lg:col-4" key={index}>
                <BlogCard data={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategorySingle;
