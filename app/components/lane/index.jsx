import React from 'react';
import Card from 'components/card';

const Lane = React.createClass( {
  displayName: 'Lane',

  render() {
    return (
      <div>
        <h1>Lane</h1>
        <Card />
      </div>
    );
  }
} );

module.exports = Lane;