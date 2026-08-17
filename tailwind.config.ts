import type { Config } from "tailwindcss";
import { PluginAPI } from "tailwindcss/types/config";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container by default
        padding: "2rem",
        screens: {
          sm: "100%", // Customize container width on small screens
          md: "100%", // Customize container width on medium screens
          lg: "1024px", // Set custom width for large screens
          xl: "1480px", // Set custom width for extra-large screens
        },
      },
      colors: {
        text_title: "#DB2777",
        text_default: "#000000",
        button_bg: "#DB2777",
        button_hover_bg: "#E30B5D",
        secondary: "#3AB9B4",
        // section_bg: "#FFE4E6",
        section_bg: "#FFFFFF",
        nav_bg: "#e0adb5",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(to top right, #FFE4E6, #FECDD3, #FFE4E6)",
        // 'custom-gradient': 'linear-gradient(to bottom left, #FFE4E6, #FECDD3, #FFE4E6)',
        // 'custom-gradient': 'linear-gradient(to bottom right, #FFE4E6, #FECDD3)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate"),
  function ({ addComponents }: PluginAPI) {
    addComponents({
      ".section-gap": {
        paddingTop: "2rem", // Default padding for all screen sizes
        paddingBottom: "2rem", // Default padding for all screen sizes

        // For small screens (sm)
        "@screen sm": {
          paddingTop: "4rem", // Adjust padding for small screens
          paddingBottom: "4rem",
        },

        // For medium screens (md)
        "@screen md": {
          paddingTop: "6rem", // Adjust padding for medium screens
          paddingBottom: "6rem",
        },

        // For large screens (lg)
        "@screen lg": {
          paddingTop: "8rem", // Adjust padding for large screens
          paddingBottom: "8rem",
        },

        // For extra-large screens (xl)
        "@screen xl": {
          paddingTop: "10rem", // Adjust padding for extra-large screens
          paddingBottom: "10rem",
        },
      },
      ".dashboard-containers": {
        maxWidth: "100%", // Default for all screen sizes
        paddingTop: "4rem", // Default padding for all screen sizes
        paddingBottom: "2rem", // Default padding for all screen sizes
        paddingRight: "1rem", // Default padding for all screen sizes
        paddingLeft: "1rem", // Default padding for all screen sizes
        margin: "0 auto", // Center the container

        // For small screens (sm)
        "@screen sm": {
          maxWidth: "100%", // Full width
          padding: "4rem", // Adjust padding for small screens
        },

        // For medium screens (md)
        "@screen md": {
          maxWidth: "100%", // Medium screen container width
          padding: "2rem", // Adjust padding for medium screens
        },

        // For large screens (lg)
        "@screen lg": {
          maxWidth: "100%", // Larger screen container width
          padding: "3rem",
        },

        // For extra-large screens (xl)
        "@screen xl": {
          maxWidth: "100%", // Maximum width for the container on extra-large screens
          padding: "4rem",
        },
      },
    });
  },
  ],
};
export default config;
