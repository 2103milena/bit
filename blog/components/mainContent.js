import React from "react";
import Post from "./post";
import About from "./about";
// import data from "../data";

class MainContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(result => result.json())
            .then(result => {
                this.setState({ data: result });
            });
    }

    render() {

        return (
            <main>
                {this.state.data.map(post => {
                    return <Post post={post} key={post.id} />;
                })}
            </main>
        );
    }
};

export default MainContent;
