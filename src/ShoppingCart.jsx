import { Component } from 'react'
import Product from './Product'
export default class ShoppingCart extends Component {
  // Executes when the component is mounted
  constructor(props) {
    // never make http requests here. Db requests too.
    //initialization of the state
    super(props)
    this.state = {
      products: [],
    }
  }

  render() {
    return (
      <div className=''>
        <h4>Shopping Cart</h4>
        <div className='row'>
          {this.state.products.map((product, index) => {
            return (
              <Product
                key={product.id}
                product={product}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className='btn btn-primary'>Buy Now</button>
              </Product>
            )
          })}
        </div>
      </div>
    )
  }

  componentDidMount = async () => {
    // async means that some code will wait until promise is handled
    //fetch data from data source
    console.log('componentDidMount')
    var response = await fetch('http://localhost:4000/products', {
      method: 'GET',
    })
    var prods = await response.json()

    this.setState({ products: prods })
    console.log(response)
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      'componentDidUpdate - ShoppingCart',
      prevProps,
      prevState,
      this.props,
      this.state
    )

    // if (prevProps.x != this.props.x) {
    //   // if specific condition is true
    //   // make http call
    // }
  }

  componentWillUnmount() {
    console.log('componentWillUnmount - ShoppingCart')
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch - ShoppingCart')
    console.log(error, info)

    localStorage.lastError = `${error}\n${JSON.stringify(info)}`
  }

  handleIncrement = (product, maxValue) => {
    let allProducts = [...this.state.products] //get all elements from particular array
    let index = allProducts.indexOf(product)
    if (allProducts[index].quantity < maxValue) {
      allProducts[index].quantity++
      console.log(allProducts[index])
      console.log(allProducts)
      this.setState({ products: allProducts })
    }
  }

  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products] //get all elements from particular array
    let index = allProducts.indexOf(product)
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--
      console.log(allProducts[index])
      console.log(allProducts)
      this.setState({ products: allProducts })
    }
  }

  handleDelete = (product) => {
    let allProducts = [...this.state.products]
    let index = allProducts.indexOf(product)

    if (window.confirm('Are you sure to delete?')) {
      allProducts.splice(index, 1) // starting from index, remove 1 element
      this.setState({ products: allProducts })
    }
  }
}
