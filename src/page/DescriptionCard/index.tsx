import { useEffect, useState } from "react";
import {
    Container,
    ContainerDelivery,
    ContainerDescription,
    ContainerLoading,
    ContainerWrapper,
} from "./styles";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { HiMinus } from "react-icons/hi";
import { BiBadgeCheck, BiPlus } from "react-icons/bi";
import {
    TbShoppingBag,
    TbShoppingCartPlus,
    TbTruckDelivery,
} from "react-icons/tb";
import { useNavigate, useParams } from "react-router-dom";
import { AiOutlineLoading } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";

interface Attribute {
    value_name: string;
    id: string;
}

type IDetailProduct = {
    title: string;
    id: string;
    price: number;
    thumbnail: string;
    pictures: [{ url: string }];
    attributes: Attribute[];
};

type IDescription = {
    plain_text: string;
};

export const DescriptionCard = () => {
    const navigate = useNavigate();
    const [detail, setDetail] = useState<IDetailProduct>();
    const [qnt, setQnt] = useState(0);
    const idParams = useParams();
    const [description, setDescription] = useState<IDescription>();
    const [loading, setLoading] = useState(false);

    const stringReal = detail?.price.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    });

    const getApiProductDetail = async () => {
        setLoading(true);
        try {
            const resultDetail = await fetch(
                `https://api.mercadolibre.com/items/${idParams.id}`
            );
            const dataDetail = await resultDetail.json();
            setDetail(dataDetail);

            const resultDescription = await fetch(
                `https://api.mercadolibre.com/items/${idParams.id}/description`
            );

            const dataDescription = await resultDescription.json();
            setDescription(dataDescription);
        } catch {
            setLoading(false);
        }
        setLoading(false);
    };

    useEffect(() => {
        getApiProductDetail();
    }, []);

    const title = detail?.attributes.map((attribute) => {
        if (attribute.id === "MODEL") {
            return attribute.value_name;
        }
    });

    return (
        <Container>
            <div
                className="backPage"
                onClick={() => navigate("/shopping-card")}
            >
                <IoMdArrowRoundBack />
                <span>Voltar</span>
            </div>
            {loading ? (
                <ContainerLoading>
                    <AiOutlineLoading />
                </ContainerLoading>
            ) : (
                <ContainerWrapper>
                    <Carousel className="containerCarousel">
                        {detail?.pictures.map((picture, index) => {
                            const bgLargeImg = picture.url.replace(
                                /\w\.jpg/gi,
                                "W.jpg"
                            );

                            return (
                                <div className="yours-custom-class" key={index}>
                                    <img src={bgLargeImg} />
                                </div>
                            );
                        })}
                    </Carousel>
                    <ContainerDescription>
                        <div className="description">
                            <span className="title">{title}</span>
                            <span className="textDescription">
                                {description?.plain_text}
                            </span>
                            <div className="line" />
                            <span className="price">{stringReal}</span>
                        </div>
                        <div className="qnt">
                            <div onClick={() => setQnt(qnt - 1)}>
                                <HiMinus />
                            </div>
                            <span>{qnt}</span>
                            <div onClick={() => setQnt(qnt + 1)}>
                                <BiPlus />
                            </div>
                        </div>
                        <div className="addCart">
                            <button type="button">
                                <TbShoppingBag />
                                Comprar agora
                            </button>
                            <button type="button">
                                <TbShoppingCartPlus />
                                Adicionar ao carrinho
                            </button>
                        </div>
                        <div className="line" />
                        <ContainerDelivery>
                            <div>
                                <TbTruckDelivery />
                                <span>Frete grátis</span>
                            </div>
                            <div className="line" />
                            <div>
                                <BiBadgeCheck />
                                <span>12 meses de garantia de fábrica.</span>
                            </div>
                        </ContainerDelivery>
                    </ContainerDescription>
                </ContainerWrapper>
            )}
        </Container>
    );
};
