import fs from "fs";
import matter from "gray-matter";
import path from "path";
const contentPath = "src/content";

// get list page data, ex: _index.md
export const getListPage = (filePath:string) => {
  const pageData = fs.readFileSync(path.join(contentPath, filePath), "utf-8");
  const pageDataParsed = matter(pageData);
  const notFoundPage = fs.readFileSync(path.join(contentPath, "pages/404.md"), "utf-8");
  const notFoundDataParsed = matter(notFoundPage);
  let frontmatter, content;

  if (pageDataParsed) {
    content = pageDataParsed.content;
    frontmatter = pageDataParsed.data;
  } else {
    content = notFoundDataParsed.content;
    frontmatter = notFoundDataParsed.data;
  }

  return {
    frontmatter,
    content,
  };
};

// get all single pages, ex: blog/post.md
export const getSinglePage = (folder:string) => {
  const filesPath = fs.readdirSync(path.join(contentPath, folder));
  const sanitizeFiles = filesPath.filter((file) => file.endsWith(".md"));
  const filterSingleFiles = sanitizeFiles.filter((file) =>
    file.match(/^(?!_)/)
  );
  const singlePages = filterSingleFiles.map((filename) => {
    const slug = filename.replace(".md", "");
    const pageData = fs.readFileSync(path.join(contentPath, folder, filename), "utf-8");
    const pageDataParsed = matter(pageData);
    const frontmatterString = JSON.stringify(pageDataParsed.data);
    const frontmatter = JSON.parse(frontmatterString);
    const content = pageDataParsed.content;
    const url = frontmatter.url ? frontmatter.url.replace("/", "") : slug;
    return { frontmatter: frontmatter, slug: url, content: content };
  });

  const publishedPages = singlePages.filter(
    (page) =>
      !page.frontmatter.draft && page.frontmatter.layout !== "404" && page
  );
  const filterByDate = publishedPages.filter(
    (page) => new Date(page.frontmatter.date || new Date()) <= new Date()
  );

  return filterByDate;
};
