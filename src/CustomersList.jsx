import React, { Component } from 'react'

export class CustomersList extends Component {
  state = {
    pageTitle: 'Customers',
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: 'Marko',
        tel: '55539231',
        address: { city: 'New Delhi' },
        photo: 'https://picsum.photos/id/1010/60',
      },
      {
        id: 2,
        name: 'Silver',
        tel: '45539231',
        address: { city: 'Tallinn' },
        photo: 'https://picsum.photos/id/1011/60',
      },
      {
        id: 3,
        name: 'b',
        tel: null,
        address: { city: 'New Delhi' },
        photo: 'https://picsum.photos/id/1012/60',
      },
      {
        id: 4,
        name: 'c',
        tel: '25539231',
        address: { city: 'New Delhi' },
        photo: 'https://picsum.photos/id/1013/60',
      },
      {
        id: 5,
        name: 'd',
        tel: '15539231',
        address: { city: 'New Delhi' },
        photo: 'https://picsum.photos/id/1014/60',
      },
    ],
  }

  customerNameStyle = (custName) => {
    if (custName.startsWith('S')) return 'green-highlight border-left'
    else if (custName.startsWith('M')) return 'red-highlight border-right'
    else {
      return ''
    }
  }

  render() {
    return (
      <>
        <h4 className='m-1 p-1'>
          {this.state.pageTitle}
          <span className='badge badge-secondary m-2'>
            {this.state.customersCount}
          </span>
          <button className='btn btn-info' onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h4>

        <table className='table'>
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </>
    )
  }

  onRefreshClick = () => {
    this.setState({ customersCount: 7 })
  }

  getPhoneToRender = (tel) => {
    if (tel) return tel
    else {
      return <div className='bg-warning p-2 text-center'>No Phone</div>
    }
  }

  onChangePictureClick = (customer, index) => {
    // console.log(customer)
    // console.log(index)

    var custArr = this.state.customers
    custArr[index].photo = 'https://picsum.photos/id/1015/60'
    this.setState({ customers: custArr })
  }

  getCustomerRow = () => {
    {
      return this.state.customers.map((customer, index) => {
        return (
          <tr key={customer.id}>
            <td>{customer.id}</td>
            <td>
              <img src={customer.photo} alt='Customer photo' />
              <div>
                <button
                  className='btn btn-sm btn-secondary'
                  onClick={() => {
                    this.onChangePictureClick(customer, index)
                  }}
                >
                  Change picture
                </button>
              </div>
            </td>
            <td>{customer.name}</td>
            <td>{this.getPhoneToRender(customer.tel)}</td>
            <td>{customer.address.city}</td>
          </tr>
        )
      })
    }
  }
}

export default CustomersList
