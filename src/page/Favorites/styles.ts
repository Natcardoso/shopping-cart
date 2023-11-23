import styled from "styled-components";

export const Container = styled.div`
    padding: 0 6rem;
    padding-top: 8rem;
    background: #f7f7f7;
    height: 100vh;
    display: flex;
    flex-direction: column;

    .title {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 3rem;

        svg {
            width: 40px;
            height: 40px;
        }
    }
`;

export const ContainerNoLike = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;

    h2 {
        color: #505050;
    }

    h4 {
        color: #787878;
    }

    svg {
        margin-bottom: 2rem;
        color: rgb(212 212 212);
    }
`;
