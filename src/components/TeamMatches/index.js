import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {isloading: true, data: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const result = await response.json()
    const updatedLatestMatchDetails = {
      umpires: result.latest_match_details.umpires,
      result: result.latest_match_details.result,
      manOfTheMatch: result.latest_match_details.man_of_the_match,
      date: result.latest_match_details.date,
      venue: result.latest_match_details.venue,
      competingTeam: result.latest_match_details.competing_team,
      firstInnings: result.latest_match_details.first_innings,
      secondInnings: result.latest_match_details.second_innings,
      matchStatus: result.latest_match_details.match_status,
      competingTeamLogo: result.latest_match_details.competing_team_logo,
    }
    const updatedRecentMatches = result.recent_matches.map(item => ({
      competingTeamLogo: item.competing_team_logo,
      competingTeam: item.competing_team,
      result: item.result,
      matchStatus: item.match_status,
      id: item.id,
    }))
    const updatedData = {
      teamBannerUrl: result.team_banner_url,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
    }
    this.setState({isloading: false, data: updatedData})
  }

  render() {
    const {isloading, data} = this.state
    return (
      <div className="team-matches-bg">
        {isloading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div>
            <img
              src={data.teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
            <p>Latest Matches</p>
            <LatestMatch details={data.latestMatchDetails} />
            <ul className="list">
              {data.recentMatches.map(item => (
                <MatchCard details={item} key={item.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}
export default TeamMatches
