import "@splidejs/react-splide/css";

import "./style.css";
import "../styles/tailwind.css";

import { RouterContext } from "next/dist/shared/lib/router-context";
import { action } from "@storybook/addon-actions";

import { devicesViewports } from "./viewports.config";

export const parameters = {
  layout: "centered",
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      date: /Date$/,
    },
  },
  previewTabs: {
    "storybook/docs/panel": { index: -1 },
  },
  viewport: {
    viewports: devicesViewports,
  },
};

export const decorators = [
  (Story) => (
    <RouterContext.Provider
      value={{
        push: (e) => {
          action(`Redirected to`)(e);
          return Promise.resolve();
        },
        replace: () => Promise.resolve(),
        prefetch: () => Promise.resolve(),
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Story />
      </div>
    </RouterContext.Provider>
  ),
];
