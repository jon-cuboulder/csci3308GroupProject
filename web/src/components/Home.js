import React from 'react';

export default function Home({ onSubmit }) {
  return (<div>
    <h1>What Do You Want to Learn Next?</h1>
    <form onsubmit={onSubmit}>
      <div className="row">
        <div className="col-lg-8 offset-lg-2">
          <div className="input-group">
            <input type="text" className="form-control" 
              placeholder="Topic..." />
            <div className="input-group-btn">
              <button type="submit" className="btn btn-primary">Search</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>);
}
