import { Component, ChangeEvent } from 'react'
import './Search.css'
import axios from 'axios'


class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiResult: null,
      inputValue: ''
    };
  }
  handleSearch = (event) => {
    event.preventDefault()
    axios.get(`https://swapi.dev/api/${this.state.inputValue}`)
    .then((result)=> {
      this.setState({apiResult: result.data})
        console.log(apiResult)
        console.log(inputValue)
      })
      .catch((error)=>{
        console.log(error)
        console.log('asdasd')
      })
  }
  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({
      inputValue: event.target.value
    });
  }
  
  render() {
    return (
      <>
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
        <h1>Search from Star Wars</h1>
        <div style={{ flex: '0 0 auto', backgroundColor: 'lightblue', padding: '10px' }}>
          <form onSubmit={this.handleSearch}>
            <input
              type="text"
              placeholder="films /people /planets /species /starships /vehicles"
              value={this.state.inputValue}
              onChange={this.handleInputChange}
            />
            <button type='submit'>Search</button>
          </form>
        </div>
      
        <div style={{ flex: '1', backgroundColor: 'lightgray', padding: '20px' }}>
        <p>{JSON.stringify(this.state.apiResult, null, 2)}</p>
        </div>
        </div>
      </>
    )
    }
}

export default Search