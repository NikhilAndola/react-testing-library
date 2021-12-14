import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import FindByAsync from './FindByAsync';
import userEvent from '@testing-library/user-event';
import Search from "./FindByAsync";

describe('App', () => {
  test('renders App component', async () => {
    render(<FindByAsync />);

    // act(() => {
    //   ReactDOM.render(<Counter />, container);
    // });
    
    await screen.findByText(/Signed in as/);
    // expect(screen.queryByText(/Signed in as/)).toBeNull();
    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();

    // screen.debug();

    // Whenever possible, use userEvent over fireEvent when using React Testing Library. At the time of writing this, userEvent doesn't include all the features of fireEvent, however, this may change in the future.

    await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    // expect(await screen.findByText(/Signed in as/)).toBeInTheDocument();
    expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument(); 

    // screen.debug();
  });
});

describe('Search', () => {
  test('calls the onChange callback handler', () => {
    const onChange = jest.fn();

    act(()=> {
      render(
        <Search value="" onChange={onChange}>
        Search:
      </Search>
    );
  });

    fireEvent.change(screen.getByRole('textbox'), {
      target: { value: 'JavaScript' },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});

// describe('Search', () => {
//   test('calls the onChange callback handler', async () => {
//     const onChange = jest.fn();

//     render(
//       <Search value="" onChange={onChange}>
//         Search:
//       </Search>
//     );

//     await userEvent.type(screen.getByRole('textbox'), 'JavaScript');

//     expect(onChange).toHaveBeenCalledTimes(10);
//   });
// });