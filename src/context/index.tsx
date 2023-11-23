import { createContext, useEffect, useState } from "react";

type ISubTotal = {
    id: number | string;
    numberQuantity: number;
};

export type IProducts = {
    title: string;
    price: number;
    thumbnail: string;
    id: string;
    quantity: number;
    like: boolean;
};

type INITIAL_STATE = {
    setShoppingCart: React.Dispatch<React.SetStateAction<IProducts[]>>;
    shoppingCart: IProducts[];
    products: IProducts[];
    setProducts: React.Dispatch<React.SetStateAction<IProducts[]>>;
    setSubTotal: React.Dispatch<React.SetStateAction<ISubTotal[]>>;
    subTotal: ISubTotal[];
};

export const ProductsContext = createContext<INITIAL_STATE>(
    {} as INITIAL_STATE
);

export const ProductsContextProvider = ({ children }: any) => {
    const initialProducts = JSON.parse(
        localStorage.getItem("products") || "[]"
    );
    const initialShoppingCart = JSON.parse(
        localStorage.getItem("cart") || "[]"
    );
    const [products, setProducts] = useState<IProducts[]>(initialProducts);
    const [subTotal, setSubTotal] = useState<ISubTotal[]>([]);
    const [shoppingCart, setShoppingCart] =
        useState<IProducts[]>(initialShoppingCart);

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    useEffect(() => {
        localStorage.setItem("ShoppingCart", JSON.stringify(shoppingCart));
    }, [shoppingCart]);

    return (
        <ProductsContext.Provider
            value={{
                setShoppingCart,
                shoppingCart,
                setSubTotal,
                subTotal,
                products,
                setProducts,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
};
