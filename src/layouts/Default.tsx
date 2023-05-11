import { markdownify } from "@/lib/utils/textConverter";
import shortcodes from "@/shortcodes/all";
import { MDXRemote } from "next-mdx-remote/rsc";
import PageHeader from "./partials/PageHeader";

const Default = ({ data }: { data: any }) => {
  const { frontmatter, content } = data;
  const { title } = frontmatter;

  return (
    <>
      <PageHeader title={title} />
      <section className="section">
        <div className="container">
          <h1
            className="h2 mb-8 text-center"
            dangerouslySetInnerHTML={markdownify(title)}
          />
          <div className="content">
            {/* @ts-expect-error Async Server Component */}
            <MDXRemote source={content} components={shortcodes} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Default;
