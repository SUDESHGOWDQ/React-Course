import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Card from "./Card";
import Data from './Data'
import './Card.css'


const Home = ({search,handleClick}) => {
  return (
    <div>
    <Carousel>
     {Data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
               return(
                <header key={item.id} style={{height:'600px'}}>
                <div>
                    <img src={item.image} />
                    <p className="legend">
                        <h1>{item.title}</h1>
                        <p>{item.description}</p>
                        <p>{item.rating.rate}🌟</p>
                        <button onClick={()=>handleClick(item)}>Add Cart</button>
                    </p>
                </div>
                </header>
               )
     })}
     </Carousel>

     <div className="card"  >
     {Data.filter((item)=>item.category.toLocaleLowerCase().includes(search)).map((item)=>{
               return(
                  <Card handleClick={handleClick}  key={item.id} item={item}  /> 
               )})}
               </div> 
    </div>
  )
}

export default Home
