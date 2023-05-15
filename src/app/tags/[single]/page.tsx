import BlogCard from "@/components/BlogCard";
import config from "@/config/config.json";
import { getSinglePage } from "@/lib/contentParser";
import { getTaxonomy } from "@/lib/taxonomyParser";
import taxonomyFilter from "@/lib/utils/taxonomyFilter";
import PageHeader from "@/partials/PageHeader";
const { blog_folder } = config.settings;

export const generateStaticParams = () => {
  const tags = getTaxonomy(blog_folder, "tags");

  return tags.map((tag) => {
    return {
      params: { tag },
    };
  });
};

const TagSingle = ({ params }: { params: { single: string } }) => {
  const posts = getSinglePage(blog_folder);
  const filterByTags = taxonomyFilter(posts, "tags", params.single);

  return (
    <>
      <PageHeader title={params.single} />
      <div className="section-sm pb-0">
        <div className="container">
          <div className="row">
            {filterByTags.map((post: any, index: number) => (
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

export default TagSingle;
