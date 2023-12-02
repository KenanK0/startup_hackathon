import { Link } from "react-router-dom";
import "./App.css";
import Logo from "./assets/CleanIT_Logo-nobg.png";
import { useMediaQuery } from "@mui/material";

function App() {
  const isMobile = useMediaQuery("(max-width:600px)");

  if (isMobile) {
    return (
      <h1>
        Did not have time to make this responsive, use a laptop, thanx. Kenan K
      </h1>
    );
  }
  return (
    <div className="main">
      <br></br>
      <br></br>
      <section className="container">
        <form className="welcome">
          <div className="image-container">
            <img src={Logo} className="logo" width="250" height="250" />
          </div>
          <h1 className="heading">Welcome to CleanIT </h1>
          <p className="intro">
            Transforming waste management through image recognition and AI.
            <br />
            Snap, learn, and recycle with ease, making a sustainable impact
            effortlessly
          </p>
          <br></br>
          <div className="getstarted">
            <Link to="/home" style={{ color: "white" }}>
              Get Started
            </Link>
          </div>

          <br></br>
          <br></br>
        </form>
      </section>
    </div>
  );
}

export default App;
