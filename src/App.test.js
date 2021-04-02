import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.matchMedia = window.matchMedia || function() {
  return {
      matches: false,
      addListener: function() {},
      removeListener: function() {}
  };
};

describe("Test", () => {
  beforeAll(() => {
    window.matchMedia = (query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })
  });
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
    <App  />
    , div);
    ReactDOM.unmountComponentAtNode(div);
  });
});