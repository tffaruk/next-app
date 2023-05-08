import ImageFallback from "@/components/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";

const Home = async () => {
  const homepage = await getListPage("_index.md");
  const { frontmatter } = homepage;
  const { banner } = frontmatter;

  return (
    <>
      <section className="section pt-14">
        <div className="container">
          <div className="row justify-center">
            <div className="mb-16 text-center lg:col-7">
              {markdownify(banner.title, "h1", "mb-4")}
              {markdownify(banner.content, "p", "mb-8")}
              {banner.button.enable && (
                <a className="btn btn-primary" href={banner.button.link}>
                  {banner.button.label}
                </a>
              )}
            </div>
            {banner.image && (
              <div className="col-12">
                <ImageFallback
                  src={banner.image}
                  width="1272"
                  height="403"
                  alt="banner image"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
