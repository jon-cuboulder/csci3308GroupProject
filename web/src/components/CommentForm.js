import React from 'react';

// Comment on a resource
export default function CommentForm({ cancel, change, comment, resourceId, submit, isLoading }) {
  return (<form onSubmit={submit(resourceId, comment)}>
    <textarea className="form-control" placeholder="Comment..." autoFocus 
    value={comment} onChange={change('comment')}/>
    <div className="mt-3">
      <button type="button" className="btn btn-outline-secondary mr-3"
        onClick={cancel}>
        Cancel
      </button>
      <button type="submit" className="btn btn-success" disabled={isLoading}>
        <span className="fa fa-plus mr-2"/>
        Add Comment
      </button>
    </div>
  </form>);
}
