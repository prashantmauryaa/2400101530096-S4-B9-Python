import { useState } from 'react';

function Charcount() {
    const [text, setText] = useState("");

    const handleChange = (e) => {
        setText(e.target.value);
    };

    return (
        <div>
            <h2>TASK 3: Character Counter</h2>
            
            {/* The input field */}
            <input 
                type="text" 
                placeholder="Type here..." 
                value={text} 
                onChange={handleChange} 
                style={{ padding: "8px", fontSize: "16px", marginBottom: "10px" }}
            />
            
            {/* Displays the length of the string */}
            <h3>Character Count: {text.length}</h3>
        </div>
    )
}

export default Charcount;
