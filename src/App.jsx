import { useEffect, useState } from "react";
import Die from "./components/Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

function App() {
   const [dice, setDice] = useState(allNewDice());
   const [tenzies, setTenzies] = useState(false);

   useEffect(() => {
      const allHeld = dice.every((die) => die.isHeld);
      const allSameValue = dice.every((die) => die.value === dice[0].value);

      if (allHeld && allSameValue) {
         setTenzies(true);
      }
   }, [dice]);

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
         {tenzies && <Confetti />}
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
               className="bg-[#5035FF] my-4 px-6 py-2 rounded-lg font-karla text-3xl text-white"
            >
               {tenzies ? "New Game" : "Roll"}
            </button>
         </main>
      </div>
   );
}

export default App;
