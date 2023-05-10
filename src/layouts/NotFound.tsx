import { markdownify } from "@/lib/utils/textConverter";
import shortcodes from "@/shortcodes/all";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import ImageFallback from "./components/ImageFallback";

const NotFound = ({ data }: { data: any }) => {
  const { frontmatter, content } = data;

  return (
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
              {/* @ts-expect-error Async Server Component */}
              <MDXRemote source={content} components={shortcodes} />
            </div>
            <Link href="/" className="btn btn-primary mt-8">
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
