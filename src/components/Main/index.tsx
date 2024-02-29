import {
    Container,
    ContainerCard,
    ContainerEmptyState,
    ContainerLoading,
    ContainerSearch,
} from "./styles";
import { CardComponent } from "./Card";
import { AiOutlineLoading } from "react-icons/ai";
import { IProducts } from "../../context";
import { CgSearch } from "react-icons/cg";
import { useState } from "react";
import emptyBox from "../../assets/empty-box.svg";

type Props = {
    products: IProducts[];
    isLoading: boolean;
};

export const Main = ({ products, isLoading }: Props) => {
    const [filter, setFilter] = useState(false);
    const [items, setItems] = useState<IProducts[]>(products);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.currentTarget.value === "") {
            setItems(products);
        }

        const apiSearch = products.filter((item) => {
            const titleLower = item.title.toLowerCase();
            return titleLower.includes(event.currentTarget.value);
        });

        setItems(apiSearch);
        setFilter(true);
    };

    return (
        <Container>
            <ContainerSearch>
                <CgSearch />
                <input
                    type="text"
                    placeholder="Pesquisar..."
                    onChange={handleChange}
                />
            </ContainerSearch>
            {isLoading ? (
                <ContainerLoading>
                    <AiOutlineLoading />
                </ContainerLoading>
            ) : (
                <>
                    <span className="qnt">{items.length} Items</span>
                    {items.length <= 0 && filter ? (
                        <ContainerEmptyState>
                            <img src={emptyBox} />
                            <span>A sua pesquisa não teve resultado!</span>
                            <p>Pesquise novamente</p>
                        </ContainerEmptyState>
                    ) : (
                        <ContainerCard>
                            {items.map((item, index) => (
                                <CardComponent
                                    product={item}
                                    index={index}
                                    key={index}
                                />
                            ))}
                        </ContainerCard>
                    )}
                </>
            )}
        </Container>
    );
};
