export const mfConfig = {
  name: "dhaam_store_app_ui",
  exposes: {
    "./Stores": "./src/localComponents/stores", 
    "./tailwindStyles": "./src/index.css"
  },
  shared: ["react", "react-dom"],
};
