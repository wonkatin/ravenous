import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import BusinessList from './components/BusinessList/BusinessList';
import Yelp from '././util/Yelp';

class App extends React.Component {
  searchYelp(term, location, sortBy){
    console.log(`Searching Yelp for ${term}, ${location}, ${sortBy}`)
  }
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
          <SearchBar searchYelp={this.searchYelp}/>
          <BusinessList businesses={businesses}/>
      </div>
    );
  }
}

export default App;
