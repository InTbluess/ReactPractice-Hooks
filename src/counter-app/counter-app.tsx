import { useState } from "react";
import "./counter-app.css";

function CounterApp() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <div className="min-h-screen bg-black flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl">{count}</h1>
        <div className="buttons flex gap-5 pt-5">
          <button className="bg-red-700 hover:bg-red-800 text-white p-5 rounded cursor-pointer"
            onClick= { 
                ()=>{
                    if(count > 0){
                        setCount(p=>p-1)
                    }
                }
            }
          >Decrease</button>
          <button className="bg-green-700 hover:bg-green-800 text-white p-5 rounded cursor-pointer"
            onClick = { ()=> setCount(p=>p+1)
            }
          >Increase</button>
        </div>
      </div>
    </>
  );
}
export default CounterApp;
