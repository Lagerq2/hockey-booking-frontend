export const getMatches = async () => {
  // Mock-data tills backend är redo
  return Promise.resolve([
    { id: 1, homeTeam: "Team A", awayTeam: "Team B", date: "2026-02-20", time: "18:00" },
    { id: 2, homeTeam: "Team C", awayTeam: "Team D", date: "2026-02-21", time: "19:00" },
    { id: 3, homeTeam: "Team E", awayTeam: "Team F", date: "2026-02-22", time: "20:00" },
    { id: 4, homeTeam: "Team G", awayTeam: "Team H", date: "2026-02-23", time: "17:00" },
    { id: 5, homeTeam: "Team I", awayTeam: "Team J", date: "2026-02-20", time: "18:00" },
    { id: 6, homeTeam: "Team K", awayTeam: "Team L", date: "2026-02-21", time: "19:00" },
    { id: 7, homeTeam: "Team M", awayTeam: "Team N", date: "2026-02-22", time: "20:00" },
    { id: 8, homeTeam: "Team O", awayTeam: "Team P", date: "2026-02-23", time: "17:00" },
    { id: 9, homeTeam: "Team Q", awayTeam: "Team R", date: "2026-02-20", time: "18:00" },
    { id: 10, homeTeam: "Team S", awayTeam: "Team T", date: "2026-02-21", time: "19:00" },
    { id: 11, homeTeam: "Team U", awayTeam: "Team V", date: "2026-02-22", time: "20:00" },
    { id: 12, homeTeam: "Team W", awayTeam: "Team X", date: "2026-02-23", time: "17:00" },
    { id: 8, homeTeam: "Team G", awayTeam: "Team H", date: "2026-02-23", time: "17:00" },
    { id: 9, homeTeam: "Team A", awayTeam: "Team B", date: "2026-02-20", time: "18:00" },
    { id: 10, homeTeam: "Team C", awayTeam: "Team D", date: "2026-02-21", time: "19:00" },
    { id: 11, homeTeam: "Team E", awayTeam: "Team F", date: "2026-02-22", time: "20:00" },
    { id: 8, homeTeam: "Team G", awayTeam: "Team H", date: "2026-02-23", time: "17:00" },
    { id: 9, homeTeam: "Team A", awayTeam: "Team B", date: "2026-02-20", time: "18:00" },
    { id: 10, homeTeam: "Team C", awayTeam: "Team D", date: "2026-02-21", time: "19:00" },
    { id: 11, homeTeam: "Team E", awayTeam: "Team F", date: "2026-02-22", time: "20:00" }
  ])
}