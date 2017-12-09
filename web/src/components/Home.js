import React from 'react';
import Results from '../containers/SearchResults';
import { Link } from 'react-router-dom';

export default function Home({ qry, handleSubmit, handleChange, isLoading, isAuthed }) {
  return (<div className="container-fluid home_bg">
    <form onSubmit={handleSubmit(qry)}>
      <div className="row mt-5">
        <div className="col-lg-6 offset-lg-3">
          <div className="input-group">
            <input type="text" className="form-control" onChange={handleChange('qry')}
              placeholder="I want to learn about ..." value={qry} autoFocus={true} />
            <div className="input-group-btn">
              <button type="submit" className="btn btn-primary" disabled={isLoading} style={{"backgroundColor": "#1fa3d1"}}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
      { isAuthed ?
          <div className="text-center mt-3">
            <Link className="btn btn-outline-secondary topics" to="/topics/create">
              New Topic
            </Link>
          </div>
          : <div /> }
    </form>
    <Results />
  </div>);
}
