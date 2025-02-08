import { createContext, ReactNode, useContext, useState } from "react";

export const StateContext = createContext<any>(null); 

type StateProviderProps = {
    children: ReactNode;
  };

interface productCartProps {
    name: string,
    photo: string,
    id: number,
    price?: number,   
    quantidade?: number 
}

export function StateProvider({children}: StateProviderProps){
    const [productsCart, setProductsCart] = useState<productCartProps[] | undefined>([]);

    return (
        <StateContext.Provider value={{productsCart, setProductsCart}}>
            {children}
        </StateContext.Provider>
    )
}

// Hook para facilitar o uso do contexto
export const useStateContext = () => useContext(StateContext);