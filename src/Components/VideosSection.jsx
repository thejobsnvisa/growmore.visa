import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Helmet } from "react-helmet-async"; 

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const API_KEY = import.meta.env.VITE_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_CHANNEL_ID;

const VideosSection = () => {
  const Url = "https://growmoreglobalvisa.com/videos"; // ✅ FIXED

  const [latestVideos, setLatestVideos] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // ✅ Reusable fetch function
  const fetchYouTubeData = async (eventType = "") => {
    try {
      let url = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&maxResults=6&type=video`;

      if (eventType) {
        url += `&eventType=${eventType}`;
      }

      const res = await fetch(url);

      if (!res.ok) {
        throw new Error("API request failed");
      }

      const data = await res.json();

      if (data.error) {
        console.error("YouTube API Error:", data.error.message);
        setError(true);
        return [];
      }

      return data.items || [];
    } catch (err) {
      console.error("Fetch Error:", err);
      setError(true);
      return [];
    }
  };

  useEffect(() => {
    if (!API_KEY || !CHANNEL_ID) {
      console.error("Missing API KEY or CHANNEL ID");
      // Avoid synchronous state updates inside the effect to prevent cascading renders
      // Schedule the state updates asynchronously
      setTimeout(() => {
        setError(true);
        setLoading(false);
      }, 0);
      return;
    }

    const loadData = async () => {
      setLoading(true);

      const latest = await fetchYouTubeData();
      setLatestVideos(latest);
      setLoading(false);
    };

    loadData();
  }, []);

  return (
    <>
      {/* ✅ SEO */}
      <Helmet>
        <title>
          Watch Expert Migration & Visa Tips | GrowMore Immigration
        </title>

        <meta
          name="description"
          content="Watch expert migration tips, visa guides, and success stories on GrowMore Immigration’s YouTube channel."
        />

        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Australia visa, migration tips, PR Australia, student visa, Growmore Immigration YouTube"
        />

        <link rel="canonical" href={Url} />

        {/* OG */}
        <meta
          property="og:title"
          content="Watch Expert Migration & Visa Tips | GrowMore Immigration"
        />
        <meta
          property="og:description"
          content="Explore migration advice, visa guides, and success stories."
        />
        <meta property="og:url" content={Url} />
        <meta property="og:image" content="https://www.growmoreglobalvisa.com/logo.jpg" />
      </Helmet>

      <div className="w-full bg-white">
        {/* HEADER */}

        {/* INTRO */}
        <section className="pt-16 md:pt-20 pb-10 text-center">
          <div className="max-w-8xl mx-auto px-6 md:px-16">
            {loading && (
              <p className="mt-6 text-gray-500">Loading videos...</p>
            )}

            {error && !loading && (
              <p className="mt-6 text-red-500">
                Failed to load videos. Please try again later.
              </p>
            )}
          </div>
        </section>

        {/* LATEST VIDEOS */}
        {!loading && !error && latestVideos.length > 0 && (
          <section className="pb-16 px-6 md:px-16 max-w-[1450px] mx-auto">
            {/* Subtitle */}
        <p className="text-[#8fd07c] font-bold text-base tracking-widest uppercase mb-3">
PERSONALIZED VISA GUIDANCE
        </p>
            <h2 className="text-4xl md:text-4xl font-sm text-black mb-14">
          Interactive <span className="font-bold">Live Sessions</span> with{" "}<span className="text-[#8fd07c] font-semibold">Krunal Nayak</span>{" "}<br/>
         <span className="font-bold">Explore</span><span className="font-sm"> essential immigration and visa information</span>
        </h2>

            <Swiper
              modules={[Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3 },
              }}
            >
              {latestVideos.map((video) => (
                <SwiperSlide key={video.id.videoId}>
                  <div className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-md transition">
                    <div className="aspect-video">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.id.videoId}`}
                        title={video.snippet.title}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>

                    <div className="p-4">
                      <h4 className="font-medium text-gray-800 line-clamp-2">
                        {video.snippet.title}
                      </h4>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        )}
      </div>
    </>
  );
};

export default VideosSection;