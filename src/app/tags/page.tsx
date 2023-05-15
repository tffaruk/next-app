import config from "@/config/config.json";
import { getAllTaxonomy, getTaxonomy } from "@/lib/taxonomyParser";
import { humanize } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";

const tags = () => {
  const { blog_folder } = config.settings;
  const tags = getTaxonomy(blog_folder, "tags");
  const alltags = getAllTaxonomy(blog_folder, "tags");

  return (
    <>
      <SeoMeta title={"Tags"} />
      <PageHeader title={"Tags"} />
      <section className="section">
        <div className="container text-center">
          <ul className="space-x-4">
            {tags.map((tag: any) => {
              const count = alltags.filter((c: string) => c === tag).length;
              return (
                <li className="inline-block" key={tag}>
                  <a
                    href={`/tags/${tag}`}
                    className="rounded bg-theme-light px-4 py-2 text-xl text-dark dark:bg-darkmode-theme-light dark:text-darkmode-dark"
                  >
                    {humanize(tag)}{" "}
                    <span className="ml-2 rounded bg-body px-2 dark:bg-darkmode-body">
                      {count}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default tags;
