import React, { useContext, useState } from "react";
import { Container, ContainerNoLike } from "./styles";
import { ProductsContext } from "../../context";
import { CardComponent } from "../../components/Main/Card";
import { ContainerCard } from "../../components/Main/styles";
import { Heart } from "../../assets/heart";

export const Favorites = () => {
    const { products } = useContext(ProductsContext);

    const noLike = products.some((product) => product.like);

    return (
        <Container>
            <div className="title">
                <h1>Favoritos</h1>
            </div>

            {!noLike && (
                <ContainerNoLike>
                    <Heart />
                    <h2>Você ainda não tem favoritos.</h2>
                    <h4>Volte a página inicial para adicionar</h4>
                </ContainerNoLike>
            )}
            <ContainerCard>
                {products.map((product, index) => {
                    if (product.like) {
                        return (
                            <CardComponent
                                product={product}
                                index={index}
                                key={index}
                            />
                        );
                    }
                })}
            </ContainerCard>
        </Container>
    );
};
