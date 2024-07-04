import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

const AppContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    text-align: center;
    padding: 20px;
    max-width: 600px;
    margin: 0 auto;
`;

const ButtonsContainer = styled.div`
  width: 100%;
  row-gap: 5px;
  display: flex;
  flex-direction: column;
`;

const PictureImage = styled.img`
  width: 600px;
  height: 600px;
  object-fit: cover;
`;

const PictureVideo = styled.video`
  width: 600px;
  height: 600px;
  object-fit: cover;
`;

const Button = styled.button`
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
`;

const LikeButton = styled(Button)`
  display: block;
  width: fit-content;
  background-color: red;
  color: white;
  display: flex;
  align-items: flex-start;
`;

const BackButton = styled(Link)`
  width: fit-content;
  text-decoration: none;
  background-color: #333;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
`;

function PictureDetails() {
  const { id } = useParams();
  const dogUrl = 'https://random.dog';
  const [picture, setPicture] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3000/pictures/${id}`)
      .then(response => setPicture(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const likePicture = () => {
    axios.post(`http://localhost:3000/pictures/${id}/like`)
      .then(response => {
        setPicture({ ...picture, likes: picture.likes + 1 });
      })
      .catch(error => console.error(error));
  };

  if (!picture) return <div>Loading...</div>;

  return (
    <AppContainer>
      {picture.url.endsWith('.mp4') ? (
        <PictureVideo src={`${dogUrl}/${picture.url}`} controls />
      ) : (
        <PictureImage src={`${dogUrl}/${picture.url}`} alt="Dog" />
      )}
      <ButtonsContainer>
        <LikeButton onClick={likePicture}>
          <AiOutlineHeart style={{ marginRight: '5px' }} />
          Like {picture.likes}
        </LikeButton>
        <BackButton to="/">Back to Home</BackButton>
      </ButtonsContainer>
    </AppContainer>
  );
}

export default PictureDetails;
