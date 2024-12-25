import './index.css'

const MatchCard = props => {
  const {details} = props
  const {competingTeamLogo, competingTeam, result, matchStatus} = details
  let specialClass
  const status = () => {
    if (matchStatus === 'Won') {
      specialClass = 'green-class'
    } else {
      specialClass = 'red-class'
    }
    return specialClass
  }
  return (
    <li className="item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="match-card-img"
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={status()}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
