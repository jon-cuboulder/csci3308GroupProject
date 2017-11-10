import React from 'react';

/* Login Form
 * HTML was lifted from https://bootsnipp.com/snippets/0BVEA
 */
export default function Register({handleSubmit, handleChange, form}) {
  return (<div>
    <form className="form-horizontal" onSubmit={handleSubmit(form)}>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h2>Sign In</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 field-label-responsive">
          <label htmlFor="email">E-Mail Address</label>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <div className="input-group-addon" style={{width: '2.6rem'}}><i className="fa fa-at"></i></div>
              <input type="text" className="form-control" 
                onChange={handleChange('email')} placeholder="you@example.com" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 field-label-responsive">
          <label htmlFor="password">Password</label>
        </div>
        <div className="col-md-6">
          <div className="form-group has-danger">
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <div className="input-group-addon" style={{width: "2.6rem"}}><i className="fa fa-key"></i></div>
              <input type="password" className="form-control" onChange={handleChange('pass')}
                placeholder="Password" id="password" value={form.pass} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <button type="submit" className="btn btn-success">
            Sign In
          </button>
        </div>
      </div>
    </form>
  </div>);
}