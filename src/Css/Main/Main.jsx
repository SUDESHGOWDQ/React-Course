import './Main.css'
const Main = () => {
    function printi(){
        window.print()
    }
  return (
    <div className="Main">
    <div className="Maindiv">
        <center><h1>ABOUT ME</h1></center>
        <p>Meeting with the development team to discuss user interface ideas and applications.
        <br></br>
          Reviewing application requirements and interface designs.
          <br></br>
          Identifying web-based user interactions.
          <br></br>
          Developing and implementing highly responsive user interface components using react concepts.
          <br></br>
          Writing application interface codes using JavaScript following react.js workflows.
          <br></br>
          Troubleshooting interface software and debugging application codes.
          <br></br>
          Developing and implementing front-end architecture to support user interface concepts.
          <br></br>
          Monitoring and improving front-end performance.
          <br></br>
          Documenting application changes and developing updates.
          <br></br>
         Knowledge of Firebase ,Fire-store and Email.js</p>
         <button onClick={printi}>Download Resume</button>
    </div>
   
    </div>
  )
}

export default Main