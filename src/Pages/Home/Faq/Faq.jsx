import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <div>
      <SectionTitle title="Our Opinion About Service"></SectionTitle>
      <div className="w-10/12 mx-auto mb-16">
        <div className="collapse collapse-arrow my-4 bg-base-200 ">
          <input type="radio" name="my-accordion-2" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            Why you choose our service ?
          </div>
          <div className="collapse-content text-gray-500">
            <p>
              We provided the best service in Bangladesh. On time delivery and
              customer's satisfaction is our main priority. We have a big
              customer support team for support customer with very long time. No
              hesitation for any kind of information to know from our support
              team.
            </p>
          </div>
        </div>
        <div className="collapse collapse-arrow my-4 bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Understanding Our Courier Process
          </div>
          <div className="collapse-content text-gray-500">
            <p>
              Our courier service operates by collecting packages from senders,
              transporting them through our reliable network, and delivering
              them to recipients.
            </p>
          </div>
        </div>
        <div className="collapse my-4 collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Shipping Rates and Pricing
          </div>
          <div className="collapse-content text-gray-500">
            <p>
              Our shipping rates are determined based on factors such as package
              weight, dimensions, destination, and chosen delivery speed.
            </p>
          </div>
        </div>
        <div className="collapse my-4 collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Updating Delivery Information
          </div>
          <div className="collapse-content text-gray-500">
            <p>
              To ensure accurate delivery, clients can update their delivery
              addresses or make changes through our customer support channels.
            </p>
          </div>
        </div>
        <div className="collapse my-4 collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Lost or Damaged Shipments
          </div>
          <div className="collapse-content text-gray-500">
            <p>
              In case of lost or damaged shipments, clients can file a claim,
              and our team will investigate and provide a resolution.
            </p>
          </div>
        </div>
        <div className="collapse my-4 collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Returns and Reverse Logistics
          </div>
          <div className="collapse-content text-gray-500">
            <p>
              We provide a streamlined process for returns and reverse
              logistics, supporting clients with efficient return shipments.
              There are no extra charge for return product. You can get your
              return product for FREE!!
            </p>
          </div>
        </div>
        <div className="collapse my-4 collapse-arrow bg-base-200">
          <input type="radio" name="my-accordion-2" />
          <div className="collapse-title text-xl font-medium">
            Contacting Customer Support
          </div>
          <div className="collapse-content text-gray-500">
            <p>
              Our customer support team is accessible for inquiries, assistance,
              or issue resolution through various communication channels. We
              provided the best customer support .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
