import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import PictureGrid from './PictureGrid';
import PictureDetails from './PictureDetails';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const AppContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const Header = styled.h1`
  color: #333;
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AppContainer>
        <Header>Dogsterest</Header>
        <Routes>
          <Route path="/" element={<PictureGrid />} />
          <Route path="/pictures/:id" element={<PictureDetails />} />
        </Routes>
      </AppContainer>
    </Router>
  );
}

export default App;