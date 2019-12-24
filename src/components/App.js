import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar";
import ImageList from './ImageList';


class App extends React.Component {
    state = {
        images: []
    };
    onSearchSubmit = async (term) => {
        document.querySelector("#search-box").classList.add('loading');
        const response = await unsplash.get(`https://api.unsplash.com/search/photos`,{
            params: {
                query: term
            },
        })
        document.querySelector('#search-box').classList.remove('loading');
        this.setState({
            images: response.data.results
        });
    }
    render() {
        return (
            <div className="ui container" style={{marginTop : '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        );
    };
};

export default App;