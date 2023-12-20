import { useParams } from "react-router-dom"
import './About.css';


const About = ({Data}) => {
    const {aboutId} = useParams();
    const data = Data.find(data => data.id === parseInt(aboutId))
    
  return (
    <div className="about">
     <div className="right">
     <img src={data.image}></img>
     </div>
      <div className="left">
      <h4>{data.title}</h4>
      <p>{data.description}</p>
      </div>
    </div>
  )
}

export default About
