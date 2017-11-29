import React from 'react';
import {Link} from 'react-router-dom';

export default function SearchResults({ results, clearSearch }) {
  let search = <div />;
  if(results.length) {
    search = (<div>
      <h4>Search Results</h4>
      <ul className="list-group list-group-flush">
        {results.map(result => <li className="list-group-item" key={result.id}>
          <Link onClick={clearSearch} to={`/topics/${result.id}`}>{result.name}</Link>
        </li>)}
      </ul>
    </div>);
  }
  return search;
}
