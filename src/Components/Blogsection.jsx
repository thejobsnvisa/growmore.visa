import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";
import img29 from "../assets/img29.png";
import img30 from "../assets/img30.png";
import img31 from "../assets/img31.jpg";

const blogs = [
   {
      id: 1,
      slug: "time-to-reform-australias-student-visa-system",
      title: "Time to Reform Australia’s Student Visa System",
      metaTitle: "Australia Student Visa System Reform 2026 | Key Changes & Impact",
      metaDescription:
        "Explore why Australia’s student visa system needs reform in 2026, the challenges international students face, and how new policies may impact study and migration pathways.",
      date: "April 29, 2026",
      image: `${img31}`,
    },
    {
      id: 2,
      slug: "idp-shares-at-record-lows-what-this-means-for-international-education-and-migration",
      title:
        "IDP Shares at Record Lows – What This Means for International Education and Migration",
      metaTitle:
        "IDP Shares Fall 2026 | Impact on International Education & Migration",
      metaDescription:
        "Discover what the decline in IDP shares means for international students, global education markets, visa trends, and migration opportunities in 2026.",
      date: "April 27, 2026",
      image: `${img30}`,
    },
    {
      id: 3,
      slug: "germany-is-not-an-alternative-it-is-a-strategy",
      title:
        "Germany Study Visa 2026: Why Germany is the Smartest Career Strategy for International Students",
      metaTitle:
        "Germany Study Visa 2026 | Best Career Strategy for Students",
      metaDescription:
        "Learn why Germany is becoming a top destination for international students in 2026 with affordable education, career opportunities, and strong post-study benefits.",
      date: "April 25, 2026",
      image: `${img29}`,
    },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Subtitle */}
        <p className="text-[#8fd07c] font-semibold text-base tracking-widest uppercase mb-3">
          LATEST ARTICLES
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-medium text-[#163c3d] mb-14">
          Global<span className="text-[#8fd07c] font-semibold"> Immigration</span>{" "}
          and <span className="font-semibold">Visa News</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48  p-4 rounded-4xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#163c3d] mb-6">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                  <FaCalendar className="h-4 w-4 text-[#7cc576] font-medium" />{" "}
                  {blog.date}
                </p>

                <div className="mt-auto">
                  {/* 2. Wrap the button in a Link using the slug or ID */}
                  <Link to={`/blogs/${blog.slug}/`}>
                    <button className="group text-[#6dc7d1] font-semibold flex items-center gap-2 justify-end w-full transition-all duration-300">
                      <span className="relative">
                        READ MORE
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6dc7d1] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
