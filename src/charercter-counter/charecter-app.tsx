import { useState } from "react";
import "./charecter-app.css";

function CharecterApp() {
    const [text, setText] = useState<string>("");
    return (
        <> 
            <div className="min-h-screen bg-black flex flex-col justify-center items-center">   
                <h1 className="text-white text-5xl">{text.length}</h1>
                <input type="text" className="p-5 rounded mt-5 text-white" value={text} 
                    onChange={
                        (e) => setText(e.target.value)
                    }
                />
            </div>
        </>
    )
}

export default CharecterApp;