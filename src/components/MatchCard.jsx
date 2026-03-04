function MatchCard({ match }) {

  const [homeTeam, awayTeam] = match.match.split(" vs ");
  const dateObj = new Date(match.matchDateTime);
  const date = dateObj.toLocaleDateString();
  const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <div className="match-card">
        <h3>{homeTeam} vs {awayTeam}</h3>
        <p>{date}  {time}</p>
        <a href={`/matches/${match.id}`}>Boka plats</a>
    </div>
  )
}

export default MatchCard;