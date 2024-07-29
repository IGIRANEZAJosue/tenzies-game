/* eslint-disable react/prop-types */
const Die = ({ value }) => {
   return (
      <div className="flex justify-center items-center shadow-lg rounded-lg font-bold font-karla text-[#2B283A] text-3xl size-16">
         {value}
      </div>
   );
};

export default Die;
