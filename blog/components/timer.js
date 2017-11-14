import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { mountTime: "pending..." };
    }

    componentDidMount() {
        setInterval(() => {
            let newState = {
                mountTime: new Date().toTimeString()
            };
            this.setState(newState);
        }, 1000);
    }


    render() {

        return <h2>{this.state.mountTime}</h2>;
    }
}

export default Timer;