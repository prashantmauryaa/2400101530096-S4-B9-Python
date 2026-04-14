function React() {
    let myName = "Prashant";
    let num1 = 3000;
    let num2 = 1000;

    return (
        <>
            <div>
                <h1>State of variable for react </h1>
                <h2>My name is {myName}</h2>
            </div>
            <div>
                <button onClick={() => alert("click on ok")}>
                    OK
                </button>
            </div>
            <div>
                <h2>Subtraction Output</h2>
                <h3>The result of {num1} - {num2} is: {num1 - num2}</h3>
            </div>
        </>
    )
}

export default React;