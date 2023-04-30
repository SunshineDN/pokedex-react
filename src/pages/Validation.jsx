/* eslint-disable react/prop-types */
import { useEffect } from "react";
import Loader from "../components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import { LoaderContainer } from "../components/Loader";

const Validation = ({ isLogged }) => {

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isLogged) {
        navigate('/login');
      } else {
        navigate('/');
      }
    }, 1900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {!isLogged && (
        <LoaderContainer>
          <Loader position={'absolute'} />  
        </LoaderContainer>
      )}
    </div>
  )
}

export default Validation