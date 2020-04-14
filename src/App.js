import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Todos from './Components/Todos';
import Header from "./Components/Layout/Header";
import AddTodo from "./Components/AddTodo";
import About from "./Components/Pages/About";
import axios from 'axios';

import './App.css';

class App extends Component {
    state = {
        todos: []
    };

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then(res => this.setState({todos: res.data}));
    }

    markComplete = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
        });
    };

    deleteTodo = (id) => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
    };

    addTodo = (title) => {
       axios.post('https://jsonplaceholder.typicode.com/todos', {
           title: title,
           completed: false
       }).then(res => this.setState({todos: [...this.state.todos, res.data]}));
        //  let todos = this.state.todos;
        //  todos.unshift(newTodo);
        // this.setState({todos: todos});
    };


    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <Header/>
                        <Route exact path="/" render={props => (
                            <React.Fragment>
                                <AddTodo addTodo={this.addTodo}/>
                                <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
                            </React.Fragment>
                        )}>
                        </Route>
                        <Route path="/about" component={About}/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
