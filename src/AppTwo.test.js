import React from 'react';
import { render, screen } from '@testing-library/react';
import AppTwo from './AppTwo';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


describe("AppTwo", ()=> {
  test("Renders AppTwo component", () => {
    render(<AppTwo/>);

    // screen.debug();

    // The getByText function is only one of many types of search functions in React Testing Library.

    // screen.getByText("Search:");
    // expect(screen.getByText("Search:")).toBeInTheDocument();
    
    // fails
    // expect(screen.getByText('Search')).toBeInTheDocument();

    // succeeds
    // expect(screen.getByText('Search:')).toBeInTheDocument();

    // Succeeds if only single element with the text /Search/ is found
    // expect(screen.getByText(/Search/)).toBeInTheDocument();
    // Output: TestingLibraryElementError: Found multiple elements with the text: /Search/

    // screen.getByRole('');

    expect(screen.getByRole('textbox')).toBeInTheDocument();

// There are other search types which are more element specific:

// LabelText: getByLabelText: <label for="search" />
// PlaceholderText: getByPlaceholderText: <input placeholder="Search" />
// AltText: getByAltText: <img alt="profile" />
// DisplayValue: getByDisplayValue: <input value="JavaScript" />

/** 
********************************************************************************************************
  * * Again, these were all the different search types available in RTL.
********************************************************************************************************
  * todo: getByText
  *? getByRole
  *! getByLabelText
  *! getByPlaceholderText
  *! getByAltText
  *! getByDisplayValue
*/

// screen.debug();

    // fails
    // expect(screen.getByText(/Searches for JavaScript/)).toBeNull();

    expect(screen.queryByText(/Searches for JavaScript/)).toBeNull();


  });
});
