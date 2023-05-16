import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h2>
        Debloated React/Typescript BoilerPlate with router dom and simple folder
        structure
      </h2>
      <p>
        You can also navigate to a second page by clicking{" "}
        <Link to="/second-page">here </Link>
        or typing "http://localhost:3000/second-page" on your browser
      </p>
    </div>
  );
};
