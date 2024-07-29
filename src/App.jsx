import { useState } from "react";
import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   return (
      <div className="flex justify-center items-center bg-[#0B2434] p-12 h-[100vh]">
         <main className="bg-[#F5F5F5] rounded-xl w-full max-w-[800px] h-[400px]">
            {" "}
            Hello{" "}
         </main>
      </div>
   );
}

export default App;
