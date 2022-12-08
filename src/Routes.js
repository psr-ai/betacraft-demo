import React from "react";
import {
    Route,
    Routes
} from "react-router-dom";
import Login from './features/login/Login';
import Register from './features/register/Register';
import { Counter } from './features/counter/Counter';
import {useSelector} from "react-redux";
import {selectToken} from "./features/user/userSlice";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function IndexRoutes() {
    const token = useSelector(selectToken);
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {token && <Route path="/dashboard" element={<Counter />} />}
        </Routes>
    );
}