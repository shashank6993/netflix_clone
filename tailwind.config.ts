import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  theme: {
    extend: {
      colors: {
        border: "oklch(0.92 0.004 286.32)",
      },
      outlineColor: {
        ring: "oklch(0.705 0.015 286.067)",
      },
      backgroundColor: {
        background: "oklch(1 0 0)",
      },
      textColor: {
        foreground: "oklch(0.141 0.005 285.823)",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities, theme }) => {
      addUtilities({
        ".border-border": {
          borderColor: theme("colors.border"),
        },
        ".outline-ring\\/50": {
          outlineColor: `color-mix(in srgb, ${theme(
            "outlineColor.ring"
          )} 50%, transparent)`,
        },
        ".bg-background": {
          backgroundColor: theme("backgroundColor.background"),
        },
        ".text-foreground": {
          color: theme("textColor.foreground"),
        },
      });
    }),
  ],
};

export default config;
