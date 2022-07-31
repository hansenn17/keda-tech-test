function Navbar() {
    const btn = {
        backgroundColor: "rgba(0,0,0,0)",
        color: '#0d6efd'
    }

    return (
        <header className="header">
            <nav className="navbar navbar-expand-lg bg-transparent">
            <div className="container-fluid" style={{padding: '20px'}}>
                <a className="navbar-brand" href="#" style={{zIndex: '2'}}>
                    <h3 className="text-light"><img src={require("../assets/brand-image.png")} alt="" width="50" height="50" className='pe-1' /> HOME</h3>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav px-5">
                    <h3><a className="nav-link text-dark" href="#">ABOUT</a></h3>
                    <h3><a className="nav-link text-dark" href="#">PRICING</a></h3>
                    <h3><a className="nav-link text-dark" href="#">CONTACT</a></h3>
                    <h5 className=''><a className="nav-link btn btn-primary shadow-none px-5" href="#" style={btn}>LOGIN</a></h5>
                </div>
                </div>
            </div>
            </nav>
        </header>
    );
}

export default Navbar;