import React from 'react';
import { Link } from 'react-router-dom';

export default function Profile({user}) {
  return (
    <div className="mt-4">
      <div className="text-center">
        <span className="fa fa-user" style={{fontSize: '8em'}} />
        <h2 className="display-4">{user.name}</h2>
      </div>
      <h5 className="mt-4">Votes</h5>
      <ul className="list-group list-group-flush">
        {user.votes.map(v => <li key={v.id} className="list-group-item">
          {v.is_negative ? 
              <span className="fa fa-thumbs-down" />
              :
              <span className="fa fa-thumbs-up" />}
              <a href={v.resource.url} target="_blank" className="ml-2">
                {v.resource.name}
              </a>
        </li>)}
      </ul>
    </div>
  );
}
