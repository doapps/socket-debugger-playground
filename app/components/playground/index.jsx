import React from 'react';

const PlayGround = React.createClass( {
  displayName: 'PlayGround',

  render() {
    return (
      <div className="column">
        <div className="columns is-multiline">
          <div className="column is-half">
            <div className="card is-fullwidth">
              <header className="card-header">
                <p className="card-header-title">
                  <a href="#">Client 1</a>
                </p>
                <a className="card-header-icon">
                  <span className="octicon octicon-x"></span>
                </a>
              </header>
              <div className="card-content">
                <div className="content">
                  <label className="label">Socket ID</label><p>KDa5LxSL3O-RllttAAAC </p>
                  <label className="label">Emit Key</label>
                  <p className="control">
                    <input id="emitKey" type="text" placeholder="key for socket" className="input" />
                  </p>
                  <label className="label">Data</label>
                  <p className="control">
                    <textarea id="jsonData" style={{'fontFamily': 'monospace; height: 120px'}} className="textarea"></textarea>
                  </p>
                  <p className="control">
                    <button className="button is-info is-fullwidth is-loading_ is-disabled_">Send</button>
                  </p>
                </div>
              </div>
              <div className="notification">
                <button className="delete"></button>
                <code>emit_socket</code><small>{ "1:26:28 PM" }</small>
                <pre id="content">{
                    ' "foo": "bar" '
                  }
                </pre>
              </div><div className="notification">
              <button className="delete"></button>
              <code>emit_socket</code><small>1:26:28 PM</small>
              <pre id="content">
              {
                  `{ "foo": "bar"}`
              }
              </pre>
            </div>
            </div>
            </div>
            <div className="column is-half">
              <div className="card is-fullwidth">
                <header className="card-header">
                  <p className="card-header-title">
                    <input id="keyProp" type="text" autofocus="" required="" className="input" />
                    &nbsp;
                    <input type="submit" value="Add" className="button is-info is-fullwidth_" />
                  </p>
                </header>
              </div>
            </div>
            <div className="column is-half">
              <button className="button is-success is-outlined_">
              <span className="octicon octicon-plus"></span>
              </button>
            </div>
          </div>
        </div>
    );
  }
} );

export default PlayGround;