import BlogCard from "@/components/BlogCard";
import config from "@/config/config.json";
import { getSinglePage } from "@/lib/contentParser";
import { getTaxonomy } from "@/lib/taxonomyParser";
import taxonomyFilter from "@/lib/utils/taxonomyFilter";
import { humanize } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
const { blog_folder } = config.settings;

export const generateStaticParams = () => {
  const tags = getTaxonomy(blog_folder, "tags");

  const paths = tags.map((tag) => ({
    single: tag,
  }));

  return paths;
};

const TagSingle = ({ params }: { params: { single: string } }) => {
  const posts = getSinglePage(blog_folder);
  const filterByTags = taxonomyFilter(posts, "tags", params.single);

  return (
    <>
      <SeoMeta title={humanize(params.single)} />
      <PageHeader title={humanize(params.single)} />
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
