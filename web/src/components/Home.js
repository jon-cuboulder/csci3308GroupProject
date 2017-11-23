import React from 'react';
import Results from './SearchResults';
import { Link } from 'react-router-dom';

export default function Home({ qry, handleSubmit, handleChange, results, isLoading }) {
  return (<div className="container-fluid">
    <form onSubmit={handleSubmit(qry)}>
      <div className="row mt-5">
        <div className="col-lg-6 offset-lg-3">
          <div className="input-group">
            <input type="text" className="form-control" onChange={handleChange('qry')}
              placeholder="I want to learn about ..." value={qry} autoFocus={true} />
            <div className="input-group-btn">
              <button type="submit" className="btn btn-primary" disabled={isLoading}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center mt-3">
        <Link className="btn btn-outline-secondary" to="/topics/create">
          New Topic
        </Link>
      </div>
    </form>
    <Results results={results} />
  </div>);
}
