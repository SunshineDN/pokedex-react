/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { ReactComponent as Pokeballsvg } from '../../assets/pokeball.svg'

import { LoaderContainer } from '.';
import './index.css'

const Loader = ({ position }) => {
  return (
    <LoaderContainer position={position}>
      <Pokeballsvg />
    </LoaderContainer>
  );
};

export default Loader;
