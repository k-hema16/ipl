import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {details} = props
  const {name, id, teamImageUrl} = details

  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="team-card-item">
        <img src={teamImageUrl} alt={name} className="teamImage" />
        <p>{name}</p>
      </Link>
    </li>
  )
}
export default TeamCard
