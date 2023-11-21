import {
  Select,
  MenuItem,
  Container,
  TextField,
  Stack,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { setCurrency } from "./currencySlice";
import { setSearch } from "./searchSlice";
import { useEffect, useState } from "react";
import { setSymbol } from "./symbolSlice";

const Nav = function () {
  let currency = useSelector((state) => state.currency.value);
  let search = useSelector((state) => state.search.value);
  let symbol = useSelector((state) => state.symbol.value);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (currency == "INR") {
  //     dispatch(setSymbol("₹"));
  //   } else if (currency == "USD") {
  //     dispatch(setSymbol("$"));
  //   }
  // }, [currency]);

  return (
    <>
      <nav>
        <Container style={{ marginTop: 30 }}>
          <Stack direction="row" spacing={7}>
            {/*dropdown*/}
            
            <Select
              style={{
                height: 56,
                width: 105,
              }}
              value={currency}
              onChange={(event) => {
                const newCurrency = event.target.value;
                console.log(newCurrency);
                dispatch(setCurrency(newCurrency));
              }}
            >
              <MenuItem value="INR">INR</MenuItem>
              <MenuItem value="USD">USD</MenuItem>
            </Select>

            {/*textfeild*/}

            <TextField
              id="standard-basic"
              placeholder="Search by coin"
              variant="filled"
              style={{
                width: 500,
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon fontSize={"large"} />
                  </InputAdornment>
                ),
              }}
              onChange={(event) => {
                const searched = event.target.value;
                dispatch(setSearch(searched));
              }}
            />
          </Stack>
        </Container>
      </nav>
    </>
  );
};

export default Nav;
