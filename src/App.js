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
      <section class="container">
        <form class="welcome">
          <div class="image-container">
            <img src={Logo} class="logo" alt="Logo" />
          </div>
          <h1 class="heading">Welcome to CleanIT</h1>
          <br></br>
          <p class="intro">
            Transforming waste management through image recognition and AI.
            <br />
            Snap, learn, and recycle with ease, making a sustainable impact
            effortlessly
          </p>
          <br></br>
          <Link to="/home">
            <button class="getstarted">Get Started</button>
          </Link>
        </form>
      </section>
    </div>
  );
}

export default App;
