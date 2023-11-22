import {
  Select,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useSelector, useDispatch } from "react-redux";
import { setCurrency } from "./currencySlice";
import { setSearch } from "./searchSlice";

const Nav = function () {
  let currency = useSelector((state) => state.currency.value);
  const dispatch = useDispatch();

  return (
    <nav className="w-full flex p-3 gap-3 max-sm:gap-2 max-sm:p-2 max-lg:flex-col">
      <Select
        className="w-1/3 max-lg:w-full"
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
        className="w-2/3 max-lg:w-full"
        id="standard-basic"
        placeholder="Search by coin"
        variant="filled"
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
    </nav>
  );
};

export default Nav;
