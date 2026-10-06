import { useState } from 'react'

function Homepage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="relative h-screen">
        {/* Your homepage content goes here */}
        <button className="absolute top-4 right-4 bg-blue-500 text-white rounded px-4 py-2">
          LogIn
        </button>
        <h1 className="absolute top-4 left-4  text-black rounded px-4 py-2">
    Globe
  </h1>
  <button className="absolute top-4 left-250 bg-blue-500 text-white rounded px-5 py-2">
          Home
        </button>
        <button className="absolute top-4 left-300 bg-blue-500 text-white rounded px-5 py-2">
          Search
        </button>
        <button className="absolute top-4 left-350 bg-blue-500 text-white rounded px-5 py-2">
          About
        </button>
      </section>
    </>
  )
}

export default Homepage