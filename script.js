
function App() {
    return (
        <div className="app">
            <Counter />
        </div>
    )
}
 
function Counter() {
    const [count, setCount] = React.useState(0)
    const [taps, setTaps] = React.useState(0)

    const handleIncrement = () => {
        setCount(count+1)
        setTaps(taps+1)
    }
    
    function handleDecrement() {
        count>0? setCount(count-1):setCount(0)
        setTaps(taps+1)
    }

   
    function handleResetCount(){
        setCount(0)
    }
    
    function handleResetAll () {
        setCount(0)
        setTaps(0)
    }

    return (
        <div className="counter">
            <h1>Counter</h1>
            <h2 className="count">{count}</h2>
            <h4 className="taps">Total taps: {taps}</h4>
            <div>
                <button onClick={handleDecrement}>Decrement -</button>
                <button onClick={handleIncrement}>Increment +</button>
            </div>
            <div>
                <button className="reset-count" onClick={handleResetCount}>Reset Count</button>
                <button className="reset-all" onClick={handleResetAll}>Reset All</button>
            </div>
        </div>
    )
}
ReactDOM.render(<App />, document.getElementById('root'))
