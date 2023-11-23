import React, { useContext, useEffect, useState } from "react";
import { Main } from "../../components/Main";
import { IProducts, ProductsContext } from "../../context";

export const Home = () => {
    const { products, setProducts } = useContext(ProductsContext);
    const [isLoading, setIsLoading] = useState(false);
    const initialProducts = JSON.parse(
        localStorage.getItem("products") || "[]"
    );

    const getApiProducts = () => {
        setIsLoading(true);

        if (initialProducts.length !== 0) {
            setProducts(initialProducts);
            setIsLoading(false);
            return;
        }

        const apiUrl = "https://api.mercadolibre.com/sites/MLB/search?q=iphone";
        const searchUrl = `${apiUrl}`;

        fetch(searchUrl)
            .then(async (res) => {
                const data = await res.json();
                const allItems = data.results;

                const newArray = allItems.map((data: IProducts) => {
                    const { title, price, thumbnail, id } = data;
                    const objectItem = {
                        title: title,
                        price: price,
                        thumbnail: thumbnail,
                        id: id,
                        quantity: 0,
                        like: false,
                    };

                    return objectItem;
                });

                setProducts(newArray);
            })
            .finally(() => setIsLoading(false));
    };

    useEffect(() => {
        getApiProducts();
    }, []);

    return <Main isLoading={isLoading} products={products} />;
};
