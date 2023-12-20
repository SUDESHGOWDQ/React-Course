import './Navbar.css'
function Navbar(){
    return(
        <div className="Navbar">
            <nav className='navbar'>
                <article className='navart'>
                    <section className='navsec1'>
                        <h1>SD</h1>
                    </section>
                    <section className='navsec2'>
                        <div className='navsecdiv'>Home</div>
                        <div className='navsecdiv'>About</div>
                        <div className='navsecdiv'>Projects</div>
                        <div className='navsecdiv'>Contact</div>
                    </section>
                    <section className='navsec3'>
                        <div className='navicon'><i className="fa-brands fa-facebook"></i></div>
                        <div className='navicon'><a href='https://in.linkedin.com/in/sudesh-gowda-md-sudesh-12432a159'><i className="fa-brands fa-linkedin"></i></a></div>
                        <div className='navicon'><i className="fa-brands fa-twitter"></i></div>
                    </section>
                </article>
            </nav>
        </div>
    )
}
export default Navbar