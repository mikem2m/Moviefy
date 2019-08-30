import React,{Component} from 'react';
import Movie from './components/Movie';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class App extends Component{
  render(){
    return(
      <div>
        <Movie/>
      </div>
    )
  }
}

export default App;