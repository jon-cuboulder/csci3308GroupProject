import React from 'react';

export default function Home({ qry, onSubmit, handleChange }) {
  return (<div className="container-fluid">
    <h1>What Do You Want to Learn Next?</h1>
    <form onSubmit={onSubmit(qry)}>
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
  </div>);
}
