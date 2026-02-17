function MatchCard({ match }) {
  return (
    <div className="match-card">
        <h3>{match.homeTeam} vs {match.awayTeam}</h3>
        <p>{match.date}  {match.time}</p>
    </div>
  )
}

export default MatchCard;