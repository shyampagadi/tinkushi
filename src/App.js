import React from 'react'
import Search from './Search'
import youtube from './youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDeteil'
// import axios from 'axios'
// import logo from './logo.svg';
// import './App.css';
const KEY = 'AIzaSyD5uHFWghTOvQUhRm28HjXyfnQEe-_S5ts'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      selectedVideo: null,
    }
  }
  componentDidMount() {
    this.onTermSubmit('buildings')
  }
  onTermSubmit = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
        part: 'snippet',
        maxResults: 5,
        key: KEY,
      },
    })
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    })
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    return (
      <div className="ui container">
        <Search onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default App
