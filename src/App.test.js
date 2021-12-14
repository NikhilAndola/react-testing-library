import React from 'react';
import { render } from '@testing-library/react';
// import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe("App", ()=> {
  test("Renders App component", () => {
    act(()=> {

      render(<App/>);
    })
    // screen.debug();
  });
});