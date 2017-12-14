import React from 'react';
import Compose from './addInputs.js';
// import List from './toDoList.js';



class ToDoPageList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todoItems: [],
        }

        this.ispuniKorisnikuZelju = this.ispuniKorisnikuZelju.bind(this);
        this.onPressHandler = this.onPressHandler.bind(this);

    }


    ispuniKorisnikuZelju(value) {

        let oldInputs = this.state.todoItems;
        oldInputs.push({ value: value });

        oldInputs.setState({ todoItems: oldInputs });

    }
    onPressHandler() {
       
        this.state.oldInputs.map((todoItems) => {
            return <li>jhjhjj</li>

        });
            
    }

    render() {
        return (
            <div className='forma'>
                <h1>todos</h1>
                <ul>
                    <Compose korisnikZeliDaDoda={this.ispuniKorisnikuZelju} onPress={() => this.onPressHandler} />
                    {/* <List /> */}
                </ul>
            </div>
        );
    }
}

export default ToDoPageList;