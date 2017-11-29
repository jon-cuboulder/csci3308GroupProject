import React from 'react';
import {Link} from 'react-router-dom';

export default function SearchResults({ results, clearSearch, hasSubmit }) {
  if(!hasSubmit) {
    // The case when nothing has been sent or received from the server.
    return <div />;
  }

  if(!results.length) {
    return <h4>No results found</h4>;
  }

  return (<div>
    <h4>Search Results</h4>
    <ul className="list-group list-group-flush">
      {results.map(result => <li className="list-group-item" key={result.id}>
        <Link onClick={clearSearch} to={`/topics/${result.id}`}>{result.name}</Link>
      </li>)}
    </ul>
  </div>);
}
