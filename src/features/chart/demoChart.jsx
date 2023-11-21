import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Container } from "@mui/material";

export default function DemoChart() {
  return (
    <>
      <Container>
        <div>
          <Bar
            data={{
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [
                {
                  label: "# of Votes",
                  data: [12, 19, 3, 5, 2, 3],
                  borderWidth: 1,
                },
              ],
            }}
          />
        </div>
      </Container>
    </>
  );
}
