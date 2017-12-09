import React from 'react';
import { Link } from 'react-router-dom';
import CommentForm from '../containers/CommentForm';

export default function CommentList({ comments, isCommenting, resourceId, toggle }) {
  var options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  };

  return (<ul className="list-group list-group-flush">
    { comments.map(c =>
      <li className="list-group-item bg-light" key={c.id}>
        <span className="fa fa-comment mr-2" /> {c.text}
        <div className="font-italic">
          <Link to={`/users/${c.user.id}`}>{c.user.name}</Link> on {(new Date(c.created_at.date)).toLocaleTimeString("en-us", options)}
        </div>
      </li>
    ) }
    <li className="list-group-item">
      { isCommenting ? <CommentForm resourceId={resourceId} /> :
          <button type="button" className="btn btn-link text-secondary" onClick={() => toggle(resourceId)}>
            Add a comment
          </button>}
        </li>
      </ul>);
}
