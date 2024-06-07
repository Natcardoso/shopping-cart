import { useContext } from "react";
import { Heart } from "../../../assets/heart";
import { Like, Card } from "../styles";
import { useNavigate } from "react-router-dom";
import { TbShoppingCartPlus } from "react-icons/tb";
import { IProducts, ProductsContext } from "../../../context";

type Props = {
    product: IProducts;
    index: number;
};

export const CardComponent = ({ product, index }: Props) => {
    const { setShoppingCart, shoppingCart, products, setProducts } =
        useContext(ProductsContext);
    const navigate = useNavigate();
    const stringReal = product.price.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });

    const handleClick = () => {
        navigate(`/${product.id}`);
    };

    const handleAddCart = () => {
        const itemExisting = shoppingCart.findIndex(
            (item) => item.id === product.id
        );

        if (itemExisting >= 0) {
            const updatedCart = [...shoppingCart];
            updatedCart[itemExisting].quantity += 1;
            setShoppingCart(updatedCart);
        } else {
            setShoppingCart([...shoppingCart, { ...product, quantity: 1 }]);
        }
    };

    const handleClickLike = () => {
        const isLiked = product.like;
        const updatedProduct = { ...product, like: !isLiked };

        const updatedCart = [...products];
        updatedCart[index] = updatedProduct;

        setProducts(updatedCart);
    };

    return (
        <Card>
            <Like
                style={{ color: product.like ? "#000" : "#b6b6b6" }}
                onClick={handleClickLike}
            >
                <Heart />
            </Like>
            <div onClick={handleClick}>
                <div className="divImg">
                    <img
                        src={product.thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                    />
                </div>
                <div className="description">
                    <span>{stringReal}</span>
                    <span>{product.title}</span>
                </div>
            </div>
            <div className="addCart" onClick={handleAddCart}>
                <button type="button">
                    <TbShoppingCartPlus />
                    Adicionar ao carrinho
                </button>
            </div>
        </Card>
    );
};
