import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createHead, UnheadProvider } from "@unhead/react/client";
import { defaultSEO } from "./lib/seo.ts";

const head = createHead();

head.push({
  titleTemplate: ` %s | ${defaultSEO.siteName} `,
  meta: [
    { name: "description", content: defaultSEO.description },
    { property: "og:image", content: defaultSEO.image },
    { property: "og:url", content: defaultSEO.url },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <UnheadProvider head={head}>
      <App />
    </UnheadProvider>
  </StrictMode>
);
