import { BrowserRouter as  Routes, Route, useNavigate } from "react-router-dom"
import { appRoutes } from "../src/Routes/route"
import Home from "./Pages/Home"
import "./App.css"
import "./index.css"
import AboutDMIF from "./Pages/About"
import Layout from "./Layout"
import Program from "./Pages/Program"

const Outcomes = () => <h1> Outcomes Page</h1>
const WhyItMatters = () => <h1>Why It Matters Page</h1>

function App() {
  const navigate = useNavigate()
  return (

    <Layout>

      <Routes>
        <Route path={appRoutes.home} element={<Home />} />
        <Route path={appRoutes.about} element={<AboutDMIF/>} />
        <Route path={appRoutes.programs} element={<Program/>} />
        <Route path={appRoutes.Outcomes} element={<Outcomes />} />
        <Route path={appRoutes.whyItMatters} element={<WhyItMatters />} />
<Route 
  path="/*" 
  element={
    <div className="flex flex-col items-center justify-center min-h-screen text-white px-4 text-center">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-red-400">
        404 - Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-md">
        You are at the wrong route. There is no content here.
      </p>
      <button 
        className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-lg shadow-md hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition transform hover:scale-105"
        onClick={() => navigate(appRoutes.home)}
      >
        Go Back to Home
      </button>
    </div>
  } 
/>
      </Routes>

    </Layout>
  )
}

export default App
