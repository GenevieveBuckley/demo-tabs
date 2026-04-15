import Plot from "plotly.js-dist-min";

export function Tab1() {
  return (
    <div className="Plot">
      <Plot data={[{ x: [1, 2], y: [3, 4], type: "bar" }]} />
    </div>
  );
}
