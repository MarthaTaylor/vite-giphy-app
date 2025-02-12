import styled, { keyframes } from "styled-components";
import { GifContainer, GifGrid } from "../styles/SharedStyles";

// shimmer animation gives a moving gradient effect
const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: 200px 0; }
`;

// subtle pulsing animation mimics loading effect
const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.02); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
`;

const SkeletonBox = styled.div`
  width: 100%;
  height: 180px; // Matches GIF size
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear, ${pulse} 1.5s infinite ease-in-out;
  border-radius: 12px;
  role: progressbar; // Make it clear it's a loading state
  aria-label: "Loading GIF..."; // Inform screen readers about the skeleton loader
`;

const SkeletonGif = styled(GifContainer)`
  height: auto;
`;

const LoadingSkeletons = () => {
  return (
    <>
    <GifGrid role="region" aria-live="polite" aria-label="Loading GIFs">
      {[...Array(8)].map((_, index) => (
        <SkeletonGif key={index + 1}>
          <SkeletonBox aria-label={`Loading skeleton ${index + 1}`} role="progressbar"/>
        </SkeletonGif>
      ))}
    </GifGrid>
    </>
  );
};

export default LoadingSkeletons;

