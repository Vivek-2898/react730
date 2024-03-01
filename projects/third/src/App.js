import Child from "./child";

function App() {
    let names = ["vivek", "ravi", "ajay"];
    let ages = [20, 25, 30];

    return (
        <div>
            {names.map((n, index) => (
                <Child na={n} age={ages[index]} key={index} /> 
            ))}
        </div>
    );
}

export default App;