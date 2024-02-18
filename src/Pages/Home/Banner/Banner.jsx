import img from "../../../assets/pattern.svg";
const Banner = () => {
  /* using an svg style */
  const svgStyle = {
    width: "100%",
    height: "100vh", // Adjust the height based on your design needs
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23ffffff' /%3E%3Cpath d='M1920,1080C1654.1666666666667,1127.8333333333333,267.5,1125,0,1080C-267.5,1035,208.83333333333331,833.8333333333334,315,810C421.1666666666667,786.1666666666666,532.1666666666666,907,637,937C741.8333333333334,967,839.1666666666666,1004.6666666666666,944,990C1048.8333333333333,975.3333333333334,1157.5,881.8333333333334,1266,849C1374.5,816.1666666666666,1486,754.5,1595,793C1704,831.5,2185.8333333333335,1032.1666666666667,1920,1080C1654.1666666666667,1127.8333333333333,267.5,1125,0,1080' fill='%23ff0000' /%3E%3C/svg%3E")`,
    backgroundSize: "cover",
  };
  return (
    <div>
      {/* <img className="h-full" src={img} alt="" /> */}
      <div style={svgStyle}>
        <div className="lg:flex text-center md:text-left lg:gap-10 items-center justify-center">
          <div className="">
            <h1 className="text-5xl md:text-7xl mb-3 font-bold text-[#ff0000] ">
              YOUR PARCEL <br />
            </h1>
            <span className="text-2xl  md:text-4xl">
              {" "}
              IS ON CUSTOMER'S HOME
            </span>
          </div>
          <div className="flex justify-center">
            <img src="https://i.ibb.co/H7BbbBm/Delivery-1.gif" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
