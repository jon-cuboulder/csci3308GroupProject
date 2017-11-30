import React from 'react';

export default function ResourceEditForm({topicId, resourceId, handleChange, value, handleSubmit}) {
  return (<form onSubmit={handleSubmit(topicId, resourceId, value)}>
    <input type="text" value={value} className="form-control" autoFocus onChange={handleChange(resourceId)('name')}/>
    <input type="submit" className="btn btn-success" value="Save" />
  </form>);
}