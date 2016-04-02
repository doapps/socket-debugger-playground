import React from 'react';

const SidebarTools = React.createClass( {
  displayName: 'SidebarTools',

  render() {
    return (
      <div className="column is-3">
        <div className="notification">
          <form id="formKeyValue">
            <label className="label">Key</label>
            <p className="control">
              <input id="keyProp" type="text" autofocus="" required="" className="input" />
            </p>
            <label className="label">Value</label>
            <p className="control">
              <input id="valueProp" type="text" required="" className="input" />
            </p>
            <input type="submit" value="Set" className="button is-info is-fullwidth" />
          </form>
        </div>
        <div className="notification">
          <form id="formSaveSnippet">
            <label className="label">Name</label>
            <p className="control">
              <input id="snippetName" type="text" required="" className="input" />
            </p>
            <button className="button is-info is-fullwidth">Save</button>
          </form>
        </div>
        <p className="control">
          <span className="tag is-warning">
            Foo
            <button className="delete"></button>
          </span>
          </p><div id="loadSnippets"></div>
          <p></p>
        </div>
    );
  }
} );

export default SidebarTools;