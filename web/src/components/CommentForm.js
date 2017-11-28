import React from 'react';
import { Link } from 'react-router-dom';

// Comment on a resource
export default function CommentForm({ cancel, change, comment, resourceId, submit, isLoading, isAuthed }) {
  if (!isAuthed) {
    return (<div className="mt-2">
      Please
      <Link className="ml-3 mr-3 btn btn-outline-dark" to="/signin">
        Sign In
      </Link>
      to add a comment.
    </div>);
  }

  return (<form onSubmit={submit(resourceId, comment)}>
    <textarea required className="form-control" placeholder="Comment..." autoFocus 
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
