import React from "react";

class SearchBar extends React.Component {
    state = { term: ""}
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="ui icon input" id="search-box" style={{width: '100%'}}>
                        <input type="text" placeholder="Search images" value={this.state.term} onChange={e => this.setState({term : e.target.value})}/>
                        <i className="search icon"></i>
                    </div>
                </form>
            </div>
        );
    };
};

export default SearchBar;