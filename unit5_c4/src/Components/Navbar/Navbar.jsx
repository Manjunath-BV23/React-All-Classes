import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{
      display: "flex",
    }}>
      <div className="navbar" style={{
        backgroundColor:"green",
        width: "100%",
        height: "30px",
        justifyContent: "space-around",
        display: "flex"
      }}>
        <Link className="navbarHome" to={"/"}>
          Home
        </Link>
        <Link className="navbarLoginSignUp" to={"/loginsignup"}>
          Login/Sign Up
        </Link>
        <Link className="navbarLoginSignUp" to={"/meetup"}>
          Event
        </Link>
        <Link className="navbarLoginSignUp" to={"/addmeetup"}>
          AddMeetup
        </Link>
        
      </div>
    </nav>
  );
};
