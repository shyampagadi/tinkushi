import React, { Component } from 'react'
// import youtube from './youtube'
class Search extends Component {
  constructor(props) {
    super(props)

    this.state = {
      term: '',
    }
  }

  onInputChange = (event) => {
    this.setState({ term: event.target.value })
    console.log('NAME := ' + event.target.name)
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.onFormSubmit(this.state.term)
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            <input
              onChange={this.onInputChange}
              type="text"
              value={this.state.term}
              name="term"
            />
          </div>
        </form>
      </div>
    )
  }
}

export default Search
