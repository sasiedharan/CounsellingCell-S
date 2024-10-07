import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-semibold">
          Counselling Cell
        </div>
        <div className="space-x-6">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link to="/Login" className="hover:text-gray-300">
            Login
          </Link>
          <Link to="/Resource" className="hover:text-gray-300">
            Resource
          </Link>
          <Link to="/Review" className="hover:text-gray-300">
            Review
          </Link>
          <Link to="/Appointment" className="hover:text-gray-300">
            Appointment
          </Link>
        </div>
      </div>
    </nav>
  );
};
