import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      mobile: "360px",
      tab: "500px",
      desk: "1280px",
    },
    extend: {
      colors: {
        neutral: {
          50: "#F7F7F7",
          100: "#F3F3F3",
          200: "#E2E3E5",
          300: "#C2C3C4",
          400: "#A0A1A3",
          500: "#7C7D7E",
          600: "#5F5F60",
          700: "#424242",
          800: "#1f1f1f",
        },
        white: "#FFFFFF",
        black: "#000000",
        transparent: {
          15: "rgba(0, 0, 0, 0.15)",
          25: "rgba(0, 0, 0, 0.25)",
          50: "rgba(0, 0, 0, 0.50)",
          70: "rgba(0, 0, 0, 0.70)",
        },
        system: {
          error: "#F36C62",
        },
      },
      fontFamily: {
        pretendard: ["PretendardVariable", "sans-serif"],
      },
      fontSize: {
        h1: ["20px", { lineHeight: "1.2", letterSpacing: "-0.4px" }],
        h2: ["18px", { lineHeight: "1.2", letterSpacing: "-0.36px" }],
        h3: ["16px", { lineHeight: "1.2", letterSpacing: "-0.32px" }],
        h4: ["14px", { lineHeight: "1.2", letterSpacing: "-0.28px" }],
        h5: ["13px", { lineHeight: "1.2", letterSpacing: "-0.26px" }],
        h6: ["12px", { lineHeight: "1.2", letterSpacing: "-0.24px" }],
        b1: ["18px", { lineHeight: "1.2", letterSpacing: "-0.36px" }],
        b2: ["16px", { lineHeight: "1.2", letterSpacing: "-0.32px" }],
        b3: ["14px", { lineHeight: "1.2", letterSpacing: "-0.28px" }],
        b4: ["13px", { lineHeight: "1.2", letterSpacing: "-0.26px" }],
        b5: ["12px", { lineHeight: "1.2", letterSpacing: "-0.24px" }],
        b6: ["11px", { lineHeight: "1.2", letterSpacing: "-0.22px" }],
        c1: ["14px", { lineHeight: "1.2", letterSpacing: "-0.28px" }],
        c2: ["13px", { lineHeight: "1.2", letterSpacing: "-0.26px" }],
        c3: ["12px", { lineHeight: "1.2", letterSpacing: "-0.24px" }],
        d1: ["14px", { lineHeight: "1.6", letterSpacing: "-0.28px" }],
        d2: ["12px", { lineHeight: "1.6", letterSpacing: "-0.24px" }],
      },
      fontWeight: {
        semibold: "600",
        medium: "500",
        regular: "400",
      },
    },
  },
  plugins: [],
};
export default config;
