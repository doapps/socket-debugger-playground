import React from 'react';
import LinkedStateMixin from 'react-addons-linked-state-mixin';

const debug = require( 'debug' )( 'app:components:header' );

const Header = React.createClass( {
  displayName: 'Header',

  mixins: [ LinkedStateMixin ],

  getInitialState() {
    return {
      connectionIp: 'http://localhost',
      connectionPort: '3000'
    }
  },

  connect() {
    debug( 'this.state', this.state );
  },

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
                  <input type="text" valueLink={ this.linkState( 'connectionIp' ) } placeholder="ip" className="input" />&nbsp;
                  <input type="text" valueLink={ this.linkState( 'connectionPort' ) } placeholder="port" className="input" />&nbsp;
                  <button onClick={ this.connect } className="button is-success">Connect</button>
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
