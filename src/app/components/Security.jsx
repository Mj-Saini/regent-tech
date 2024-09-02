import { securityData } from "./Helper";
import SecuritiesCards from "./SecuritiesCards";

const Security = ({
  heading1,
  heading2,
  subHeading,
  subHeading2,
  description,
  heading2Styling,
}) => {
  return (
    <section className="py-12 px-5 md:py-14 lg:py-16 xl:py-20 relative ">
      <span className="bg-[#2FCADB99]/20 inline-block sm:w-[493px] sm:h-[493px] rounded-full blur-[100px] absolute sm:top-[150px] sm:-left-[150px]"></span>
      <div className="max-w-[1340px] 2xl:max-w-[1550px] mx-auto">
        {" "}
        <div className="flex flex-col items-center">
          <p className="font-semibold text-base md:text-2xl text-[#3ED5DD] text-center">
            {subHeading}
          </p>
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[56px] lg:leading-[65px] text-center text-white mt-2">
            {heading1}
            <span className={` text-center block ${heading2Styling}`}>
              {heading2}
            </span>
          </h2>
          <p className="text-white text-center text-base md:text-lg font-normal mt-3 md:mt-6 max-w-[761px] mx-auto">
            {description}
          </p>{" "}
          <p className="font-semibold text-base md:text-2xl text-[#3ED5DD] text-center">
            {subHeading2}
          </p>
        </div>
        <div className="sm:mt-[50px] flex flex-wrap justify-center -mx-6">
          {securityData.map((items, index) => (
            <div key={index} className="w-full sm:w-1/2 xl:w-1/3 px-6 mt-16">
              <SecuritiesCards mapData={items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
