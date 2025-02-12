import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { HeartButtonProps } from '../types/HeartButtonProps';

const HeartIcon = styled(motion.button)<{ $isSaved: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 2rem;
  color: ${({ $isSaved }) => ($isSaved ? "red" : "white")};
  text-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  z-index: 10;
  padding: 8px;

  &:focus {
    outline: none;
  }
`;

const heartVariants = {
  initial: { scale: 1 },
  animate: { scale: [1, 2.2, 1] },
  exit: { scale: [1, 0.5, 1] },
};

const HeartButton: React.FC<HeartButtonProps> = ({ isSaved, onClick }) => {
  return (
    <>
      <HeartIcon
        $isSaved={isSaved}
        onClick={onClick}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={heartVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
        aria-label={isSaved ? "Remove from favorites" : "Add to favorites"}
        role="button"
        tabIndex={0}
      >
        {isSaved ? "❤️" : "🤍"}
      </HeartIcon>
    </>
  );
};

export default HeartButton;
