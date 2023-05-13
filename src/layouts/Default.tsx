import { markdownify } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import MDXContent from "./components/MDXContent";

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
            <MDXContent content={content} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Default;
