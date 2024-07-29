/* eslint-disable react/prop-types */
const Die = ({ value }) => {
   return (
      <div className="flex justify-center items-center shadow-lg rounded-lg font-bold font-karla text-[#2B283A] text-3xl cursor-pointer size-16">
         <h2>{value}</h2>
      </div>
   );
};

export default Die;
