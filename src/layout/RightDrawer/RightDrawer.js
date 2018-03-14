import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleUsers } from 'actions/drawers';
import AppDrawer from 'components/AppDrawer/AppDrawer';
import SidebarNav from 'components/SidebarNav/SidebarNav';

class LeftDrawer extends Component {
  render() {
    return (
      <AppDrawer
        anchor="right"
        extend={this.props.extendDrawerUsers}
      >
        right
      </AppDrawer>
    );
  }
}

const mapStateToProps = state => {
  const { extendDrawerUsers } = state.drawers;

  return {
    extendDrawerUsers,
  };
};

export default connect(mapStateToProps, { toggleUsers })(LeftDrawer);
