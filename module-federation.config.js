export const mfConfig = {
  name: "dhaam_store_app_ui",
  filename: "remoteEntry.js",
  exposes: {
    "./Stores": "./src/localComponents/stores", 
    "./tailwindStyles": "./src/index.css"
  },
  shared: ["react", "react-dom"],
  types: {
      skipEmit: process.env.NODE_ENV === 'development',
    },
};
