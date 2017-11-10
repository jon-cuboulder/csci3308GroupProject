import React from 'react';

export default function Home({ qry, handleSubmit, handleChange, results }) {
  let search = '';
  if(results.length) {
    search = (<div>
      <h2>Search Results</h2>
      <ul>
        {results.map(result => <li key={result.id}>{result.name}</li>)}
      </ul>
    </div>);
  }

  return (<div className="container-fluid">
    <h1>What Do You Want to Learn Next?</h1>
    <form onSubmit={handleSubmit(qry)}>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="input-group">
            <input type="text" className="form-control" onChange={handleChange}
              placeholder="Topic..." value={qry} />
            <div className="input-group-btn">
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    {search}
  </div>);
}
