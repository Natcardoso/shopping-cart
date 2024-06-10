import styled from "styled-components";

export const Container = styled.div`
    padding: 1rem 6rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e8e8e8;
    background: #fff;
    width: 100vw;
    position: fixed;
    z-index: 2;

    .divLogo {
        display: flex;
        align-items: center;
        height: max-content;
        gap: 0.8rem;
        cursor: pointer;
        transition: all 0.3s ease;

        :hover {
            transform: scale(1.1);
        }

        svg {
            font-size: 2.5rem;
        }

        div {
            text-transform: uppercase;
            font-size: 2.5rem;
            font-weight: 600;
        }
    }
`;

export const ContainerSvg = styled.div`
    display: flex;
    gap: 1rem;

    svg {
        width: 3rem;
        height: 2rem;
        transition: all 0.2s;
        cursor: pointer;

        :hover {
            color: #5e5e5e;
        }
    }

    .cart {
        height: max-content;
        position: relative;

        .qntProducts {
            position: absolute;
            top: -0.6rem;
            right: -0.5rem;
            background: red;
            border-radius: 50%;
            height: 1.5rem;
            width: 1.5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 0.9rem;
            font-weight: 600;
        }
    }
`;
