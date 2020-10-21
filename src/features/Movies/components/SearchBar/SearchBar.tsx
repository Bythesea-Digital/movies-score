import React, { useState } from "react";
import { Button, SearchContainer, SearchInput } from "./styles";
import { AppState, SearchType } from "../../../../store/movies/duck";

type Props = {
  startSearch: ({ searchTerm, year }: SearchType) => void;
  appState: keyof typeof AppState;
};

export default function SearchBar({
  appState,
  startSearch
}: Props): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const handleEnter = e => {
    e.preventDefault();
    if (searchTerm.length) {
      console.log(searchTerm, year);
      startSearch({ searchTerm, year });
    }
  };

  const isLoading = appState === AppState.FETCHING;
  const isDisabled = !searchTerm.length || isLoading;

  return (
    <SearchContainer>
      <form onSubmit={handleEnter}>
        <SearchInput
          disabled={isLoading}
          onChange={e => setSearchTerm(e.target.value)}
          autoFocus
          placeholder="Type your favourite movie or show!"
        />
        <SearchInput
          disabled={isLoading}
          onChange={e => setYear(e.target.value)}
          minWidth={90}
          placeholder="Year"
        />
        <Button type="submit" disabled={isDisabled}>
          Search
        </Button>
      </form>
    </SearchContainer>
  );
}
