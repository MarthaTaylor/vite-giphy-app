import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Search as SearchIcon } from 'lucide-react';
import { SearchProps } from '../types/SearchProps';
import DOMPurify from "dompurify";

const SearchContainer = styled.div`
  padding: 2rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  border: 2px solid #e0e0e0;
  border-radius: 50px;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  min-width: 0;

  &:focus {
    outline: none;
    border-color: rgb(5, 121, 32);
    box-shadow: 0 0 0 3px rgba(5, 121, 32, 0.1);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

const SearchButton = styled.button`
  background: linear-gradient(135deg, rgb(2, 68, 19), rgb(5, 121, 32));
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem 2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(5, 121, 32, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const MIN_QUERY_LENGTH = 2;
const MAX_QUERY_LENGTH = 50;
const SPECIAL_CHAR_REGEX = /^[a-zA-Z0-9\s!?.,-]+$/;

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery("");
 }, []);

 const sanitizeInput = (input: string): string => {
  return DOMPurify.sanitize(input);
};

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

   const handleSearch = () => {
    let trimmedQuery = query.trim();

    // Prevent empty or very short searches
    if (trimmedQuery.length < MIN_QUERY_LENGTH) {
      alert(`Search query must be at least ${MIN_QUERY_LENGTH} characters.`);
      return;
    }

    // Prevent excessively long searches
    if (trimmedQuery.length > MAX_QUERY_LENGTH) {
      alert(`Search query cannot exceed ${MAX_QUERY_LENGTH} characters.`);
      return;
    }

    // Ensure input contains at least one valid alphanumeric character
    if (!SPECIAL_CHAR_REGEX.test(trimmedQuery)) {
      alert("Search query contains invalid characters.");
      return;
    }

    // Sanitize input to prevent XSS
    trimmedQuery = sanitizeInput(trimmedQuery);

    if (trimmedQuery) {
      onSearch(trimmedQuery);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };


  return (
    <>
    <SearchContainer>
      <SearchWrapper>
        <IconWrapper>
          <SearchIcon size={20} />
        </IconWrapper>
        <SearchInput
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Search all the GIFs you want..."
          aria-label="Search GIFs"
          aria-describedby="search-helper"
          role="searchbox" // Define this as a search box for a11y
        />
        <SearchButton onClick={handleSearch}>
          Search GIFs
        </SearchButton>
      </SearchWrapper>
    </SearchContainer>
    </>
  );
};

export default Search;
