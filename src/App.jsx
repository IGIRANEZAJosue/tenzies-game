import { useState } from "react";
import "./App.css";
import Die from "./components/Die";

function App() {
   const [dice, setDice] = useState(allNewDice());

   function allNewDice() {
      const newDice = [];
      for (let i = 0; i < 10; i++) {
         newDice.push(Math.ceil(Math.random() * 6));
      }

      return newDice;
   }

   const diceElements = dice.map((die) => {
      return <Die value={die} />;
   });

   return (
      <div className="flex justify-center items-center bg-[#0B2434] p-12 h-[100vh]">
         <main className="flex justify-center items-center bg-[#F5F5F5] rounded-xl w-full max-w-[800px] h-[400px] font-inter">
            <div className="gap-6 grid grid-cols-5 grid-rows-2">
               {diceElements}
            </div>
         </main>
      </div>
   );
}

export default App;
