import { humanize } from "@/lib/utils/textConverter";

const PostSidebar = ({
  tags,
  categories,
  allCategories,
}: {
  tags: any;
  categories: any;
  allCategories: any;
}) => {
  return (
    <div className="lg:col-4">
      {/* <!-- categories --> */}
      <div className="mb-8">
        <h5 className="mb-6">Categories</h5>
        <div className="rounded bg-theme-light p-8 dark:bg-darkmode-theme-light">
          <ul className="space-y-4">
            {categories.map((category: any) => {
              const count = allCategories.filter(
                (c: any) => c === category
              ).length;
              return (
                <li key={category}>
                  <a
                    className="flex justify-between hover:text-primary dark:hover:text-darkmode-primary"
                    href={`/categories/${category}`}
                  >
                    {humanize(category)} <span>({count})</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* <!-- tags --> */}
      <div className="mb-8">
        <h5 className="mb-6">Tags</h5>
        <div className="rounded bg-theme-light p-6 dark:bg-darkmode-theme-light">
          <ul>
            {tags.map((tag: any) => {
              return (
                <li className="inline-block" key={tag}>
                  <a
                    className="m-1 block rounded bg-white px-3 py-1 hover:bg-primary hover:text-white dark:bg-darkmode-body dark:hover:bg-darkmode-primary dark:hover:text-dark"
                    href={`/tags/${tag}`}
                  >
                    {humanize(tag)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PostSidebar;