import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getFilmById } from 'actions/swFilms';
import { get } from 'lodash';

class FilmDetails extends Component {
  componentDidMount() {
    const name = this.getName();
    const id = this.getId();
    this.props.getFilmById(id);
  }

  getName() {
    return get(this.props, 'match.params.name', null);
  }

  getId() {
    return parseInt(get(this.props, 'match.params.id', null), 10);
  }

  render() {
    return (
      <div>
        FilmDetails
      </div>
    );
  }
}

export default connect(null, { getFilmById })(FilmDetails);
