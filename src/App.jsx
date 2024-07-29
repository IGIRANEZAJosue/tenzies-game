import "./App.css";
import Die from "./components/Die";

function App() {
   return (
      <div className="flex justify-center items-center bg-[#0B2434] p-12 h-[100vh]">
         <main className="flex justify-center items-center bg-[#F5F5F5] rounded-xl w-full max-w-[800px] h-[400px] font-inter">
            <div className="gap-6 grid grid-cols-5 grid-rows-2">
               <Die value={Math.floor(Math.random() * 6 + 1)} />
               <Die value={Math.floor(Math.random() * 6 + 1)} />
               <Die value={Math.floor(Math.random() * 6 + 1)} />
               <Die value={Math.floor(Math.random() * 6 + 1)} />
               <Die value={Math.floor(Math.random() * 6 + 1)} />
               <Die value={Math.floor(Math.random() * 6 + 1)} />
               <Die value={Math.floor(Math.random() * 6 + 1)} />
               <Die value={Math.floor(Math.random() * 6 + 1)} />
               <Die value={Math.floor(Math.random() * 6 + 1)} />
               <Die value={Math.floor(Math.random() * 6 + 1)} />
            </div>
         </main>
      </div>
   );
}

export default App;
