import { Link } from "react-router-dom";
import './App.css';

export const Navbar = () => {
  return (
    <nav className=" onenav">
      <div className="container mx-auto flex justify-between items-center ">
       
        
        <div className="classnav ">
          <Link to="/" className="hover:text-gray-300 , navff">
            Home
          </Link>
          <Link to="/Login" className="hover:text-gray-300 , navff">
            Login
          </Link>
          <Link to="/Resource" className="hover:text-gray-300, navff">
            Resource
          </Link>
          <Link to="/Review" className="hover:text-gray-300, navff">
            Review
          </Link>
          <Link to="/Appointment" className="hover:text-gray-300, navff">
            Appointment
          </Link>
        </div>
        <div className="navsecond">
            
        </div>
        
      </div>
      
    </nav>
  );
};
