import { useCounter } from "useCounter"

const CounterComponent = () => {
    const  {count, increment, decrement } = useCounter (10,10)

    return (
        <div>
            <h1>
                Contador: {count}
            </h1>
            <button onClick={increment}>Sumar
            </button>
            <button onClick={decrement}>Restar</button>
        </div>


    )
}

export default CounterComponent

