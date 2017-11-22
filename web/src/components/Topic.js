import React from 'react';
import ResourceForm from '../containers/ResourceForm';
import Resource from '../containers/Resource';

export default function Topic({ id, name, resources, vote }) {
  let list = <div>No resources</div>;
  if (resources.length > 0) {
    list = <ul>
      {resources.map(r => 
        <li key={r.id}> <Resource topicId={id} resourceId={r.id} /> </li>)}
      </ul>;
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
