import React from 'react';
import CommentList from '../containers/CommentList';
import ResourceEditForm from '../containers/ResourceEditForm';

function ResourceActionBar({ topicId, resourceId, voteUp, voteDown, delResource, toggleEdit, votes, isAuthed }) {
  return (<div className="text-center">
    <button type="button" className="btn btn-light" onClick={() => voteUp(topicId, resourceId)} disabled={!isAuthed}>
      <span className="fa fa-arrow-up" />
    </button>
    <div>{votes}</div>
    <button type="button" className="btn btn-light" onClick={() => voteDown(topicId, resourceId)} disabled={!isAuthed}>
      <span className="fa fa-arrow-down" />
    </button>
    <div className="mt-3">
      <button type="button" className="btn btn-link text-dark mr-2" onClick={() => toggleEdit(topicId, resourceId)} disabled={!isAuthed}>
        <span className="fa fa-pencil fa-lg" />
      </button>
      <button type="button" className="btn btn-link text-danger" onClick={() => delResource(topicId, resourceId)} disabled={!isAuthed}>
        <span className="fa fa-trash-o fa-lg" />
      </button>
    </div>
  </div>);
}


// Resource list item in the topic view.
export default function Resource(props) {
  const { topicId, resourceId, url, abstract, name, comments, isEditing } = props;

  return (<div>
    <div className="row">
      <div className="col-sm-2">
        <ResourceActionBar {...props} />
      </div>
      <div className="col-sm-10">
        { isEditing
        ? <ResourceEditForm topicId={topicId} resourceId={resourceId} name={name} />
        : <a className="font-weight-bold" href={url}>{name}</a>
        }
        <div className="mb-5">{abstract}</div>
        <CommentList resourceId={resourceId} comments={comments} />
      </div>
    </div>
  </div>);
}
