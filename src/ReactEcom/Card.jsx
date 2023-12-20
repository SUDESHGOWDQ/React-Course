import { useState } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
const Card = ({item,handleClick}) => {


  const[open,setOpen]=useState(false)
  const{title,image,description,rating,id}=item



  return (
    <div className="carddiv">
    <Link to={`/about/${id}`}><img src={image} height={'200px'} width={'200px'}></img></Link>
    <h4>{title}</h4>
    <p>{rating.rate}</p>
    <button onClick={()=>handleClick(item)}>Add Cart</button>
    <button onClick={()=>setOpen(!open)}>Read More</button>
    {open && (
      <div>
        <p>{description}</p>
        <button onClick={()=>setOpen(!open)}>Close</button>
      </div>
    )}
    </div>
  )
}

export default Card
