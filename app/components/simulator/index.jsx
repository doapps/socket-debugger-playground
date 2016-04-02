import React from 'react';

import Header from 'components/header';
import PlayGround from 'components/playground';
import SidebarTools from 'components/sidebar-tools';

const Simulator = React.createClass( {
  displayName: 'Simulator',

  render() {
    return (
      <div>
        <Header />
        <section className="section">
          <div className="container">
            <div className="columns">
              <PlayGround/>
              <SidebarTools/>
            </div>
          </div>
        </section>
      </div>
    );
  }
} );

export default Simulator;