import { useState } from 'react'


function App() {
  let [count, setCount] = useState(0)

  if (count > 10){
    return (
      <div>
        <h1>You have reached the limit</h1>
      </div>
    )
  }

  return (
    <>
      <button onClick={() => setCount(count+1)}>Increment</button>
      <p>Count: {count}</p>
    </>
  )
}

export default App
