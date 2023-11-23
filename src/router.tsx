import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./page/Home";
import { DescriptionCard } from "./page/DescriptionCard";
import { Favorites } from "./page/Favorites";

export const Router = () => {
    const location = useLocation();

    return (
        <Routes location={location}>
            <Route index element={<Home />} />
            <Route path="/:id" element={<DescriptionCard />} />
            <Route path="/favoritos" element={<Favorites />} />
        </Routes>
    );
};
