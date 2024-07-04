import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import PictureWrapper from './PictureWrapper';

const PicturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  margin-top: 20px;
`;

function PictureGrid() {
  const dogUrl = 'https://random.dog';
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/pictures')
      .then(response => setPictures(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <PicturesGrid>
      {pictures.map(picture => (
        <Link key={picture.id} to={`/pictures/${picture.id}`}>
          <PictureWrapper picture={picture} dogUrl={dogUrl} />
        </Link>
      ))}
    </PicturesGrid>
  );
}

export default PictureGrid;
