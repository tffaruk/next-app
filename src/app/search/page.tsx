import config from "@/config/config.json";
import Search from "@/layouts/Search";
import { getSinglePage } from "@/lib/contentParser";

const { blog_folder } = config.settings;

// Retrieve all articles
const posts = getSinglePage(blog_folder);

// List of items to search in
const searchList = posts.map((item) => ({
  slug: item.slug,
  frontmatter: item.frontmatter,
  content: item.content,
}));

const SearchPage = () => {
  return <Search searchList={searchList} />;
};

export default SearchPage;
