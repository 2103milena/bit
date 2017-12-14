import React from 'react';

class List extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div>
                <ul>
                    <input type="text" onPress={() => this.props.onPressHandler} />
                    {/* {this.state.currentItems.map((item, index) => {
                        return <li>jhjhjhjh</li>
                    })} */}
                </ul>
            </div>
        );

    }
}

export default List;