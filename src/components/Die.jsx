/* eslint-disable react/prop-types */
const Die = ({ value, isHeld, holdDice }) => {
   return (
      <div 
         onClick={holdDice} 
         className={`${isHeld ? "bg-[#59E391]" : "bg-white"} flex justify-center items-center shadow-lg rounded-lg font-bold font-karla text-[#2B283A] text-3xl cursor-pointer size-16`}
      >   
         <h2>{value}</h2>
      </div>
   );
};

export default Die;
