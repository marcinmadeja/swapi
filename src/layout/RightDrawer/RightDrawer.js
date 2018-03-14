import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleUsers } from 'actions/drawers';
import AppDrawer from 'components/AppDrawer/AppDrawer';
import DrawerUsers from 'components/DrawerUsers/DrawerUsers';

class LeftDrawer extends Component {
  render() {
    return (
      <AppDrawer
        anchor="right"
        extend={this.props.extendDrawerUsers}
      >
        <DrawerUsers toggleExtend={this.props.toggleUsers} />
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
