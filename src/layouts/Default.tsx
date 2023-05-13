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
          <div className="content">
            <MDXContent content={content} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Default;
