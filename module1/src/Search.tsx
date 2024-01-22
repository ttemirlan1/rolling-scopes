import { Component } from 'react'
import './Search.css'
import axios from 'axios'

class Search extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiResult: null
    };
  }
  checkApi = () => {
    axios.get('https://swapi.dev/api/')
      .then((result)=> {
        this.setState({apiResult: result.data})
        console.log(result.data)
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  componentDidMount() {
    this.checkApi();
  }
  render() {
    return (
      <>
        <h1>Search from Star Wars</h1>
        <input
          type="text"
          placeholder="films /poeple /planets /species /starships /vehicles"
        />
        <p>{JSON.stringify(this.state.apiResult, null, 2)}</p>
        <button onClick={this.checkApi}>Search</button>
      
        <div className="card">
          
        </div>
      </>
    )
    }
}

export default Search
