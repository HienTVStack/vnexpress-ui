import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import AppBarHeader from "../components/AppBarHeader";

function AppLayout() {
    return (
        <Fragment>
            <AppBarHeader />
            <Outlet />
        </Fragment>
    );
}

export default AppLayout;
