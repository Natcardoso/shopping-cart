import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { GlobalStyles } from "./GlobalStyles/styles";
import { Router } from "./router";
import { BrowserRouter } from "react-router-dom";
import { ProductsContextProvider } from "./context";

function App() {
    return (
        <BrowserRouter>
            <ProductsContextProvider>
                <GlobalStyles />
                <Header />
                <Router />
            </ProductsContextProvider>
        </BrowserRouter>
    );
}

export default App;
