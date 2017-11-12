export const TOPIC_LOAD = 'TOPIC_LOAD';

export function load(payload) {
  return {
    type: TOPIC_LOAD,
    payload
  };
}
