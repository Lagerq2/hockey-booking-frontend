import { useParams } from "react-router-dom";
import matches from "./matchService";
import "../App.css"

function MatchDetailsCard({ match }) {
    const { id } = useParams();  // hämtar id från /matches/:id
  const match = matches.find(m => m.id === Number(id));

  if (!match) return <div>Match not found</div>;
  
  return (

    <div className="match-details-card">
        <h3>{match.homeTeam} vs {match.awayTeam}</h3>
        <p>{match.date}  {match.time}</p>
    </div>
  )
}

export default MatchDetailsCard;