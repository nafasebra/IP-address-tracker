import React, {useContext} from 'react'
import { AddressContext } from '../context/AddressContext';

import Header from "./Header";
import MapSection from "./MarkerLocation";


function Main() {
   const useAppContext = useContext(AddressContext);

  return (
    <>
      <Header />
      {/* <MapSection address={useAppContext.address} /> */}
    </>
  )
}

export default Main