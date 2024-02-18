import CountUp from "react-countup";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
const Feature = () => {
  return (
    <>
      <div className="bg-[#ff0000] ">
        {/* <div className="flex justify-center">
          <h1 className="text-3xl md:text-5xl my-14 md:my-28 font-bold border-b-4 text-white border-white p-5 inline-block ">
            Our Special Feature{" "}
          </h1>
        </div> */}
        <SectionTitle title="Our Special Feature"></SectionTitle>
        <div className="grid md:mx-16 lg:mx-0 m-2 gap-y-5 md:gap-y-10  place-items-center lg:grid-cols-3">
          <div className="card  lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/F7St9Nb/image.png" alt="Image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#ff0000] text-2xl ">
                No Return Charge!
              </h2>
              <p>
                If your customer won't receive the product,we will return the
                parcel for{" "}
                <span className="bg-red-600 bg-opacity-80 z-20 p-1 text-white font-bold">
                  Free!
                </span>
                There are no charge for return.
              </p>
            </div>
          </div>
          <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/9sH4k9L/image.png" alt="Image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#ff0000] text-2xl ">
                Super Fast Delivery!
              </h2>
              <p>
                You can provide us for your time to deliver the product on time.
                We will delver your product before your deadline.
              </p>
            </div>
          </div>

          <div className="card lg:w-96 bg-base-100 shadow-xl">
            <figure>
              <img src="https://i.ibb.co/XJ8yR4k/image.png" alt="Image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-[#ff0000] text-2xl ">
                Parcel Safety!
              </h2>
              <p>
                In our office, your valuable parcel is always safe. Because we
                have a special team for checking every parcel carefully.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="md:-mb-14">
            <SectionTitle title="Activities On Our Website"></SectionTitle>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-4 md:pt-10 p-10">
            <div className="p-5 bg-white rounded-lg text-center">
              <h1 className="text-[#ff0000] font-bold text-4xl">
                Parcel Booked
              </h1>
              <h1 className=" text-5xl m-3 font-bold">
                <CountUp
                  enableScrollSpy={true}
                  end={875}
                  duration={5}
                  delay={1}
                ></CountUp>
              </h1>
            </div>
            <div className="p-5 bg-white rounded-lg text-center">
              <h1 className="text-[#ff0000]  font-bold text-4xl">
                Parcel Delivered
              </h1>
              <h1 className=" text-5xl m-3 font-bold">
                <CountUp
                  enableScrollSpy={true}
                  delay={2}
                  end={710}
                  duration={5}
                ></CountUp>
              </h1>
            </div>
            <div className="p-5 bg-white rounded-lg text-center">
              <h1 className="text-4xl text-[#ff0000] font-bold">
                {" "}
                Registered User's
              </h1>
              <h1 className="  text-5xl m-3 font-bold">
                <CountUp
                  enableScrollSpy={true}
                  end={235}
                  delay={2}
                  duration={5}
                ></CountUp>
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-30 flex relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="relative bottom-0"
        >
          <path
            fill="#ff0000"
            d="M0,192L40,197.3C80,203,160,213,240,208C320,203,400,181,480,165.3C560,149,640,139,720,149.3C800,160,880,192,960,181.3C1040,171,1120,117,1200,112C1280,107,1360,149,1400,170.7L1440,192L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default Feature;
