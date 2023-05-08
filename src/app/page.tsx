import ImageFallback from "@/components/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import { FaCheck } from "react-icons/fa/index.js";

const Home = async () => {
  const homepage = await getListPage("_index.md");
  const { frontmatter } = homepage;
  const { banner, features } = frontmatter;

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

      {features.map(
        (
          feature: {
            button: any;
            image: string;
            bulletpoints: any;
            content: string;
            title: string;
          },
          index: number
        ) => (
          <section
            key={index}
            className={`section-sm ${index % 2 === 0 && "bg-gradient"}`}
          >
            <div className="container">
              <div className="row items-center justify-between">
                <div
                  className={`mb:md-0 mb-6 md:col-5 ${
                    index % 2 !== 0 && "md:order-2"
                  }`}
                >
                  <ImageFallback
                    src={feature.image}
                    height={480}
                    width={520}
                    alt={feature.title}
                  />
                </div>
                <div
                  className={`md:col-7 lg:col-6 ${
                    index % 2 !== 0 && "md:order-1"
                  }`}
                >
                  {markdownify(feature.title, "h2", "mb-4")}
                  {markdownify(feature.content, "p", "mb-8 text-lg")}
                  <ul>
                    {feature.bulletpoints.map((bullet: string) => (
                      <li className="relative mb-4 pl-6" key={bullet}>
                        <FaCheck className={"absolute left-0 top-1.5"} />
                        {markdownify(bullet)}
                      </li>
                    ))}
                  </ul>
                  {feature.button.enable && (
                    <a
                      className="btn btn-primary mt-5"
                      href={feature.button.link}
                    >
                      {feature.button.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </section>
        )
      )}
    </>
  );
};

export default Home;
