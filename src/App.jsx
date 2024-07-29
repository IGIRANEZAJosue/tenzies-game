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
            isHeld: false,
            id: nanoid(),
         });
      }

      return newDice;
   }

   function holdDice(id) {
      setDice((oldDice) =>
         oldDice.map((die) => {
            return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
         })
      );
   }

   const diceElements = dice.map((die) => {
      return (
         <Die
            key={die.id}
            value={die.value}
            isHeld={die.isHeld}
            holdDice={() => holdDice(die.id)}
         />
      );
   });

   function rollDice() {
      setDice((oldDice) =>
         oldDice.map((die) => {
            return die.isHeld
               ? die
               : {
                    value: Math.ceil(Math.random() * 6),
                    isHeld: false,
                    id: nanoid(),
                 };
         })
      );
   }

   return (
      <div className="flex justify-center items-center bg-[#0B2434] p-12 h-[100vh]">
         <main className="flex flex-col justify-around items-center gap-8 bg-[#F5F5F5] py-8 rounded-xl w-full max-w-[800px] text-center">
            <h1 className="font-bold font-karla text-[#2B283A] text-5xl">
               Tenzies
            </h1>
            <p className="w-2/3 font-inter text-[#4A4E74] text-xl">
               Roll until all dice are the same. Click each die to freeze it at
               its current value between rolls.
            </p>
            <div className="gap-6 grid grid-cols-5 grid-rows-2">
               {diceElements}
            </div>

            <button
               onClick={rollDice}
               className="bg-[#5035FF] px-6 py-2 rounded-lg font-karla text-3xl text-white"
            >
               Roll
            </button>
         </main>
      </div>
   );
}

export default App;
