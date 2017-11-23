import React from 'react';

export default function TopicForm({handleChange, handleSubmit, name, history, isLoading}) {
  return (
    <form onSubmit={handleSubmit(name, history)}>
      <h2>Create Topic</h2>
      <hr />
      <div className="form-group row align-items-center">
        <div className="col-3 text-right">
          <label htmlFor="name">Name</label>
        </div>
        <div className="col-6">
          <input type="text" className="form-control" id="name" value={name}
            onChange={handleChange('name')} placeholder="New Topic Name" />
        </div>
      </div>
      <div className="row">
        <div className="offset-3 col-6">
          <button type="submit" className="btn btn-success" disabled={isLoading}>
            <span className="fa fa-plus mr-2" />
            Add Topic
          </button>
        </div>
      </div>
    </form>
);
}
