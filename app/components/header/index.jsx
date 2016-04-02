import React from 'react';

const Header = React.createClass( {
  displayName: 'Header',

  render() {
    return (
      <section className="hero">
        <div className="hero-header">
          <header className="header">
            <div className="container">
              <div className="header-left">
                <div className="header-item">
                <span className="mega-octicon octicon-beaker"></span>
                <h6 className="title is-6">Socket Debugger</h6></div>
              </div>
              <div className="header-menu header-right">
                <div className="header-item">
                  <input id="connectionIp" type="text" placeholder="ip" value="http://localhost" className="input" />&nbsp;
                  <input id="connectionPort" type="text" placeholder="port" value="3000" className="input" />&nbsp;
                  <button id="buttonConnect" className="button is-success">Connect</button>
                </div>
              </div>
            </div>
          </header>
        </div>
      </section>
    );
  }
} );

export default Header;
