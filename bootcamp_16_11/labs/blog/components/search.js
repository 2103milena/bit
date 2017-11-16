import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchstring: 'ja!'
        };

        this.imputChangeHandler = this.imputChangeHandler.bind(this);
        this.onSearchClick=this.onSearchClick.bind(this);
    }



    imputChangeHandler(event) {
        this.setState({
            searchstring: event.target.value
        });

        console.log(event.target.value);
    }

    onSearchClick() {
        let searchString = this.state.searchString;
        this.props.onSearchRequested(searchString);
    }

    render() {
        return (
            <div>
                Filter blogs <input value={this.state.searchstring} onChange={this.imputChangeHandler} />
                <button onClick={this.onSearchClick}>Search now!</button>
            </div>
        );
    }
}

export default Search;