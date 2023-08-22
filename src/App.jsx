import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>NavBar</>
      <h1>FASTERCLICK</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Choose 1 sku
        </p>
      </div>
      <p className="read-the-docs">check</p>
    </>
  )
}

export default App
