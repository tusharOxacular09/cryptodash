// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { CoinList, HistoricalChart } from "../../config/api";
// import { Line, Bar } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";
// import { chartDays } from "../../config/data";
// import {
//   Container,
//   Box,
//   Select,
//   MenuItem,
//   Stack,
//   FormControl,
//   InputLabel,
//   CircularProgress,
//   Alert,
//   Snackbar,
// } from "@mui/material";
// import SelectButton from "../SelectButton";

// function Chart() {
//   const currency = useSelector((state) => state.currency.value);
//   const search = useSelector((state) => state.search.value);
//   let [coins, setCoins] = useState([]);
//   let [selectedCoin, setSelectedCoin] = useState("bitcoin");
//   let [historicData, setHistoricData] = useState();
//   let [days, setDays] = useState(1);
//   const [selectedChart, setSelectedChart] = useState("Line");
//   const [error, setErrror] = useState(null);

//   async function fetchCoins() {
//     try {
//       const jsonData = await fetch(CoinList(currency));
//       const data = await jsonData.json();
//       setCoins(data);
//     } catch (error) {
//       alert(`${error.message} : You've exceeded the Rate Limit`);
//     }
//   }

//   async function fetchHistoricData() {
//     try {
//       const jsonData = await fetch(
//         HistoricalChart(selectedCoin, days, currency)
//       );
//       const data = await jsonData.json();
//       setHistoricData(data.prices);
//     } catch (error) {
//       alert(`${error.message} : You've exceeded the Rate Limit`);
//     }
//   }

//   // useEffect(() => {
//   //   fetchHistoricData();
//   // }, [currency, days, selectedCoin, selectedChart]);

//   // useEffect(() => {
//   //   fetchCoins();
//   // }, [currency]);

//   let handleCoinChange = (event) => {
//     setSelectedCoin(event.target.value);
//   };

//   const handleChartChange = (event) => {
//     setSelectedChart(event.target.value);
//   };

//   const formatDate = (timestamp) => {
//     const date = new Date(timestamp);
//     return days === 1
//       ? `${date.getHours()}:${date.getMinutes()}${
//           date.getHours() >= 12 ? "PM" : "AM"
//         }`
//       : date.toLocaleDateString();
//   };

//   // console.log("historicData::", historicData);

//   const filterCoins = coins.filter((coin) => {
//     return (
//       coin.name.toLowerCase().includes(search) ||
//       coin.symbol.toLowerCase().includes(search)
//     );
//   });

//   return (
//     <>
//       {search ? (
//         <Container>
//           <Box
//             style={{
//               display: "flex",
//               flexDirection: "column",
//               maxHeight: "200px",
//               overflowY: "scroll",
//               fontFamily: "Oswald",
//               borderRadius: "5px",
//               marginBottom: "3rem",
//               marginTop: "1rem",
//               padding: "5px",
//               cursor: "pointer",
//             }}
//           >
//             {filterCoins.map((coin) => (
//               <div
//                 style={{ margin: "5px" }}
//                 onClick={(e) => {
//                   setSelectedCoin(coin.id);
//                 }}
//               >
//                 {coin.name}
//               </div>
//             ))}
//           </Box>
//         </Container>
//       ) : null}
//       <Container>
//         <Stack direction="row" spacing={7}>
//           {/*Tabs*/}
//           <Box style={{ marginLeft: 40, marginTop: 40 }}>
//             {chartDays.map((day) => {
//               return (
//                 <SelectButton
//                   key={day.value}
//                   onClick={() => setDays(day.value)}
//                   selected={day.value === days}
//                 >
//                   {day.label2}
//                 </SelectButton>
//               );
//             })}
//           </Box>
//           <Box style={{ marginTop: 20 }}>
//             <FormControl>
//               <InputLabel>Cryptocurrency</InputLabel>
//               <Select
//                 label="Cryptocurrency"
//                 style={{
//                   width: 200,
//                 }}
//                 onChange={handleCoinChange}
//                 value={selectedCoin}
//               >
//                 {coins.map((coin) => {
//                   return (
//                     <MenuItem value={coin.id} key={coin.id}>
//                       {coin.name}
//                     </MenuItem>
//                   );
//                 })}
//               </Select>
//             </FormControl>
//           </Box>
//           <Box style={{ marginTop: 20 }}>
//             <FormControl>
//               <InputLabel>Chart type</InputLabel>
//               <Select
//                 label="Charttype"
//                 style={{
//                   width: 200,
//                 }}
//                 onChange={handleChartChange}
//                 value={selectedChart}
//                 defaultValue="Line"
//               >
//                 <MenuItem value="Line">Line</MenuItem>
//                 <MenuItem value="Bar">Bar</MenuItem>
//               </Select>
//             </FormControl>
//           </Box>
//         </Stack>
//       </Container>
//       <Container>
//         {/* Chart */}
//         <Box
//           style={{
//             marginTop: 25,
//             padding: 40,
//             display: "flex",
//             height: "400px",
//             width: "100%",
//           }}
//         >
//           {!historicData ? (
//             <CircularProgress
//               style={{ color: "black" }}
//               size={250}
//               thickness={1}
//             />
//           ) : (
//             <Box>
//               {selectedChart === "Line" ? (
//                 <Line
//                   data={{
//                     labels: historicData.map((coin) => formatDate(coin[0])),

//                     datasets: [
//                       {
//                         label: "Price",
//                         data: historicData.map((coin) => {
//                           return coin[1];
//                         }),
//                       },
//                     ],
//                   }}
//                   options={{
//                     maintainAspectRatio: false,
//                     responsive: true,
//                   }}
//                   style={{ width: "45vw" }}
//                 />
//               ) : (
//                 <Bar
//                   data={{
//                     labels: historicData.map((coin) => formatDate(coin[0])),

//                     datasets: [
//                       {
//                         label: "Price",
//                         data: historicData.map((coin) => {
//                           return coin[1];
//                         }),
//                       },
//                     ],
//                   }}
//                   options={{
//                     maintainAspectRatio: false,
//                     responsive: true,
//                   }}
//                   style={{ width: "45vw" }}
//                 />
//               )}
//             </Box>
//           )}
//         </Box>
//       </Container>
//     </>
//   );
// }
// export default Chart;

// /* // labels: historicData.map((coin) => {
//                     //   let date = new Date(coin[0]);
//                     //   let time =
//                     //     date.getHours() > 12
//                     //       ? `${date.getHours() - 12}:${date.getMinutes()}PM`
//                     //       : `${date.getHours()}:${date.getMinutes()}AM`;

//                     //   return days === 1 ? time : date.toLocaleDateString();
//                     // }),*/



import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { CoinList, HistoricalChart } from "../../config/api";
import { Line, Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { chartDays } from "../../config/data";
import {
  Container,
  Box,
  Select,
  MenuItem,
  Stack,
  FormControl,
  InputLabel,
  CircularProgress,
} from "@mui/material";
import SelectButton from "../SelectButton";

function Chart() {
  const currency = useSelector((state) => state.currency.value);
  const search = useSelector((state) => state.search.value);
  let [coins, setCoins] = useState([]);
  let [selectedCoin, setSelectedCoin] = useState("bitcoin");
  let [historicData, setHistoricData] = useState();
  let [days, setDays] = useState(1);
  const [selectedChart, setSelectedChart] = useState("Line");
  const [error, setErrror] = useState(null);

  async function fetchCoins() {
    try {
      const jsonData = await fetch(CoinList(currency));
      const data = await jsonData.json();
      setCoins(data);
    } catch (error) {
      alert(`${error.message} : You've exceeded the Rate Limit`);
    }
  }

  async function fetchHistoricData() {
    try {
      const jsonData = await fetch(
        HistoricalChart(selectedCoin, days, currency)
      );
      const data = await jsonData.json();
      setHistoricData(data.prices);
    } catch (error) {
      alert(`${error.message} : You've exceeded the Rate Limit`);
    }
  }

  // useEffect(() => {
  //   fetchHistoricData();
  // }, [currency, days, selectedCoin, selectedChart]);

  // useEffect(() => {
  //   fetchCoins();
  // }, [currency]);

  let handleCoinChange = (event) => {
    setSelectedCoin(event.target.value);
  };

  const handleChartChange = (event) => {
    setSelectedChart(event.target.value);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return days === 1
      ? `${date.getHours()}:${date.getMinutes()}${date.getHours() >= 12 ? "PM" : "AM"
      }`
      : date.toLocaleDateString();
  };

  const filterCoins = coins.filter((coin) => {
    return (
      coin.name.toLowerCase().includes(search) ||
      coin.symbol.toLowerCase().includes(search)
    );
  });

  {/* {search ? (
        <Container>
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              maxHeight: "200px",
              overflowY: "scroll",
              fontFamily: "Oswald",
              borderRadius: "5px",
              marginBottom: "3rem",
              marginTop: "1rem",
              padding: "5px",
              cursor: "pointer",
            }}
          >
            {filterCoins.map((coin) => (
              <div
                style={{ margin: "5px" }}
                onClick={(e) => {
                  setSelectedCoin(coin.id);
                }}
              >
                {coin.name}
              </div>
            ))}
          </Box>
        </Container>
      ) : null} */}

  return (
    <div className="bg-white m-2 rounded-lg shadow-sm">
      <div className="flex max-sm:flex-col p-3 lg:pt-6">
        <Box className="w-1/3 max-sm:w-full py-4 lg:pl-10">
          {chartDays.map((day) => {
            return (
              <SelectButton
                key={day.value}
                onClick={() => setDays(day.value)}
                selected={day.value === days}
              >
                {day.label2}
              </SelectButton>
            );
          })}
        </Box>
        <div className="w-2/3 max-sm:w-full flex max-sm:flex-col gap-4 p-2 max-sm:pt-4 ">
          <FormControl className="w-1/2 max-sm:w-full">
            <InputLabel>Cryptocurrency</InputLabel>
            <Select
              label="Cryptocurrency"
              onChange={handleCoinChange}
              value={selectedCoin}
            >
              {coins.map((coin) => (
                <MenuItem value={coin.id} key={coin.id}>
                  {coin.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className="w-1/2 max-sm:w-full">
            <InputLabel>Chart type</InputLabel>
            <Select
              label="Charttype"
              onChange={handleChartChange}
              value={selectedChart}
              defaultValue="Line"
            >
              <MenuItem value="Line">Line</MenuItem>
              <MenuItem value="Bar">Bar</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="w-full h-72 flex justify-center itmes-center">
        <Container>
          {/* Chart */}
          <Box
            style={{
              marginTop: 25,
              padding: 10,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            {!historicData ? (
              <CircularProgress style={{ color: "black" }} size={50} thickness={2} />
            ) : (
              <Box style={{ width: "80%" }}>
                {selectedChart === "Line" ? (
                  <Line
                    data={{
                      labels: historicData.map((coin) => formatDate(coin[0])),
                      datasets: [
                        {
                          label: "Price",
                          data: historicData.map((coin) => coin[1]),
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      responsive: true,
                    }}
                  />
                ) : (
                  <Bar
                    data={{
                      labels: historicData.map((coin) => formatDate(coin[0])),
                      datasets: [
                        {
                          label: "Price",
                          data: historicData.map((coin) => coin[1]),
                        },
                      ],
                    }}
                    options={{
                      maintainAspectRatio: false,
                      responsive: true,
                    }}
                  />
                )}
              </Box>
            )}
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default Chart;
