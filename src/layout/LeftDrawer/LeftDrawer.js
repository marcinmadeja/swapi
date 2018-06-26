import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleMenu } from 'actions/drawers';
import { withRouter } from 'react-router-dom';
import AppDrawer from 'components/AppDrawer/AppDrawer';
import SidebarNav from 'components/SidebarNav/SidebarNav';

export class LeftDrawer extends Component {
  render() {
    return (
      <AppDrawer
        anchor="left"
        extend={this.props.extendDrawerMenu}
      >
        <SidebarNav toggleExtend={this.props.toggleMenu} />
      </AppDrawer>
    );
  }
}

const mapStateToProps = state => {
  const { extendDrawerMenu } = state.drawers;

  return {
    extendDrawerMenu,
  };
};

export default withRouter(connect(mapStateToProps, { toggleMenu })(LeftDrawer));
