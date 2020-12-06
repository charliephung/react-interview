import React from 'react';
import ReactDOM from 'react-dom';
import {render, cleanup} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import BarWrapper from '../BarWrapper';

//Create sample
const sampleTodo = {id: 1, name: 'This is a sample bar', complete: false};

const sampleBar = <BarWrapper key={sampleTodo.id} todo={sampleTodo}/>;

afterEach(cleanup);

//Test rendering
it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(sampleBar, div);
})

//Test render with text and color
it("renders bar correctly", () => {
    const {getByTestId} = render(sampleBar);

    expect(getByTestId('todo')).toHaveTextContent(sampleTodo.name);

    expect(getByTestId('todo')).toHaveStyle({backgroundColor: 'pink'});
})

//Test with other color
it("renders bar correctly with complete", () => {
    sampleTodo.complete = true;
    const newSampleBar = <BarWrapper key={sampleTodo.id} todo={sampleTodo}/>;

    const {getByTestId} = render(newSampleBar);

    expect(getByTestId('todo')).toHaveStyle({backgroundColor: 'lightgreen'});
})
