import { useContext } from "react";
import { TbTrash } from "react-icons/tb";
import { HiMinus } from "react-icons/hi";
import { BiPlus } from "react-icons/bi";
import { IProducts, ProductsContext } from "../../../context";

type Props = {
    product: IProducts;
    index: number;
};

export const Product = ({ product, index }: Props) => {
    const { shoppingCart, setShoppingCart, setSubTotal, subTotal } =
        useContext(ProductsContext);
    let sumPrice = 0;

    if (product.quantity > 1) {
        sumPrice = product.price * product.quantity;
    } else {
        sumPrice = product.price;
    }

    const formatPrice = (price: string | number) => {
        return price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        });
    };

    const handleRemoveProduct = () => {
        const cardFiltered = shoppingCart.filter(
            (cart) => cart.id != product.id
        );

        setShoppingCart(cardFiltered);
    };

    const handleDecreaseOrIncreaseItem = (action: string) => {
        const listProduct = [...shoppingCart];

        if (action === "decrease") {
            listProduct[index].quantity -= 1;
        } else {
            listProduct[index].quantity += 1;
        }

        if (listProduct[index].quantity === 0) {
            const cardRemove = listProduct.filter(
                (item) => item.id != product.id
            );

            setShoppingCart(cardRemove);
        } else {
            setShoppingCart([...listProduct]);
        }
    };

    return (
        <div className="cardProduct">
            <div className="remove" onClick={handleRemoveProduct}>
                <TbTrash />
            </div>
            <div className="divImg">
                <img src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")} />
            </div>
            <div className="description">
                <span>{product.title}</span>

                <span className="price">{formatPrice(sumPrice)}</span>
                <div className="qnt">
                    <div
                        onClick={() => handleDecreaseOrIncreaseItem("decrease")}
                    >
                        <HiMinus />
                    </div>
                    <span>{product.quantity}</span>
                    <div
                        onClick={() => handleDecreaseOrIncreaseItem("increase")}
                    >
                        <BiPlus />
                    </div>
                </div>
            </div>
        </div>
    );
};
