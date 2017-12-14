import React from 'react';


class Compose extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClick=this.handleClick.bind(this);
    }
    handleChange(event) {
       this.setState({value:event.target.value});
    }

    handleClick(){
        this.props.korisnikZeliDaDoda(this.state.value);
        this.setState({value: ""});
    }

    render() {
        return (
            <div className='forma'>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
                <button onClick={this.handleClick}>Submit!</button>
            </div>
        );
    }
}

export default Compose;