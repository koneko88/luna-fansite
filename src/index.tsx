import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./translations/i18n";
import { LayoutProvider } from "./components/providers/layout";
import { LanguageLoaderProvider } from "./components/providers/language";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <LayoutProvider>
      <LanguageLoaderProvider>
        <App />
      </LanguageLoaderProvider>
    </LayoutProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
