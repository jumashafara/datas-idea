import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
        <div className = "row bg-dark p-5 mt-5 text-center">
            <div className="col-md-6">
            <Link className="dropdown-item text-light" to="/">Home</Link>
            <Link className="dropdown-item text-light" to="/about">About</Link>
            <Link className="dropdown-item text-light" to="/contact">Contact</Link>
            <Link className="dropdown-item text-light" to="/login">Write article</Link>
            </div>
            <div className="col-md-6 text-light">
            <h1 className="navbar-nav navbar-item text-light heading font-size-larger pl-3 pr-3"><span className = "font-weight-light">Data's</span><span className = "italic font-weight-bold">Idea</span>
</h1>
               <p>All rights reserved Data's Idea 2021</p>  
            </div>
        </div>
        <p className = "text-center p-2">Designed by Kibekityo Juma Shafara 2021</p>
        <p className = "bg-warning text-center">This website is still under production</p>
        </div>
    )
}

export default Footer

