/*useState depedency is removed that is currency */

import React, { useState, useEffect } from "react";
import { TrendingCoins } from "../../config/api";
import { useSelector } from "react-redux";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import { Container, Box } from "@mui/material";

function Portfolio() {
  const currency = useSelector((state) => state.currency.value);
  const [slicedCoins, setSlicedCoin] = useState([]);

  async function fetchCoins() {
    try {
      // const jsonData = await fetch(TrendingCoins(currency));
      const jsonData = await fetch(
        "https://tusharoxacular09.github.io/cryptocurrency_api/api.json"
      );
      const coins = await jsonData.json();
      setSlicedCoin(coins.slice(8, 11)); //5,8
    } catch (error) {
      alert(`${error.message} : You've exceeded the Rate Limit`);
    }
  }

  useEffect(() => {
    fetchCoins();
  },[]);

  console.log("sleicedcOINS::", slicedCoins);
  // console.log("sleicedcOINS-name::", slicedCoins[1].name);
  return (
    <>
      <Container>
        <span
          style={{
            display: "inline",
            justifyContent: "start",
            fontFamily: "Oswald",
            fontSize: "1.1rem",
            padding: "10px",
            marginLeft: "40px",
          }}
        >
          Cardano: {slicedCoins[0]?.current_price}
        </span>
        <span
          style={{
            display: "inline",
            justifyContent: "start",
            fontFamily: "Oswald",
            fontSize: "1.1rem",
            padding: "10px",
          }}
        >
          Dogecon: {slicedCoins[1]?.current_price}
        </span>
        <span
          style={{
            display: "inline",
            justifyContent: "start",
            fontFamily: "Oswald",
            fontSize: "1.1rem",
            padding: "10px",
          }}
        >
          Tron: {slicedCoins[2]?.current_price}
        </span>
        <span
          style={{
            display: "inline",
            justifyContent: "left",
            fontFamily: "Oswald",
            fontSize: "1.5rem",
            padding: "10px",
            color: "",
          }}
        >
          Total Value:{" "}
          {slicedCoins[0]?.current_price +
            slicedCoins[1]?.current_price +
            slicedCoins[2]?.current_price}
        </span>
      </Container>
      <Container>
        <Box
          style={{
            // backgroundColor: "grey",
            width: "50%",
            height: "50%",
          }}
        >
          <Pie
            data={{
              labels: [
                slicedCoins[0]?.name,
                slicedCoins[1]?.name,
                slicedCoins[2]?.name,
              ],
              datasets: [
                {
                  data: [
                    slicedCoins[0]?.current_price,
                    slicedCoins[1]?.current_price,
                    slicedCoins[2]?.current_price,
                  ],
                  backgroundColor: ["#79d1a5", "#0d83b5", "#de7173"],
                  hoverOffset: 4,
                  borderWidth: 0,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true,
            }}
            style={{
              width: "70%",
              height: "70%",
            }}
          />
          {/* <Pie
            data={{
              labels: [
                slicedCoins[0]?.name,
                slicedCoins[1]?.name,
                slicedCoins[2]?.name,
              ],
              datasets: [
                {
                  data: [
                    slicedCoins[0]?.current_price,
                    slicedCoins[1]?.current_price,
                    slicedCoins[2]?.current_price,
                  ],
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                  hoverOffset: 4,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              responsive: true,
            }}
            style={{
              width: "50%",
              height:"50%"
            }}
          /> */}
        </Box>
      </Container>
    </>
  );
}

export default Portfolio;
