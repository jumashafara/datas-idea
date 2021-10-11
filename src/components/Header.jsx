import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className = "container mb-0">
        <nav className = " navbar navbar-dark bg-dark navbar-expand-lg rounded-0 ">
            <h1 className=" text-light heading font-size-larger pl-3 pr-3"><span className = "font-weight-light">Data's</span><span className = "italic font-weight-bold">Idea</span>
            <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-lightning-fill light text-warning" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"/>
</svg>
</h1>
<div className="dropdown navbar-item navbar-nav ml-auto expand-md">
  <button className="btn btn-secondary dropdown-toggle bg-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-list x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg> 
  </button>
  <div className="dropdown-menu bg-dark " aria-labelledby="dropdownMenuButton">
  <Link className="dropdown-item text-light" to="/">Home</Link>
    <Link className="dropdown-item text-light" to="/about">About</Link>
    <Link className="dropdown-item text-light" to="/contact">Contact</Link>
    <Link className="dropdown-item text-light" to="/login">Write article</Link>
  </div>
</div>
        </nav>
        </div>
    )
}


export default Header
