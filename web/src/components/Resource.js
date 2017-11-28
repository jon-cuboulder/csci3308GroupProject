import React from 'react';
import CommentList from '../containers/CommentList';

// Resource list item in the topic view.
export default function Resource({topicId, resourceId, url, votes, abstract, name, voteUp, voteDown, comments, isAuthed}) {

  return (<div>
    <div className="row">
      <div className="col-sm">
        <div className="text-center">
          <button type="button" className="btn btn-light" onClick={() => voteUp(topicId, resourceId)} disabled={!isAuthed}>
            <span className="fa fa-arrow-up" ></span>
          </button>
        </div>
        <div className="text-center">{votes}</div>
        <div className="text-center">
          <button type="button" className="btn btn-light" onClick={() => voteDown(topicId, resourceId)} disabled={!isAuthed}>
            <span className="fa fa-arrow-down" ></span>
          </button>
        </div>
      </div>
      <div className="col-sm-11">
        <a className="font-weight-bold" href={url}>{name}</a>
        <div className="mb-5">{abstract}</div>
        <CommentList resourceId={resourceId} comments={comments} />
      </div>
    </div>
  </div>);
}
