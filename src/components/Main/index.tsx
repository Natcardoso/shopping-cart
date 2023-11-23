import {
    Container,
    ContainerCard,
    ContainerLoading,
    ContainerSearch,
} from "./styles";
import { CardComponent } from "./Card";
import { AiOutlineLoading } from "react-icons/ai";
import { IProducts } from "../../context";
import { CgSearch } from "react-icons/cg";

type Props = {
    products: IProducts[];
    isLoading: boolean;
};

export const Main = ({ products, isLoading }: Props) => {
    return (
        <Container>
            <ContainerSearch>
                <CgSearch />
                <input type="text" placeholder="Pesquisar..." />
            </ContainerSearch>
            {isLoading ? (
                <ContainerLoading>
                    <AiOutlineLoading />
                </ContainerLoading>
            ) : (
                <>
                    <span className="qnt">{products.length} Items</span>
                    <ContainerCard>
                        {products.map((product, index) => (
                            <CardComponent
                                product={product}
                                index={index}
                                key={index}
                            />
                        ))}
                    </ContainerCard>
                </>
            )}
        </Container>
    );
};
