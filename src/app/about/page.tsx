import ImageFallback from "@/components/ImageFallback";
import MDXContent from "@/components/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const About = async () => {
  const data = getListPage("pages/about.md");
  const { frontmatter, content } = data;
  const { title, image } = frontmatter;

  return (
    <section className="section-sm">
      <div className="container">
        <div className="row justify-center">
          <div className="text-center md:col-10 lg:col-7">
            {image && (
              <ImageFallback
                className="mx-auto mb-6 rounded-lg"
                src={image}
                width={200}
                height={200}
                alt={title}
              />
            )}
            <h2
              dangerouslySetInnerHTML={markdownify(title)}
              className="h3 mb-6"
            />
            <div className="content">
              <MDXContent content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
