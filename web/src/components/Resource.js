import React from 'react';
import CommentList from '../containers/CommentList';
import ResourceEditForm from '../containers/ResourceEditForm';


// Resource list item in the topic view.
export default function Resource({topicId, resourceId, url, votes, abstract, name, voteUp, voteDown, comments, isAuthed, toggleEdit, isEditing}) {

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
        { isEditing
        ? <ResourceEditForm topicId={topicId} resourceId={resourceId} name={name} />
        : <a className="font-weight-bold" href={url}>{name}</a>
        }<div className="mb-5">{abstract}</div>
        <button type ="button" className="btn btn-light" onClick={() => toggleEdit(topicId, resourceId)} disabled={!isAuthed}> edit </button>
        <CommentList resourceId={resourceId} comments={comments} />
      </div>
    </div>
  </div>);
}
