import React from 'react';
import CommentForm from '../containers/CommentForm';

// Resource list item in the topic view.
export default function Resource({topicId, resourceId, url, votes, abstract, name, voteUp, voteDown, isCommenting, toggleComment, comments}) {
  var options = {  
    weekday: "long", year: "numeric", month: "short",  
    day: "numeric", hour: "2-digit", minute: "2-digit"  
  };  

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
          { comments.map(c => 
            <li className="list-group-item bg-light">
              <span className="fa fa-comment mr-2" /> {c.text}
              <div className="font-italic">
                {c.user.name} on {(new Date(c.created_at.date)).toLocaleTimeString("en-us", options)}
              </div>
            </li>
            ) }
          <li className="list-group-item">
            { isCommenting ? <CommentForm resourceId={resourceId} /> :
            <a href="#comment" className="text-secondary" onClick={() => toggleComment(resourceId)}>
              Add a comment
            </a>}
          </li>
        </ul>
      </div>
    </div>
  </div>);
}
