import styled, { keyframes } from "styled-components";

const Translate = keyframes`
    from {
        transform: translateX(20rem);
    }

    to {
        transform:translateX(0);
    }
`;

const Show = keyframes`
    from {
        opacity: 0;
    }

    to {
       opacity: 1;
    }
`;

export const Container = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    top: 0;
    right: 0;
    background: #000000a1;
    display: flex;
    justify-content: flex-end;
    animation: ${Show} 0.3s forwards;
    z-index: 2;
`;

export const Content = styled.div`
    animation: ${Translate} 0.8s forwards;
    width: 30rem;
    height: 100%;
    background-color: #fff;
    display: grid;
    grid-template-rows: max-content 1fr max-content;

    header {
        font-size: 1rem;
        font-weight: 600;
        display: flex;
        padding: 1rem;
        align-items: center;
        gap: 0.5rem;
        border-bottom: 1px solid #595959;

        svg {
            font-size: 2rem;
            cursor: pointer;
            transition: all 0.3s;

            :hover {
                color: #5e5e5e;
            }
        }
    }
`;

type Props = {
    empty: boolean;
};

export const Main = styled.div<Props>`
    padding: 1rem;
    display: flex;
    justify-content: ${({ empty }) => (empty ? "center" : "")};
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;

    .cardProduct {
        display: flex;
        gap: 1rem;
        border-bottom: 1px solid #595959;
        padding-bottom: 1rem;
        position: relative;

        .remove {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            cursor: pointer;
            font-size: 1.5rem;
            transition: all 0.3s ease;

            :hover {
                transform: scale(1.2);
            }
        }

        .divImg {
            width: 50%;
            display: flex;
            border-radius: 0.5rem;
            background: #ebebeb;

            img {
                width: 100%;
                mix-blend-mode: multiply;
            }
        }

        .description {
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            gap: 1rem;
            width: 100%;
            color: #595959;

            .price {
                font-weight: 600;
                font-size: 1.8rem;
                color: #000;
            }

            .qnt {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1rem;
                color: #fff;
                background: #000;
                border-radius: 50px;
                padding: 8px 1rem;
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
        }
    }
`;

export const Footer = styled.div<Props>`
    padding: 1rem;
    border-top: 1px solid #595959;

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;

        span:nth-child(2) {
            font-weight: 600;
            font-size: 1.5rem;
        }
    }

    button {
        width: 100%;
        border: none;
        background: ${({ empty }) => (empty ? "#e2e2e2" : "#000")};
        color: white;
        border-radius: 0.3rem;
        padding: 8px;
        font-size: 1rem;
        font-weight: 600;
        margin-top: 1rem;
        cursor: ${({ empty }) => (empty ? "not-allowed" : "pointer")};

        :hover {
            opacity: 0.8;
        }
    }
`;

export const EmptyBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        width: 80%;
    }

    .title {
        margin-top: -2rem;
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
        font-weight: 600;
    }

    .subTitle {
        text-align: center;
        width: 80%;

        strong {
            cursor: pointer;

            :hover {
                text-decoration: underline;
                opacity: 0.7;
            }
        }
    }
`;
