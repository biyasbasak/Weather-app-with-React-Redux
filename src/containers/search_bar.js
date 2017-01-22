import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = { term: '' };
  }
  onFormSubmit(event) {
    event.preventDefault();
    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
 }
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  render() {
    return (
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input placeholder="get a five day forecast in your favourite city"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({ fetchWeather }, dispatch);

export default connect(null,mapDispatchToProps)(SearchBar);