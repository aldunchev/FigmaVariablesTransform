const fs = require("fs");
// const _ = require("lodash");

// Load the exported variables from Figma
const data = require(".tokens/exportedVariables.json");

// Define the fields that contain colors and their respective Tailwind keywords.
// This can be remove if the Figma variables use the same naming as in Tailwind.
// Thus only Object.keys can be used.
// Otherwise it can be done like: {"Figma Var name": "primary"}.
const COLOR_FIELDS = {
  primary: "primary",
  secondary: "secondary",
  neutral: "neutral",
  success: "success",
  error: "error",
};

// Define the fields that contain spacing, border radius, etc.
const SPACING_FIELD = "Spacing Scale";
const BORDER_RADIUS_FIELD = "border-radius";

// Define the order of border radius values. Your Figma variables can be just a subset of these (e.g. mine has only sm, base, xl)
const BORDER_RADIUS_ORDER = [
  "button-radius",
  "card-radius",
  "input-fields",
  "select-options",
  "accordion",
];

const processedData = {
  theme: {
    colors: {},
    spacing: {},
    borderRadius: {},
  },
};

// Process colors
Object.entries(COLOR_FIELDS).forEach(([field]) => {
  if (data.colors[field]) {
    processedData.theme.colors[field] = {};
    Object.entries(data.colors[field]).forEach(([key, value]) => {
      const tailwindColorName = `${key.toLowerCase().replace(" ", "-")}`;

      // Map color names to their respective values.
      processedData.theme.colors[field][tailwindColorName] = value["$value"];
    });
  }
});

// Process spacing
if (data[SPACING_FIELD]) {
  Object.entries(data[SPACING_FIELD])
    .sort(([keyA], [keyB]) => parseFloat(keyA) - parseFloat(keyB))
    .forEach(([key, value]) => {
      processedData.theme.spacing[
        key.replace(",", ".")
      ] = `${value["$value"]}px`;
    });
}

// Process border radius
if (data[BORDER_RADIUS_FIELD]) {
  BORDER_RADIUS_ORDER.forEach(orderKey => {
    if (data[BORDER_RADIUS_FIELD][orderKey]) {
      const borderRadiusValue = data[BORDER_RADIUS_FIELD][orderKey]["$value"];
      const borderRadiusSplit = borderRadiusValue.split('.');
      const borderRadiusMappingValue = borderRadiusSplit[borderRadiusSplit.length - 1].replace('}', '');
      const borderRadiusPixelValue = data[SPACING_FIELD][borderRadiusMappingValue]["$value"];
      processedData.theme.borderRadius[orderKey] = `${borderRadiusPixelValue}px`;
    }
  });
}

fs.writeFileSync(
  "./variableOutput.js",
  "module.exports = " + JSON.stringify(processedData, null, 2),
  "utf-8",
);
console.log(
  "Processing completed successfully. Output written to 'variableOutput.js'.",
);
