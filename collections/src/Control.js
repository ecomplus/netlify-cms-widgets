import PropTypes from 'prop-types';
import React from 'react';
import {STORE_ID} from './constants';

export default class Control extends React.Component {
  constructor() {
    super()
    this.state = {
      collections: [],
      value: ''
    }
  }

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    forID: PropTypes.string,
    value: PropTypes.node,
    classNameWrapper: PropTypes.string.isRequired,
  }

  static defaultProps = {
    value: '',
  }

  componentDidMount() {
    const API_COLLETIONS_PATH = 'https://api.e-com.plus/v1/collections.json'
    let initialCollections = []
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Store-Id': STORE_ID
    })
    let options = {
      method: 'GET',
      headers: headers
    }
    fetch(API_COLLETIONS_PATH, options)
      .then(res => res.json())
      .then(json => {
        initialCollections = json.result.map(collection => {
          return collection
        })
        this.setState({
          collections: initialCollections
        })
      })
      .catch(err => {
        this.setState({ valid: false, data: {} });
        return false;
      });
  }

  render() {
    const {
      forID,
      onChange,
      classNameWrapper,
    } = this.props;

    let elChange = e => {
      this.setState({ value: e.target.value })
      onChange(e.target.value)
    }

    let optionsItems = this.state.collections.map((collection) =>
      <option key={collection._id} value={collection._id}>{collection.name}</option>
    )

    return (
      <div>
        <select
          id={forID}
          className={classNameWrapper}
          onChange={elChange.bind(this)}
          value={this.state.value || ''}
        >
          <option value="" selected>Selecione uma coleção</option>
          {optionsItems}
        </select>
      </div>
    )
  }
}