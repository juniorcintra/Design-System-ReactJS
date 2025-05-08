import { colors } from "@ignite-ui/tokens";
import { getContrast } from "polished";

function getTextColor(color: string) {
  const contrast = getContrast(color, "#000");
  return contrast >= 4.5 ? "#000" : "#fff";
}

export default function ColorsGrid() {
  return Object.entries(colors).map(([key, value]) => (
    <div key={key} style={{ backgroundColor: value, padding: "2rem" }}>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "monospace",
          color: getTextColor(value),
        }}
      >
        <strong>${key}</strong>
        <span>{value}</span>
      </div>
    </div>
  ));
}
