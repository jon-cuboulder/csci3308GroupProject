import React from 'react';
import ResourceForm from '../containers/ResourceForm';

export default function Topic({ id, name, resources }) {
  let list = <div>No resources</div>;
  if (resources.length > 0) {
    list = <ul>{resources.map(r => <li key={r.id}>
        {r.name}
        <div className="text-primary">{r.votes} Votes</div>
        <div><a href={r.url}>{r.url}</a></div>
        <div className="text-secondary">{r.abstract}</div>
      </li>)}</ul>;
  }

  return (
    <div>
      <h2>{name}</h2>
      <h4>Resources</h4>
      {list}
      <ResourceForm topicID={id} />
    </div>
  );
}
