import { useNavigate } from "react-router-dom";

export const SecondPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      <p>Navigatable Second page</p>
      <button onClick={handleClick}>Return to HomePage (via button)</button>
    </div>
  );
};
