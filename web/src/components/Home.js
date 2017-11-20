import React from 'react';
import Results from './SearchResults';
import { Link } from 'react-router-dom';

export default function Home({ qry, handleSubmit, handleChange, results, isLoading }) {
  return (<div className="container-fluid">
    <h1>What Do You Want to Learn Next?</h1>
    <form onSubmit={handleSubmit(qry)}>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="input-group">
            <input type="text" className="form-control" onChange={handleChange('qry')}
              placeholder="Topic..." value={qry} />
            <div className="input-group-btn">
              <button type="submit" className="btn btn-primary" disabled={isLoading}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <div className="text-center">
      <Link to="/topics/create">create topic</Link>
    </div>
    <Results results={results} />
  </div>);
}
