import React from 'react';

// Resource list item in the topic view.
export default function Resource({topicId, resourceId, url, votes, abstract, name, voteUp, voteDown}) {
  return (<div>
    <button type="button" className="btn btn-light" onClick={() => voteDown(topicId, resourceId)}>
      <span className="fa fa-arrow-down" ></span>
    </button>
    <button type="button" className="btn btn-light" onClick={() => voteUp(topicId, resourceId)}>
      <span className="fa fa-arrow-up" ></span>
    </button>
    <span className="text-secondary" >{votes} Votes</span>
    <a className="ml-4" href={url}>{name}</a>
    <div className="text-secondary">{abstract}</div>
  </div>);
}
