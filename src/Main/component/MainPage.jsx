import Header from "../../header/component/Header";
import { useNavigate } from "react-router-dom";

const MainPage = function () {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <button
        onClick={() => {
          navigate(`/`);
        }}
      >
        dw
      </button>
    </>
  );
};

export default MainPage;
