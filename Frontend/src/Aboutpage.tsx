import { useNavigate } from 'react-router-dom'

function AboutPage() {
  const navigate = useNavigate()

  return (
    <>
      <section className="relative h-screen">

        <button className="absolute top-4 right-4 bg-blue-500 text-white rounded px-4 py-2">
          LogIn
        </button>

        <h1 className="absolute top-4 left-4 text-black rounded px-4 py-2">
          Globe
        </h1>

        <button
          className="absolute top-4 left-[250px] bg-blue-500 text-white rounded px-5 py-2"
          onClick={() => navigate('/')}
        >
          Home
        </button>

        <button className="absolute top-4 left-[300px] bg-blue-500 text-white rounded px-5 py-2">
          Search
        </button>

        <button className="absolute top-4 left-[350px] bg-blue-500 text-white rounded px-5 py-2">
          About
        </button>

      </section>
    </>
  )
}

export default AboutPage