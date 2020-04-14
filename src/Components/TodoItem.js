import React, {Component} from 'react';
import PropTypes from "prop-types";

class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    };

    render() {
        const {id, title} = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <h3>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                    {title}
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={btnStyle}>x</button>
                </h3>
            </div>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
};

const btnStyle = {
    backgroundColor: 'red',
    color: '#fff',
    border: 'none',
    outline: 'none',
    padding: '5px 10px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
};

export default TodoItem;
