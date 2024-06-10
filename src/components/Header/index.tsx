import { useContext, useState } from "react";
import { Container, ContainerSvg } from "./styles";
import { TbShoppingCart } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { BsShop } from "react-icons/bs";
import { ShoppingCart } from "../ShoppingCart";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../../context";
import { ModalCompletePay } from "../ModalCompletePay";

export const Header = () => {
    const { shoppingCart, products } = useContext(ProductsContext);
    const [openCart, setOpenCart] = useState(false);
    const [openModalCompletePay, setOpenModalCompletedPay] = useState(false);
    const navigate = useNavigate();
    const qntLike = products.reduce(
        (count, product) => count + (product.like ? 1 : 0),
        0
    );

    return (
        <>
            <Container>
                <div
                    className="divLogo"
                    onClick={() => navigate("/shopping-cart")}
                >
                    <BsShop />
                    <div>Shopcart</div>
                </div>

                <ContainerSvg>
                    <div
                        className="cart"
                        onClick={() => navigate("/favoritos")}
                    >
                        <div className="qntProducts">
                            <span>{qntLike}</span>
                        </div>
                        <FaRegHeart />
                    </div>

                    <div className="cart" onClick={() => setOpenCart(true)}>
                        <div className="qntProducts">
                            <span>{shoppingCart.length}</span>
                        </div>
                        <TbShoppingCart />
                    </div>
                </ContainerSvg>
                <ShoppingCart
                    openModalCompletePay={() => setOpenModalCompletedPay(true)}
                    isOpen={openCart}
                    isClose={() => setOpenCart(false)}
                />
            </Container>
            {openModalCompletePay && (
                <ModalCompletePay
                    isClose={() => setOpenModalCompletedPay(false)}
                />
            )}
        </>
    );
};
