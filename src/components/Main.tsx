import React, {useContext} from 'react'
import { AddressContext } from '../context/AddressContext';

import Header from "./Header";


function Main() {
   const useAppContext = useContext(AddressContext);

  return (
    <>
      <Header />
    </>
  )
}

export default Main