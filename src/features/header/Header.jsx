import React from "react";
import { Container, Typography, Paper } from "@mui/material";
const Header = function () {
  return (
    <>
      <header>
        <Paper>
          <Container style={{ marginLeft: 80, padding: 10 }}>
            <Typography
              style={{ fontSize: 40, fontFamily: "oswald", fontWeight: "bold" }}
            >
              Crypto Currency
            </Typography>
          </Container>
        </Paper>
      </header>
    </>
  );
};
export default Header;
