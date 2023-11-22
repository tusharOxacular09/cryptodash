import React, { useState, useEffect } from "react";
import { Container, Box, Select, MenuItem, Stack, Button } from "@mui/material";

function ExcahangeCurrency() {
  const [coins, setCoins] = useState([]);
  const [enteredAmount, setEnteredAmount] = useState(null);
  const [sellCurrentPrice, setSellCurrentPrice] = useState("");
  const [buyCurrentPrice, setBuyCurrentPrice] = useState("");

  const [totalBtc, setTotalBtc] = useState(`${0} Btc`);

  async function fetchCoins() {
    try {
      const jsonData = await fetch(
        "https://tusharoxacular09.github.io/cryptocurrency_api/api.json"
      );
      const coins = await jsonData.json();
      setCoins(coins.slice(0, 10));
    } catch (error) {
      alert(`${error.message} : You've exceeded the Rate Limit`);
    }
  }

  useEffect(() => {
    fetchCoins();
  }, []);

  function onAmountchange(event) {
    console.log(event.target.value);
    return setEnteredAmount(event.target.value);
  }

  return (
    <>
      <Container className="w-1/2 bg-white rounded-lg m-2 shadow-sm max-sm:w-full p-4 max-sm:p-2">
        <div className="flex gap-2 items-center max-sm:flex-col">
          <div className="w-1/2 max-sm:w-full flex items-center justify-between gap-2">
            <label
              className="w-2/12 text-center"
              htmlFor="sell"
              style={{ color: "red", fontFamily: "Oswald" }}
            >
              Sell
            </label>
            <Select
              className="w-10/12"
              id="sell"
              value={sellCurrentPrice}
              onChange={(event) => {
                setSellCurrentPrice(event.target.value);
              }}
            >
              {coins.map((coin) => {
                return (
                  <MenuItem key={coin.id} value={coin.current_price}>
                    {coin.name}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          <div className="w-1/2 max-sm:w-full max-sm:mt-2 flex items-center justify-between gap-2">
            <label
              className="w-2/12 text-center"
              htmlFor="buy"
              style={{ color: "green", fontFamily: "Oswald" }}
            >
              Buy
            </label>
            <Select
              className="w-10/12"
              id="buy"
              value={buyCurrentPrice}
              onChange={(event) => {
                setBuyCurrentPrice(event.target.value);
              }}
            >
              <MenuItem value={coins[0]?.current_price}>
                {coins[0]?.name}
              </MenuItem>
            </Select>
          </div>
        </div>
        <Box style={{ marginTop: "25px", marginLeft: "40px" }}>
          <Stack spacing={2} direction="row">
            <input
              type="text"
              placeholder="Enter Amount"
              style={{ width: "10vw", height: "5vh" }}
              onChange={onAmountchange}
            />
            <Button
              variant="text"
              style={{ marginLeft: "90px", fontWeight: "bold" }}
              onClick={(event) => {
                const totalBtc =
                  (Number(sellCurrentPrice) / Number(buyCurrentPrice)) *
                  Number(enteredAmount);
                setTotalBtc(`${totalBtc.toFixed(2)}`);
              }}
            >
              Exchange
            </Button>
          </Stack>
        </Box>
        <Box style={{ marginTop: "25px", marginLeft: "40px", fontSize: "2rem" }}>
          <Stack spacing={2} direction="row">
            <span
              style={{
                fontWeight: "bold",
                fontFamily: "oswald",

              }}
            >
              Total: {totalBtc}
            </span>
          </Stack>
        </Box>
      </Container>
    </>
  );
}

export default ExcahangeCurrency;
