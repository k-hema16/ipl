// Write your code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {isloading: true, data: {}}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const result = (await response.json()).teams
    const formatedData = result.map(item => ({
      name: item.name,
      id: item.id,
      teamImageUrl: item.team_image_url,
    }))
    this.setState({isloading: false, data: formatedData})
  }

  render() {
    const {isloading, data} = this.state
    return (
      <div className="bg">
        {isloading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <>
            <div className="row">
              <img
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png "
                alt="ipl logo"
                className="logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <ul className="list-container row">
              {data.map(item => (
                <TeamCard details={item} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}
export default Home
