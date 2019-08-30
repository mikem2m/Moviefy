import React,{Component,Fragment} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Trial = styled.div`
` 

class Movie extends Component{
    constructor(props){
        super(props);
        this.state = {
            error:null,
            isLoaded:false,
            movie : {
                title:null,
                runtime:null,
                summary:null,
            },
            image : null,
        };
    }


    componentDidMount(){
        axios.get('/movie/76341?api_key=4ec0f6153ecee10e2d55e6b8c4562f70')
        .then(res => {
            console.log(res.data);
            this.setState({
                movie:{
                    ...this.state.movie,
                    title:res.data.original_title,
                    runtime:res.data.runtime,
                    summary:res.data.overview,
                },
            })
        })
        .catch(err => {
            console.log(err);
        })
    }
    
    render(){
        return(
            <Fragment>
                <Trial>
                <h1>{this.state.movie.title}</h1>
                <h4>{this.state.movie.runtime}</h4>
                <p>{this.state.movie.summary}</p>  
                </Trial>
            </Fragment>
        )
    }
};

export default Movie;