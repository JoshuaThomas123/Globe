import { useNavigate } from 'react-router-dom'

function Homepage() {
  const navigate = useNavigate()

  return (
    <>
      <section className="relative h-screen">

        <button className="absolute top-4 right-4 bg-blue-500 text-white rounded px-4 py-2">
          LogIn
        </button>

        <h1 className="absolute top-4 left-10 text-black rounded px-4 py-2">
          Globe
        </h1>

        <button className="absolute top-4 left-[200px] bg-blue-500 text-white rounded px-5 py-2">
          Home
        </button>

        <button className="absolute top-4 left-[700px] bg-blue-500 text-white rounded px-5 py-2">
          Search
        </button>

        <button
          className="absolute top-4 left-[1100px] bg-blue-500 text-white rounded px-5 py-2"
          onClick={() => navigate('/about')}
        >
          About
        </button>

      </section>
    </>
  )
}

export default Homepage