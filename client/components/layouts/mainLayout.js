import React from 'react';
import Header from '../widgets/header';

class MainLayout extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
