import React from 'react';

export default function TopicForm({handleChange, handleSubmit, name, history}) {
  return (
    <form onSubmit={handleSubmit(name, history)}>
      <h2>Create Topic</h2>
      <hr />
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control" id="name"
          value={name}
          onChange={handleChange('name')} placeholder="New Topic Name" />
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
