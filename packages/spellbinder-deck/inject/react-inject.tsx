import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

console.log('Injecting spellbinder deck...');

// inject the React app into the page
const container = document.createElement("div");
container.id = "spellbinder-deck-root";
container.style.position = "fixed";
container.style.bottom = "0";
container.style.left = "0";
container.style.width = "100%";
container.style.zIndex = "9999";
document.body.appendChild(container);

// const root = createRoot(container);
// root.render(<App />);

console.log('Spellbinder deck injected!');
