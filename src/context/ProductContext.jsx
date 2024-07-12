import { createContext, useState } from "react";

export const ProductContex = createContext();

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState ([]);

    return(
        <ProductContex.Provider value = {{
            products, 
            setProducts
        }}>
            {children}
        </ProductContex.Provider>
    )
};

