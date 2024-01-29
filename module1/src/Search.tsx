import React, { Component, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import styles from './Search.module.css'; // Импорт CSS модуля


interface ISearchState {
  apiResult: any; 
  inputValue: string;
}

class Search extends Component<{}, ISearchState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      apiResult: null,
      inputValue: ''
    };
  }
  componentDidMount() {
    // Загрузка последнего запроса из localStorage
    const lastQuery = localStorage.getItem('lastQuery');
    if (lastQuery) {
      this.setState({ apiResult: lastQuery });
    }
  }
  handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const defaultUrl = 'https://swapi.dev/api/people';
    const url = this.state.inputValue ? `https://swapi.dev/api/${this.state.inputValue}` : defaultUrl;
    axios.get(url)
    .then((result) => {
      this.setState({ apiResult: result.data });
      const trimmedQuery = this.state.apiResult.trim();
      localStorage.setItem('lastQuery', trimmedQuery);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    return (
      <div className={styles.searchContainer}>
        <h1>Search from Star Wars</h1>
        <div className={styles.searchForm}>
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

        <div className={styles.resultsContainer}>
          <p>{JSON.stringify(this.state.apiResult, null, 2)}</p>
        </div>
      </div>
    );
  }
}

export default Search;
