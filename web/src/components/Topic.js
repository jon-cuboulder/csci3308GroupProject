import React from 'react';
import ResourceForm from '../containers/ResourceForm';
import Resource from '../containers/Resource';

export default function Topic({ id, name, resources, vote, isAdding, toggle }) {
  let list = <div>No resources</div>;
  if (resources.length > 0) {
    list = <ul className="list-group list-group-flush">
      {resources.map(r => 
        <li className="list-group-item" key={r.id}> <Resource topicId={id} resourceId={r.id} /> </li>)}
      </ul>;
  }

  return (
    <div className="mt-3">
      <h3>{name}</h3>
      {list}
      { isAdding ? 
          <ResourceForm topicID={id} toggle={toggle} />
          :
          <div className="text-center mt-3">
            <a href="#add-resource" className="text-secondary"
              onClick={() => toggle(true)}>
              Add a resource
            </a>
          </div>
      }
    </div>
  );
}
