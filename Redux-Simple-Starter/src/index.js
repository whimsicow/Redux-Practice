import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar';
import VideoList from './components/videolist';
import VideoDetail from './components/videodetail';
import { createStore, applyMiddleware } from 'redux';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyD9L4feFPhk4ZIjzjm2b5apTdVO9GmYDQA';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({videos});
        });
    }
    render() {
        return ( 
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}


const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <App />,
    document.querySelector('.container')
  );
