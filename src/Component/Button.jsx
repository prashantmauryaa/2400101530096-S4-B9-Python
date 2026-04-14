import { useState } from 'react';

function Button() {
    const [data, setData] = useState("OFF");


    const handleToggle = () => {
        setData(data === "OFF" ? "ON" : "OFF");
    };

    return (
        <div>
            <h2> TASK 1 Toggle Button </h2>
            <h3>State Value: {data}</h3>

            <button onClick={handleToggle}>
                Toggle
            </button>
        </div>
    )
}

export default Button;
