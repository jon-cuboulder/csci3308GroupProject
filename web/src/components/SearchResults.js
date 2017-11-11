import React from 'react';
import {Link} from 'react-router-dom';

export default function SearchResults({ results }) {
  let search = <div />;
  if(results.length) {
    search = (<div>
      <h2>Search Results</h2>
      <ul>
        {results.map(result => <li key={result.id}>
          <Link to={`/topics/${result.id}`}>{result.name}</Link>
        </li>)}
      </ul>
    </div>);
  }
  return search;
}
