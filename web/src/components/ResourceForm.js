import React from 'react';
import { Link } from 'react-router-dom';

export default function ResourceForm({ topicID, handleSubmit, handleChange, form, auth, isLoading, toggle }) {
  if (!auth) {
    return (<div className="text-center mt-4">
      Please
      <Link className="ml-3 mr-3 btn btn-outline-dark" to="/signin">
        Sign In
      </Link>
      to add a resource.
    </div>);
  }

  return (
    <form onSubmit={handleSubmit(topicID, form.name, form.url, form.abstract)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" value={form.name}
          onChange={handleChange('name')} autoFocus
          id="name" required placeholder="Resource name" />
      </div>
      <div className="form-group">
        <label htmlFor="url">URL</label>
        <input type="text" className="form-control" value={form.url}
          onChange={handleChange('url')}
          id="url" required placeholder="Resource url" />
      </div>
      <div className="form-group">
        <label htmlFor="abstract">Abstract</label>
        <textarea className="form-control" value={form.abstract}
          onChange={handleChange('abstract')}
          id="abstract" required placeholder="Resource abstract" />
      </div>
      <div>
        <button type="button" className="btn btn-outline-secondary mr-3"
          onClick={() => toggle(false)}>
          Cancel
        </button>
        <button type="submit" className="btn btn-success" disabled={isLoading}>
          <span className="fa fa-plus mr-2" />
          Add Resource
        </button>
      </div>
    </form>
  );
}
