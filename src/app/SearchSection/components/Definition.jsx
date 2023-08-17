import React from "react";

const Definition = ({ definitions, selectedTab, hasSearched }) => {
  if (hasSearched && definitions.length === 0) {
    return <p>There are no matching results</p>;
  }

  return (
    <div>
      {definitions.map((def, index) => {
        if (def.partOfSpeech === selectedTab) {
          return (
            <div key={index} className="mb-4">
              <h3 className="text-lg font-semibold mb-2">{def.partOfSpeech}</h3>
              <ul>
                {def.definitions.map((definition, idx) => (
                  <li key={idx} className="mb-1">
                    {definition}
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Definition;
