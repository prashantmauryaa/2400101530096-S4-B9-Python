import { useState } from 'react';

function New() {

    const [data, setData] = useState("Hello");

    const handleToggle = () => {
        setData(data === "Hello" ? "Hello React!" : "Hello");
    };

    return (
        <div  >
            <h2>This is the New Component</h2>
            <h3>State Value: {data}</h3>

            <button onClick={handleToggle}>
                Update Data
            </button>
        </div>
    )
}
