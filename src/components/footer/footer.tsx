import React, { FC, ReactElement } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import './footer.css';

export const Footer: FC = (): ReactElement => {
    return (
        <div className="Footer">
           <Box
            sx={{
                width: "100%",
                height: "auto",
                backgroundColor: "secondary.main",
                paddingTop: "1rem",
                paddingBottom: "1rem",
            }}
            >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center">
                <Grid item xs={12}>
                    <Typography color="black" variant="h5">
                    Practice React App yaya
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography color="textSecondary" variant="subtitle1">
                    {`${new Date().getFullYear()} | Temp Text`}
                    </Typography>
                </Grid>
                </Grid>
            </Container>
            </Box>
        </div>
    );
};

export default Footer;