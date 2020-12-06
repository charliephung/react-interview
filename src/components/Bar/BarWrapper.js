import React from 'react';
import './Bar.css';

const barWrapper = (props) => {
    var text;
    var textDecoration = 'line-through';

    if (props.todo.complete === true) {
        text = 'Complete';
        textDecoration = 'line-through';
    } else {
        text = 'Incomplete';
        textDecoration = 'none';
    }
    return (
        <div className="wrapper" data-testid="todo">
            <h3 style={{textDecoration: textDecoration}}>{props.todo.name}</h3>
            <button
                className="btn"
                onClick={() => props.onClick(props.todo.id)}>
                {text}
            </button>
            <button
                className="btn"
                onClick={() =>
                    props.onRemoveClick(props.todo.id)
                }>
                Remove from list
            </button>
        </div>
  );
}

export default barWrapper;