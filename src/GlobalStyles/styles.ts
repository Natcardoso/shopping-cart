import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        height: 100vh;
    }
    
    * {
        padding: 0;
        margin: 0;
        font-family: Poppins;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        scroll-behavior: smooth;
    }

    *::-webkit-scrollbar {
        width: 3px;            
    }

    *::-webkit-scrollbar-track {
        background: white;       
    }

    *::-webkit-scrollbar-thumb {
        background-color: #000;   
        border-radius: 2px;      
    }
`;
