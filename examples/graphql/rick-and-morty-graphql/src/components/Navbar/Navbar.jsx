import { Link } from "react-router-dom";

import "./styles.css";

const Navbar = () => {
  return(
    <header id="nav-wrapper">
      <nav id="nav">
        <div className="nav left">
          <span className="gradient skew">
            <h1 className="logo un-skew"><a href="#home">Logo Here</a></h1>
          </span>
        </div>
        <div className="nav right">
          <Link to="/" className="nav-link active">
            <span className="nav-link-span">
              <span className="u-nav">Home</span>
            </span>
          </Link>
          <Link to="/locations" className="nav-link">
            <span className="nav-link-span">
              <span className="u-nav">Locations</span>
            </span>
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
