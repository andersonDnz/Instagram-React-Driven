import { createRoot } from "react-dom";

import "./index.css";


import App from "./components/App";


const root = createRoot(document.querySelector(".root"))
root.render(<App />);
