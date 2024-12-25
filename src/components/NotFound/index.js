import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

class NotFound extends Component {
  state = {isloading: true}

  componentDidMount() {
    this.setState({isloading: false})
  }

  render() {
    const {isloading} = this.state
    return (
      <div className="bg notfound">
        {isloading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <h1 className="not-found-head">Page Not Found</h1>
        )}
      </div>
    )
  }
}

export default NotFound
