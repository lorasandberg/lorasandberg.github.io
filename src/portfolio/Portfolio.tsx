import { Box, Grid, Stack } from "@mui/material";
import Sidebar from "./Sidebar";
import Cards from "./Cards";
import { Outlet, ScrollRestoration } from "react-router";
import type { Theme } from "@emotion/react";
import useResponsiveState from "./util/useResponsiveState";

function Portfolio() {

    const layout = useResponsiveState();

    return (
        <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4, lg: 3 }}>
            <Sidebar />
        </Grid>
        <Grid size={{ xs: 12, md: 8, lg: 9}} sx={{ flexGrow: 1}}>
            <Box className="left-wrapper" sx={{ paddingLeft: layout.at_most.mobile ? "1em" : "2em" }}>
            <Outlet />
            </Box>
        </Grid>
        </Grid>
    );
}

export default Portfolio;
