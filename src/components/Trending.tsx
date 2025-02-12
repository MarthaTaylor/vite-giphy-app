import React, { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchTrendingGifs, fetchSearchGifs } from '../services/giphyService';
import { Gif } from '../types/gif';
import { ApiResponse } from '../types/api';
import HeartButton from './HeartButton';
import Search from './Search';
import Skeleton from './Skeleton';
import { useGifContext } from '../context/GifContext';
import { GifContainer, GifGrid, GifImage, LoadMoreButton } from "../styles/SharedStyles";

const Trending: React.FC = () => {
  const { state: { savedGifs }, dispatch } = useGifContext();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSaveGif = (gif: Gif) => {
    dispatch({ type: 'SAVE_GIF', payload: gif });
  };

  const handleRemoveGif = (gifId: string) => {
    dispatch({ type: 'REMOVE_GIF', payload: gifId });
  };

  const isSaved = (gifId: string) => savedGifs.some((gif) => gif.id === gifId);

  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useInfiniteQuery<ApiResponse, Error>({
    queryKey: ['gifs', searchQuery],
        queryFn: async ({ pageParam = 0 }) => {
        return searchQuery
          ? fetchSearchGifs(searchQuery as string, pageParam as number)
          : fetchTrendingGifs(pageParam as number);
    },
    getNextPageParam: (lastPage) => {
        return lastPage?.pagination?.offset + lastPage?.pagination?.count < lastPage?.pagination?.total_count
          ? lastPage.pagination.offset + lastPage.pagination.count
          : undefined;
      },
    initialPageParam: 0,
    enabled: true,
  });

  if (isLoading) return <Skeleton />;
  if (error) return <div className="text-yellow">Error loading GIFs: {error.message}</div>;

  return (
    <>
      <Search onSearch={setSearchQuery} />

      <GifGrid role="region" aria-live="polite" aria-label="Loading GIFs">
        {data?.pages?.flatMap((page, pageIndex) =>
          page.data.map((gif: Gif) => (
            <GifContainer key={`${gif.id}-${pageIndex}`} role="listitem">
              <GifImage
                src={gif.images.original.url}
                alt={`GIF titled ${gif.title}`}
                loading="lazy"
                aria-label={gif.title}
              />
              <HeartButton

                isSaved={isSaved(gif.id)}
                onClick={() =>
                  isSaved(gif.id)
                    ? handleRemoveGif(gif.id)
                    : handleSaveGif(gif)
                }
                aria-pressed={isSaved(gif.id)}
                aria-label={isSaved(gif.id) ? "Remove from favorites" : "Add to favorites"}
              />
            </GifContainer>
          ))
        )}
      </GifGrid>

      {hasNextPage && !isLoading && ( // Show only if there are more pages AND not currently loading anything
      <LoadMoreButton onClick={() => fetchNextPage()} disabled={isFetchingNextPage}  aria-live="polite"
      aria-label="Load more GIFs">
        {isFetchingNextPage ? "Loading More..." : "Load More GIFs"}
      </LoadMoreButton>
    )}
    </>
  );
};

export default Trending;
