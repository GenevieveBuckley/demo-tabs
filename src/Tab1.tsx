import Typography from "@mui/material/Typography";
import Plotly from "plotly.js-dist-min";

export function Tab1() {
  const trace = {
    x: [1, 2, 3, 4, 5],
    y: [10, 15, 13, 17, 21],
    mode: "lines+markers",
    type: "scatter",
    name: "Sample Data",
  };

  const data = [trace];

  const layout = {
    title: "Simple Plotly Line Chart",
    xaxis: {
      title: "X Axis",
    },
    yaxis: {
      title: "Y Axis",
    },
  };
  Plotly.newPlot("chart", data, layout);
  return (
    <div id="chart"></div>
    // <Typography sx={{ marginBottom: 2 }}>
    //   Tab One Content... Lorem ipsum dolor sit amet, consectetur adipiscing
    //   elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //   Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus
    //   at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
    //   quisque non tellus. Convallis convallis tellus id interdum velit laoreet
    //   id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
    //   Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus
    //   euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis
    //   imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa
    //   tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
    //   arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi
    //   tincidunt. Lorem donec massa sapien faucibus et molestie ac.
    // </Typography>
  );
}
