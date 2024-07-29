import { useState } from "react";
import "./App.css";
import Die from "./components/Die";
import { nanoid } from "nanoid";

function App() {
   const [dice, setDice] = useState(allNewDice());

   function allNewDice() {
      const newDice = [];
      for (let i = 0; i < 10; i++) {
         newDice.push({
            value: Math.ceil(Math.random() * 6),
            isHeld: true,
            id: nanoid(),
         });
      }

      return newDice;
   }

   const diceElements = dice.map((die) => {
      return <Die key={die.id} value={die.value} isHeld={die.isHeld} />;
   });

   function rollDice() {
      setDice(allNewDice);
   }

   return (
      <div className="flex justify-center items-center bg-[#0B2434] p-12 h-[100vh]">
         <main className="flex flex-col justify-around items-center bg-[#F5F5F5] rounded-xl w-full max-w-[800px] h-[400px] font-inter">
            <div className="gap-6 grid grid-cols-5 grid-rows-2">
               {diceElements}
            </div>

            <button
               onClick={rollDice}
               className="bg-[#5035FF] px-6 py-2 rounded-sm font-karla text-3xl text-white"
            >
               Roll
            </button>
         </main>
      </div>
   );
}

export default App;
