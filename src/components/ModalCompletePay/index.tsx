import { BsCheckCircle } from "react-icons/bs";
import styled, { keyframes } from "styled-components";

const showOrFadeContainer = keyframes`
    0% {
        opacity: 0;
    } 
    100% {
        opacity: 1;
    }
`;

const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    right: 0;
    background: #000000a1;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    animation: ${showOrFadeContainer} 0.8s forwards;
`;

const showOrFade = keyframes`
    0% {
        opacity: 0;
        transform: scale(0.4);
    }

    40% {
        opacity: 1;
        transform: scale(1);
    }

    100% {
        opacity: 0;
    }
`;

const Modal = styled.div`
    width: 30rem;
    height: 25rem;
    background: #fff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    color: #11b458;
    animation: ${showOrFade} 1s forwards;

    svg {
        font-size: 8rem;
    }

    span {
        font-size: 1.5rem;
        font-weight: 800;
    }
`;

type Props = {
    isClose: () => void;
};

export const ModalCompletePay = ({ isClose }: Props) => {
    setTimeout(() => {
        isClose();
    }, 4000);
    return (
        <Container>
            <Modal>
                <BsCheckCircle />
                <span>Compra finalizada com sucesso!</span>
            </Modal>
        </Container>
    );
};
