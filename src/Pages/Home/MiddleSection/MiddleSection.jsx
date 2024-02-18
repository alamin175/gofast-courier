import { FaHandHoldingMedical, FaWpforms } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";

const MiddleSection = () => {
  return (
    <>
      <div className="lg:flex items-center p-4 md:p-10">
        <div>
          <h1 className="text-4xl font-medium md:text-5xl text-[#ff0000] ">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="text-lg mt-8">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
        </div>
        <img
          className=" md:w-1/2 mx-auto mt-5 md:mt-0"
          src="https://i.ibb.co/fXwprx4/image.png"
          alt=""
        />
      </div>
      <section>
        <div className="flex justify-center">
          <h1 className="text-3xl md:text-5xl my-14 md:my-24 font-bold border-b-4 text-[#ff0000] border-[#ff0000] p-5 inline-block ">
            Follow Simple Steps
          </h1>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
          <div className="text-center">
            <FaWpforms className="text-8xl mx-auto mb-4 text-[#222086] "></FaWpforms>
            <h1 className="text-3xl text-[#ff0000] font-medium">
              Fill The Form
            </h1>
            <p className="text-xl mt-4">
              We specialize in the rapid, cost-effective and reliable delivery
              of couriers across differernt locations.
            </p>
          </div>
          <div className="text-center">
            <FaHandHoldingMedical className="text-8xl mx-auto mb-4 text-[#222086] "></FaHandHoldingMedical>
            <h1 className="text-3xl text-[#ff0000] font-medium">We Collect</h1>
            <p className="text-xl mt-4">
              Priority depends on the urgency of the package and the type of
              goods, catering to varying budgets.
            </p>
          </div>
          <div className="text-center">
            <TbTruckDelivery className="text-8xl mx-auto mb-4 text-[#222086] "></TbTruckDelivery>
            <h1 className="text-3xl text-[#ff0000] font-medium">Delivery</h1>
            <p className="text-xl mt-4">
              Our reliable logistics network enables the fastest and most
              dependable door-to-door transit service in the industry.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleSection;
