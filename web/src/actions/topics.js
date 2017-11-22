/*
 * Action Types
 */
export const RESOURCE_ADD = 'RESOURCE_ADD';
export const RESOURCE_VOTE = 'RESOURCE_VOTE';
export const TOPIC_LOAD = 'TOPIC_LOAD';

/*
 * Action Creators
 */
export function addResource(topicId, payload) {
  return {
    type: RESOURCE_ADD,
    topicId,
    payload
  };
}

export function load(payload) {
  return {
    type: TOPIC_LOAD,
    payload
  };
}

export function addVote(topicId, resourceId) {
  return {
    type: RESOURCE_VOTE,
    topicId,
    resourceId
  };
}
