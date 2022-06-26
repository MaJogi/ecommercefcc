import React, { Component } from 'react'

export default class Product extends Component {
  constructor(props) {
    super(props)

    this.state = {
      product: this.props.product,
    }
  }

  render() {
    return (
      <div className='col-lg-6'>
        <div className='card m-2'>
          <div className='card-body'>
            <span
              className='pull-right hand-icon'
              onClick={() => {
                this.props.onDelete(this.state.product)
              }}
            >
              <i className='fa fa-times'></i>
            </span>
            <div className='text-muted'>#{this.state.product.id}</div>
            <h5 className='pt-2 border-top'>
              {this.state.product.productName}
            </h5>
            <div>${this.state.product.price}</div>
          </div>
          <div className='card-footer text-right'>
            <div className='float-left'>
              <span className='badge'>{this.state.product.quantity}</span>
              <div
                className='btn btn-outline-success'
                onClick={() => {
                  this.props.onIncrement(this.state.product, 5) // maximum value as argument
                }}
              >
                +
              </div>
              <div
                className='btn btn-outline-success'
                onClick={() => {
                  this.props.onDecrement(this.state.product, 0)
                }}
              >
                -
              </div>
            </div>
            <div className='float-right'>{this.props.children}</div>
          </div>
        </div>
      </div>
    )
  }

  componentWillUnmount() {
    console.log('componentWillUnmount - Product')
  }
}
