import React from 'react';

/* Create New User Form
 * HTML was lifted from https://bootsnipp.com/snippets/0BVEA
 */
export default function Register({errEmail, errName, errPass, handleSubmit, handleChange, form}) {
  return (<div>
    <form className="form-horizontal" onSubmit={handleSubmit(form)}>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <h2>Create Account</h2>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 field-label-responsive">
          <label htmlFor="name">Name</label>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <div className="input-group-addon" style={{width: '2.6rem'}}><i className="fa fa-user"></i></div>
              <input type="text" className="form-control" onChange={handleChange('name')}
                required placeholder="John Doe" autoFocus value={form.name} />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-control-feedback">
            <span className="text-danger align-middle">{errName}</span>
          </div>
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
              <input type="text" className="form-control" onChange={handleChange('email')}
                required placeholder="you@example.com" />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-control-feedback">
            <span className="text-danger align-middle">{errEmail}</span>
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
                required placeholder="Password" id="password" value={form.pass} />
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="form-control-feedback">
            <span className="text-danger align-middle">{errPass}</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 field-label-responsive">
          <label htmlFor="password">Confirm Password</label>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <div className="input-group mb-2 mr-sm-2 mb-sm-0">
              <div className="input-group-addon" style={{width: "2.6rem"}}>
                <i className="fa fa-repeat"></i>
              </div>
              <input type="password" className="form-control" onChange={handleChange('pass2')}
                placeholder="Password" required value={form.pass2} />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <button type="submit" className="btn btn-success">
            <i className="fa fa-user-plus"></i> Create Account
          </button>
        </div>
      </div>
    </form>
  </div>);
}
