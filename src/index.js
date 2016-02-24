import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import { Youtube_API } from '../config/config'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

// Create a new component. This componet should produce some HTML
class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            videos: [],
            selectedVideo: null
        }

        YTSearch({key: Youtube_API, term: 'surfboards'}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            }) // { videos : videos }
        })
    }
    
    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
