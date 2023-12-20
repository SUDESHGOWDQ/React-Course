import './sass.scss'

const Sass = () => {
  return (
    <div className='main-div'>
        <section className='main-sec'>
            <h1>Login Form</h1>
            <label>Name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type='text'></input>
            <label>Password</label>
            <input type='password'></input>
            <button>Submit</button>
        </section>
    </div>
  )
}

export default Sass