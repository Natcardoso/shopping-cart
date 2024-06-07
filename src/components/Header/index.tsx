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
    const { shoppingCart } = useContext(ProductsContext);
    const [openCart, setOpenCart] = useState(false);
    const [openModalCompletePay, setOpenModalCompletedPay] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <Container>
                <div className="divLogo" onClick={() => navigate("/")}>
                    <BsShop />
                    <div>Shopcart</div>
                </div>

                <ContainerSvg>
                    <FaRegHeart onClick={() => navigate("/favoritos")} />
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
