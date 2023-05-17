import ImageFallback from "@/components/ImageFallback";
import MDXContent from "@/components/MDXContent";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import Link from "next/link";

const NotFound = () => {
  const data = getListPage("pages/404.md");
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div className="text-center sm:col-10 md:col-8 lg:col-6">
              <ImageFallback
                className="mb-8 w-full"
                src="/images/404.png"
                alt="page not found"
                height={320}
                width={630}
              />
              <h1
                className="h2 mb-4"
                dangerouslySetInnerHTML={markdownify(frontmatter.title)}
              />
              <div className="content">
                <MDXContent content={content} />
              </div>
              <Link href="/" className="btn btn-primary mt-8">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
