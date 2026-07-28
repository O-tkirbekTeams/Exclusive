import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { GoShieldCheck } from "react-icons/go";
import { FiArrowUp } from "react-icons/fi";

const Comfort = () => {
  const items = [
    {
      icon: TbTruckDelivery,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
    },
    {
      icon: RiCustomerService2Line,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: GoShieldCheck,
      title: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days",
    },
  ];

  return (
    <section className="relative py-16 bg-white">
      <div className="container_1200 grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-black/30 p-2 flex items-center justify-center mb-6">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <Icon className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-black mb-2 tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-black">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      <button
        aria-label="Scroll to top"
        className="absolute bottom-6 right-6 w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors  cursor-pointer"
      >
        <FiArrowUp className="w-6 h-6 text-black" />
      </button>
    </section>
  );
};

export default Comfort;