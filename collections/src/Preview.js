import PropTypes from "prop-types"
import React from "react"
import { STORE_ID } from './constants';
export default class Preview extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      collections: [],
      currentValue: '',
      collectionsItems: []
    }
  }

  getCollection() {
    const API_COLLETIONS_PATH = `https://api.e-com.plus/v1/collections/${this.props.value}.json`

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
        this.setState({
          collections: json,
          currentValue: this.props.value
        })
        this.setProductToPreview()
      })
      .catch(err => {
        console.log(err)
        return false
      })
  }

  async setProductToPreview() {
    const { collections } = this.state

    this.setState({
      collectionsItems: []
    })
    if (collections.products && collections.products.length) {
      let products = collections.products.map(async (product, index) => {
        const ret = await this.getProduct(product)
        return ret.json()
      })
      Promise
        .all(products)
        .then(p => {
          console.log(JSON.stringify(p, 'undefined', 4))
          this.setState({
            collectionsItems: p || []
          })
        })
        .catch(e => {
          console.log(e)
        })

    }
  }

  async getProduct(productId) {
    const API_COLLETIONS_PATH = `https://api.e-com.plus/v1/products/${productId}.json`

    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Store-Id': STORE_ID
    })

    let options = {
      method: 'GET',
      headers: headers
    }

    return fetch(API_COLLETIONS_PATH, options)
  }

  componentDidMount() {
    this.getCollection()
  }

  componentDidUpdate() {
    if (this.state.currentValue !== this.props.value) {
      this.getCollection()
      return true
    }
    return false
  }

  render() {
    let ulStyle = {
      position: 'relative',
      width: '100%',
      listStyle: 'none',
      padding: 0,
      whiteSpace: 'nowrap',
      display: 'flex',
      flexWrap: 'nowrap',
      willChange: 'transform',
    }
    let liStyle = {
      width: '270px',
      marginRight: '5px',
      flexShrink: 0,
      whiteSpace: 'normal'
    }
    let spanPicStyle = {
      display: 'flex',
      height: '250px',
      alignItems: 'center',
      textAlign: 'center',
      overflow: 'hidden'
    }
    let productNameStyle = {
      marginTop: '.5rem',
      fontSize: '.88rem',
      lineHeight: '1.2',
      height: '3.168rem',
      overflow: 'hidden',
      fontWeight: '400',
      display: 'block',
      zIndex: '1'
    }
    const colletionProducts = this.state.collectionsItems.map((collection) =>
      <li style={liStyle}>
        <div style={{ padding: '1rem' }}>
          <a>
            <span style={spanPicStyle}>
              <span>
                <img src={collection.pictures[0].normal.url} />
              </span>
            </span>
            <h3 style={productNameStyle}>{collection.name}</h3>
          </a>
        </div>
      </li >
    )

    return (
      <div id={this.props.value} > <ul style={ulStyle}>{colletionProducts}</ul></div>
    )
  }
}

Preview.propTypes = {
  value: PropTypes.node,
  onChange: PropTypes.func.isRequired
}