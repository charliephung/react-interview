import React, {useState} from 'react';
import BarInput from '../../components/Bar/BarInput';
import BarWrapper from '../../components/Bar/BarWrapper';

const Home = () => {

    //Default todos
    const todosDefault = [
        {id: 1, name: 'Go to the supermarket', complete: false},
        {id: 2, name: 'Call Alice', complete: false},
        {id: 3, name: 'Ask Alice to call Bob', complete: false},
        {id: 4, name: 'Do the dishes', complete: false},
        {id: 5, name: 'Change car tyres', complete: false}
    ];

    //set state
    const [newTodoName, setNewTodoName] = useState('');
    const [todos, setTodos] = useState(todosDefault);

    const generateNewId = () => {
        return todos.length + 1;
    }

    //Submit new todo
    const onSubmit = (event) => {
        event.preventDefault();

        var newTodos = todos.slice();
        newTodos.push({
            id: generateNewId(),
            name: newTodoName,
            complete: false
        });

        setTodos(newTodos);
        setNewTodoName('');
    }

    //Click on complete button
    const onClick = (id) => {
        var todoItems = todos.slice();
        for (let i = 0; i < todos.length; i++) {
            if (todoItems[i].id === id) {
                var newComplete = !todoItems[i].complete;
                todoItems[i].complete = newComplete;
            }
        }

        setTodos(todoItems);
    }

    //Edit new todo
    const onChange = (event) => {
        setNewTodoName(event.target.value);
    }

    //Click on remove todo
    const onRemoveClick = (todoId) => {
        var newTodos = todos.slice();

        //find todo index
        var todoRemoveIndex = newTodos.map(todo => todo.id).indexOf(todoId);

        //remove todo
        newTodos.splice(todoRemoveIndex, 1);

        //set new todos
        setTodos(newTodos);
    }

    //Todo list
    const todoItems = () => {
        var retVal = [];

        for (let i = 0; i < todos.length; i++) {
            var todo = todos[i];
            retVal.push(
                <BarWrapper
                    key={todo.id}
                    todo={todo}
                    onClick={onClick.bind(this)}
                    onRemoveClick={onRemoveClick.bind(this)}
                />
            );
        }
        return retVal;
    };

    return (
        <div className="">
            {todoItems()}
            <BarInput
                onSubmit={onSubmit.bind(this)}
                newTodoName={newTodoName}
                onInputChange={onChange.bind(this)}
            />
        </div>
  );
}

export default Home;