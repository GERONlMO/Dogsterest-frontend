import React from 'react';
import styled from 'styled-components';

const PictureContainer = styled.div`
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s;
  }
`;

const PictureImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PictureVideo = styled.video`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

function PictureWrapper({ picture, dogUrl }) {
  return (
    <PictureContainer>
      {picture.url.endsWith('.mp4') ? (
        <PictureVideo src={`${dogUrl}/${picture.url}`} controls />
      ) : (
        <PictureImage src={`${dogUrl}/${picture.url}`} alt="Dog" />
      )}
    </PictureContainer>
  );
}

export default PictureWrapper;
