import React from "react";

class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { mountTime: "pending..." };

        this.okidanje = this.okidanje.bind(this);
        this.killInterval = this.killInterval.bind(this);

        this.intervalState = null;
    }

 
    okidanje() {
        // if created kill and reset intervalState
       
        // else create interval


        this.intervalState = setInterval(() => {
            this.setState({
                mountTime: new Date().toTimeString()
            });
            this.props.onTimeElapsed(this.state.mountTime);
        }, this.props.interval);
    }

    killInterval() {
        clearInterval(this.intervalState);
    }


    render() {
        return (
            <div>
                <h4>Current time: {this.state.mountTime}</h4>
                <button onClick={this.okidanje}>Start</button>

                <button onClick={this.killInterval}>Stop</button>
            </div>
        );

    }
}

export default Timer;