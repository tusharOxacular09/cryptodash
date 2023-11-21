import "./App.css";
import Header from "./features/header/Header";
import Nav from "./features/nav/Nav";
import Sidebar from "./features/sidebar/Sidebar";
import Chart from "./features/chart/Chart";
import Portfolio from "./features/portfolio/Portfolio";
import { Paper, Grid } from "@mui/material";
import ExcahangeCurrency from "./features/exchange/ExchangeCurrency";
function App() {
  return (
    <div className="App">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper >
            <Header />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <Paper >
            <Nav />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} sm={12} lg={6}>
          <Paper>
            <Sidebar />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6} sm={12}>
          <Paper >
            <Chart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <Paper >
            <Portfolio />
          </Paper>
        </Grid>
        <Grid item xs={12} md={3} sm={12}>
          <Paper >
            <ExcahangeCurrency />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
