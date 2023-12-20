import GooglePayButton from '@google-pay/button-react'
import { useEffect, useState } from 'react'
import './Cart.css'


const Cart = ({cart,setCart}) => {

  const[price,setPrice]=useState(0)



  function handleRemove(id){
    const del = cart.filter((i)=>id!==i.id)
    setCart(del)
  }


  function handlePrice(){
    let ans= 0
    cart.map((item)=> ans+=item.price*item.amount)
    setPrice(ans)
  }


  useEffect(()=>{
    handlePrice()
  },[cart])


  function handleAdd(id){
    const newData=cart.map((item)=>{
      if(item.id==id){
        return {...item,amount:item.amount+1};
      }
      return item;
    })

    setCart(newData);
  }


  function handleSub(id){
    const newData=cart.map((item)=>{
      if(item.id==id){
        return {...item,amount:item.amount-1};
      }
      return item;
    })
    setCart(newData)
  }



  return (
    <div className="cart">
    <table border={1} rules="none">
      <thead>
        <tr>
          <td><b>Image</b></td>
          <td><b>Name</b></td>
          <td><b>Incre</b></td>
          <td><b>Qty</b></td>
          <td><b>Decre</b></td>
          <td><b>Total Price</b></td>
          <td><b>Remove</b></td>
        </tr>
      </thead>
      <tbody>
         {cart.length>0 && cart.map((item)=>{
          return(
            <tr key={item.id}>
            <td><img height={'50px'} width={'50px'} src={item.image}></img></td>
            <td>{item.title}</td>
            <td><button onClick={()=>handleAdd(item.id)}>+</button></td>
            <td>{item.amount>=1?item.amount:0}</td>
            <td><button onClick={()=>handleSub(item.id)}>-</button></td>
            <td>{item.price*item.amount>0?item.price*item.amount:0}Rs</td>
            <td><button onClick={()=>handleRemove(item.id)}>Remove</button></td>
            </tr>
          )
         })}
      </tbody>
      <tfoot>
        <tr>
          <td>Total Amount</td>
          <td colSpan={5}>{price>0?price:0}</td>
          <td><button>
          <GooglePayButton
  environment="TEST"
  paymentRequest={{
    apiVersion: 2,
    apiVersionMinor: 0,
    allowedPaymentMethods: [
      {
        type: 'CARD',
        parameters: {
          allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
          allowedCardNetworks: ['MASTERCARD', 'VISA'],
        },
        tokenizationSpecification: {
          type: 'PAYMENT_GATEWAY',
          parameters: {
            gateway: 'example',
            gatewayMerchantId: 'exampleGatewayMerchantId',
          },
        },
      },
    ],
    merchantInfo: {
      merchantId: '12345678901234567890',
      merchantName: 'Demo Merchant',
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPriceLabel: 'Total',
      totalPrice: '100.00',
      currencyCode: 'USD',
      countryCode: 'US',
    },
  }}
  onLoadPaymentData={paymentRequest => {
    console.log('load payment data', paymentRequest);
  }}
/>
          </button></td>
        </tr>
      </tfoot>
    </table>
    </div>
  )
}

export default Cart
