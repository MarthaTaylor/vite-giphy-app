import React from 'react';
import { useGifContext } from '../context/GifContext';
import styled from 'styled-components';
import { GifContainer, GifGrid, GifImage} from "../styles/SharedStyles";
import HeartButton from "../components/HeartButton";

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #666;
  font-size: 1.2rem;
`;

const SavedGifs: React.FC = () => {
  const { state: { savedGifs }, dispatch } = useGifContext();

  const handleRemoveGif = (gifId: string) => {
    dispatch({ type: 'REMOVE_GIF', payload: gifId });
  };

  if (savedGifs.length === 0) {
    return (
      <EmptyState role="region" aria-live="polite" aria-labelledby="empty-state-heading">
        <h2 id="empty-state-heading">No saved GIFs yet</h2>
        Go to Trending GIFs and start saving some of your favorites!
      </EmptyState>
    );
  }

  return (
    <>
      <GifGrid role="list" aria-label="Saved GIFs Grid">
        {savedGifs.map((gif) => (
          <GifContainer key={gif.id} role="listitem" aria-labelledby={`gif-title-${gif.id}`}>
            <GifImage
              src={gif.images.original.url}
              alt={`GIF titled: ${gif.title}`}
              loading="lazy"
            />
            <HeartButton
              isSaved={true}
              onClick={() => handleRemoveGif(gif.id)}
              aria-pressed="true"
              aria-label="Remove from saved GIFs"
            />
          </GifContainer>
        ))}
      </GifGrid>
    </>
  );
};

export default SavedGifs;
