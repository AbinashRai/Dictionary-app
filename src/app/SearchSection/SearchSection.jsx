import React, { useState } from "react";
import SearchInput from "./components/SearchInput";
import Tabs from "./components/Tabs";
import Definition from "./components/Definition";

const SearchSection = () => {
  const [definitions, setDefinitions] = useState([]);
  const [selectedTab, setSelectedTab] = useState("noun");
  const [searchSuccess, setSearchSuccess] = useState(true);

  const handleSearch = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`
      );
      const data = await response.json();

      const extractedDefinitions = data[0]?.meanings?.map((meaning) => {
        return {
          partOfSpeech: meaning.partOfSpeech || "",
          definitions: meaning.definitions?.map((def) => def.definition) || [],
        };
      });

      if (extractedDefinitions?.length > 0) {
        setDefinitions(extractedDefinitions);
        setSearchSuccess(true);
      } else {
        setDefinitions([]);
        setSearchSuccess(false);
      }

      setSelectedTab("noun");
    } catch (error) {
      console.error(error);
      setDefinitions([]);
      setSearchSuccess(false);
    }
  };

  return (
    <div className="container mx-auto p-4 ">
      <div className="flex justify-center items-center mb-4">
        <SearchInput onSearch={handleSearch} />
      </div>
      <div>
        <Tabs selectedTab={selectedTab} onTabClick={setSelectedTab} />
        {searchSuccess ? (
          <Definition definitions={definitions} selectedTab={selectedTab} />
        ) : (
          <p>There are no matching results</p>
        )}
      </div>
    </div>
  );
};

export default SearchSection;
