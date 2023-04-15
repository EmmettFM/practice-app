import React, {FC, ReactElement} from 'react';
import {AppBar, Toolbar, Button, Typography} from "@mui/material";

export const Header: FC = (): ReactElement => {
    return (
        <div>
            <AppBar>
                <Toolbar>
                    <Typography>Logo</Typography>
                    <Button variant="contained" sx={{ marginLeft: "auto" }} color="info">Temp</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;