import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    padding: 8rem;
    background: #f7f7f7;
    height: 100%;

    .qnt {
        display: block;
        margin-bottom: 1rem;
    }
`;

export const ContainerCard = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 1rem;
`;

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    position: relative;
    cursor: pointer;
    background: white;
    border-radius: 0.5rem;
    border: 2px solid #fff;
    transition: all 0.3s linear;
    box-shadow: rgb(216 216 216) 2px 2px 8px;

    :hover {
        box-shadow: rgb(104 104 104) 0px 0px 9px;
    }

    .divImg {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;

        img {
            width: 250px;
            height: 250px;
            mix-blend-mode: multiply;
            object-fit: cover;
        }
    }

    .description {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        font-size: 1.5rem;
        font-weight: 600;
        gap: 1rem;

        span:nth-child(2) {
            font-weight: 500;
            font-size: 1rem;
            color: #595959;
        }
    }

    .addCart {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        padding: 1rem;
        padding-top: 0;

        svg {
            font-size: 1.5rem;
        }

        button {
            border: none;
            border: 1px solid #000;
            gap: 0.5rem;
            background-color: transparent;
            border-radius: 50rem;
            padding: 0.5rem 1rem;
            display: flex;
            align-items: center;
            font-weight: 600;
            cursor: pointer;
            text-transform: uppercase;
            transition: all 0.3s ease;

            :hover {
                background-color: #000;
                color: #fff;
            }
        }
    }
`;

export const Like = styled.div`
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    z-index: 1;

    svg {
        width: 1.5rem;
        height: 1.5rem;
        transition: all 0.3s;

        :hover {
            transform: scale(1.2);
            color: #000;
        }
    }
`;

const spin = keyframes`
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
`;

export const ContainerLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    svg {
        width: 4rem;
        height: 4rem;
        animation: ${spin} 0.5s infinite linear;
    }
`;

export const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
    border: 2px solid #000;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    width: 30%;
    gap: 0.5rem;
    margin-bottom: 2rem;

    input {
        border: none;
        outline: none;
        background: transparent;
        width: 100%;
    }

    svg {
        font-size: 1.5rem;
    }

    input::placeholder {
        color: #8b8a8a;
        font-size: 1rem;
    }
`;

export const ContainerEmptyState = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 1.5rem;
    font-weight: 400;

    span {
        margin-top: -4rem;
    }

    p {
        font-weight: bolder;
    }
`;
