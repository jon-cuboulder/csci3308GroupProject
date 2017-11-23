import React from 'react';

// Resource list item in the topic view.
export default function Resource({topicId, resourceId, url, votes, abstract, name, voteUp, voteDown}) {
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
            <a href="#comment" className="text-secondary">
              <span className="fa fa-comment mr-3"></span>
              Add Comment
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>);
}
