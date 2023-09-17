import React from "react";
import { Link } from "react-router-dom";
function Navbaar(){
    return(
        <div className="navbar">
        <Link to ='/about' className="links">About us</Link>
        <Link to='/hospitalinformation' className="links">Hospital Information</Link>
        <Link to='/department' className="links">Department</Link>
        <Link to='/ebooks' className="links">E-Books</Link>
        <Link to='/cafemenu' className="links">Cafe Menu</Link>
        <Link to='/supervisorsdutylist' className="links">Supervisors duty list</Link>
        <Link to='/nabh' className="links">NABH</Link>
        <Link to='/photogallery' className="links">Photo Gallery</Link>
        </div>
    )
}
export default Navbaar