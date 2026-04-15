import Plot from "plotly.js-dist-min";

export function Tab1() {
  const trace = {
    x: [1, 2, 3, 4, 5],
    y: [10, 15, 13, 17, 21],
    mode: "lines+markers",
    type: "scatter",
    name: "Sample Data",
  };

  const data = [trace];

  return (
    <div className="Plot">
      <Plot
        data={data}
        layout={{
          title: "Simple Plotly Line Chart",
          xaxis: {
            title: "X Axis",
          },
          yaxis: {
            title: "Y Axis",
          },
        }}
      />
    </div>
  );
}
