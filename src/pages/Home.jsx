import { useEffect, useState } from "react"
import Navbar from "../components/Navbar"
import MatchCard from "../components/MatchCard"
import { getMatches } from "../services/matchService"
import "../App.css"

function Home() {
  const [matches, setMatches] = useState([])

  useEffect(() => {
    // Hämta matcher från backend
    getMatches().then(data => setMatches(data))
  }, [])

  return (
    <div>
      <Navbar />
        <div className="match-container">
            {matches.map(match => (
                <MatchCard key={match.id} match={match} />
            ))}
        </div>
    </div>
  )
}

export default Home;