import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { FaStar } from "react-icons/fa";

const TopRider = () => {
  const axiosPublic = useAxiosPublic();

  // using tanstack query
  const { data: topRider = [] } = useQuery({
    queryKey: ["topRider"],
    queryFn: async () => {
      const res = await axiosPublic.get("/topRider");
      return res.data;
    },
  });
  // console.log(topRider);
  const slidesPerView = window.innerWidth < 768 ? 1 : 2;

  return (
    <div className="pb-16">
      <div className="flex justify-center">
        <h1 className="text-3xl md:text-5xl my-14 md:my-24 font-bold border-b-4 text-[#ff0000] border-[#ff0000] p-5 inline-block ">
          Our Top Rider
        </h1>
      </div>
      <div>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          autoplay={{ delay: 4000 }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
          {topRider.map((rider) => (
            <SwiperSlide key={rider._id}>
              <div className="card  w-11/12 md:w-96 drop-shadow- xl   glass mx-auto">
                <figure>
                  <img src={rider.image} alt="car!" />
                </figure>
                <div className="card-body text-white bg-[#ff0000] ">
                  <h2 className="card-title text-3xl">{rider.name} </h2>
                  <p className="text-xl">
                    Total Percel Delivered: {rider.delivered}{" "}
                  </p>

                  <p className="flex text-xl items-center">
                    Rating:{" "}
                    {Array.from({ length: rider.rating }, (_, index) => (
                      <FaStar key={index} />
                    ))}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopRider;
