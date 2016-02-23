import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'

import { Youtube_API } from '../config/config'

import SearchBar from './components/search_bar'

YTSearch({key: Youtube_API, term: 'surfboards'}, function(data){
    console.log(data)
})

// Create a new component. This componet should produce some HTML
class App extends Component {
    constructor(props) {
        super(props)
        
        this.state = { videos: [] }
    }
    
    render() {
        return (
        <div>
            <SearchBar />
        </div>
        )
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
