import React from 'react';
import ResourceForm from '../containers/ResourceForm';

function Resource({url, votes, abstract, name}) {
  return (<div>
    <span className="text-secondary">{votes} Votes</span>
    <a className="ml-4" href={url}>{name}</a>
    <div className="text-secondary">{abstract}</div>
  </div>);
}

export default function Topic({ id, name, resources }) {
  let list = <div>No resources</div>;
  if (resources.length > 0) {
    list = <ul>{resources.map(r => <li key={r.id}><Resource {...r} /></li>)}</ul>;
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
