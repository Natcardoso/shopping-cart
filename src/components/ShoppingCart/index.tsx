import React, { useContext, useState } from "react";
import { Container, Content, EmptyBox, Footer, Main } from "./styles";
import { IoClose } from "react-icons/io5";
import { ProductsContext } from "../../context";
import { Product } from "./Product";
import emptyBox from "../../assets/empty-box.svg";
import { useNavigate } from "react-router-dom";

type Props = {
    isOpen: boolean;
    isClose: () => void;
    openModalCompletePay: () => void;
};

export const ShoppingCart = ({
    isOpen,
    isClose,
    openModalCompletePay,
}: Props) => {
    const { shoppingCart } = useContext(ProductsContext);

    const navigate = useNavigate();

    const sumPrice = shoppingCart.map((cart) => {
        let sum: number;
        if (cart.quantity > 1) {
            sum = cart.price * cart.quantity;
        } else {
            sum = cart.price;
        }

        return sum;
    });

    const totalPrice = sumPrice.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );

    const handleGoToPage = () => {
        isClose();
        navigate("/");
    };

    const handleCompletedPurchase = () => {
        isClose();
        openModalCompletePay();
    };

    if (!isOpen) return null;

    return (
        <Container>
            <Content>
                <header>
                    <IoClose onClick={isClose} />
                    <span>Carrinho</span>
                </header>
                <Main empty={shoppingCart.length == 0}>
                    {shoppingCart.length > 0 ? (
                        shoppingCart.map((product, index) => {
                            return (
                                <Product
                                    product={product}
                                    key={index}
                                    index={index}
                                />
                            );
                        })
                    ) : (
                        <EmptyBox>
                            <img src={emptyBox} />
                            <span className="title">
                                Este carrinho está vazio!
                            </span>
                            <span className="subTitle">
                                Acesse a
                                <strong onClick={handleGoToPage}>
                                    {" "}
                                    página de produtos{" "}
                                </strong>
                                e adicione os itens desejados
                            </span>
                        </EmptyBox>
                    )}
                </Main>
                <Footer empty={shoppingCart.length == 0}>
                    <div>
                        <span>Total:</span>
                        <span>
                            {totalPrice.toLocaleString("pt-br", {
                                style: "currency",
                                currency: "BRL",
                            })}
                        </span>
                    </div>
                    <button
                        type="button"
                        disabled={shoppingCart.length == 0}
                        onClick={handleCompletedPurchase}
                    >
                        Finalizar compra
                    </button>
                </Footer>
            </Content>
        </Container>
    );
};
