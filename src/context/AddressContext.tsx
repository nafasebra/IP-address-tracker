import {createContext, useState} from 'react'


type PropType = {
    children: JSX.Element[] | JSX.Element;
}

type StateModalType = {
    address: any;
    setAddress: (address: any) => void;
}

export const AddressContext = createContext<StateModalType>({
    address: 0,
    setAddress: () => {}
});

export const AddressProvider = ({children}: PropType) => {
    const [address, setAddress] = useState(0);

    return (
        <AddressContext.Provider value={{address, setAddress}}>
            {children}
        </AddressContext.Provider>
    )
}