import React from 'react';

function CommentForm({ toggleComment }) {
  return (<form onSubmit={(e) => e.preventDefault()}>
    <textarea className="form-control" placeholder="Comment..." autoFocus />
    <div className="mt-3">
      <button type="button" className="btn btn-outline-secondary mr-3"
        onClick={() => toggleComment(null)}>
        Cancel
      </button>
      <button type="submit" className="btn btn-success">
        <span className="fa fa-plus mr-2"/>
        Add Comment
      </button>
    </div>
  </form>);
}

// Resource list item in the topic view.
export default function Resource({topicId, resourceId, url, votes, abstract, name, voteUp, voteDown, isCommenting, toggleComment}) {
  return (<div>
    <div className="row">
      <div className="col-sm">
        <div className="text-center">
          <button type="button" className="btn btn-light" onClick={() => voteUp(topicId, resourceId)}>
            <span className="fa fa-arrow-up" ></span>
          </button>
        </div>
        <div className="text-center">{votes}</div>
        <div className="text-center">
          <button type="button" className="btn btn-light" onClick={() => voteDown(topicId, resourceId)}>
            <span className="fa fa-arrow-down" ></span>
          </button>
        </div>
      </div>
      <div className="col-sm-11">
        <a className="font-weight-bold" href={url}>{name}</a>
        <div className="mb-5">{abstract}</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            { isCommenting ? <CommentForm toggleComment={toggleComment} /> :
            <a href="#comment" className="text-secondary" onClick={() => toggleComment(resourceId)}>
              Add a comment
            </a>}
          </li>
        </ul>
      </div>
    </div>
  </div>);
}
