import React from 'react';

export default function ResourceForm({ topicID, handleSubmit, handleChange, name, abstract, auth, isLoading }) {
  if (!auth) {
    console.log(auth);
    return <div>Please login to add a resource</div>;
  }

  return (
    <form onSubmit={handleSubmit(topicID, name, abstract)}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" value={name}
          onChange={handleChange('name')}
          id="name" placeholder="Resource name" />
      </div>
      <div className="form-group">
        <label htmlFor="abstract">Abstract</label>
        <textarea className="form-control" value={abstract}
          onChange={handleChange('abstract')}
          id="abstract" placeholder="Resource abstract" />
      </div>
      <button type="submit" className="btn btn-primary" disabled={isLoading}>
        Add Resource
      </button>
    </form>
  );
}
