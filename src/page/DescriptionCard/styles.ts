import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    padding: 0 6rem;
    background: #f7f7f7;
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;

    .backPage {
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 1rem 0;
        cursor: pointer;
        transition: all 0.3s ease 0s;
        width: max-content;

        :hover {
            transform: scale(1.1);
        }
    }

    .containerCarousel {
        display: flex;
        flex-direction: column;
        gap: 0;
        width: 50rem;
        border-radius: 1rem;
        box-shadow: rgb(216 216 216) 2px 2px 8px;
    }

    .yours-custom-class {
        display: flex;
        align-items: start;
        justify-content: center;
        background: #fff;
        border-radius: 0.5rem;
        overflow: hidden;

        img {
            width: 30rem;
            height: 35rem;
            object-fit: cover;
            mix-blend-mode: multiply;
        }
    }

    .control-dots,
    .carousel-status {
        display: none;
    }

    .carousel {
        justify-content: center;
    }

    .carousel .thumbs {
        display: flex;
        justify-content: center;
    }

    .thumbs-wrapper {
        display: flex;
        justify-content: center;
        margin: 0.5rem;
    }

    .thumb {
        padding: 0;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: all 0.3s;
    }

    .carousel.carousel-slider .control-arrow {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #000;
        height: 32px;
        width: 32px;
        top: 45%;
        border-radius: 50%;
        margin: 0 1rem;
    }
`;

export const ContainerWrapper = styled.div`
    display: flex;
    gap: 3rem;
`;

export const ContainerDescription = styled.div`
    display: flex;
    flex-direction: column;

    .line {
        background: #6d6d6d;
        height: 1px;
        margin: 2rem 0;
    }

    .imgMain {
        border-radius: 0.5rem;
    }

    .description {
        display: flex;
        flex-direction: column;

        .title {
            font-size: 3rem;
            font-weight: 600;
        }

        .textDescription {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            color: #595959;
        }

        .price {
            font-weight: lighter;
            font-size: 2.5rem;
            margin: 1rem 0 2rem;
        }
    }

    .qnt {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        color: #fff;
        background: #000;
        border-radius: 50px;
        padding: 0.5rem 1rem;
        width: max-content;
        transition: all 0.5s ease;

        svg {
            cursor: pointer;

            :hover {
                transform: scale(1.4);
            }
        }

        span {
            text-align: center;
            font-weight: 600;
            width: 1rem;
        }
    }

    .addCart {
        display: flex;
        align-items: center;
        gap: 1rem;
        width: 100%;
        margin-top: 1rem;

        svg {
            font-size: 1.5rem;
        }

        button {
            gap: 0.5rem;
            background-color: #000;
            color: #fff;
            border-radius: 50rem;
            padding: 12px 1.5rem;
            display: flex;
            align-items: center;
            border: none;
            font-weight: 600;
            cursor: pointer;
            text-transform: uppercase;
            transition: all 0.3s ease;
        }

        button:first-child:hover {
            transform: scale(1.1);
        }

        button:last-child {
            background: transparent;
            color: #000;
            border: 1px solid #000;

            :hover {
                background-color: #000;
                color: #fff;
            }
        }
    }
`;

export const ContainerDelivery = styled.div`
    height: 1px;

    div {
        display: flex;
        align-items: center;
        gap: 1rem;

        svg {
            font-size: 2rem;
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
