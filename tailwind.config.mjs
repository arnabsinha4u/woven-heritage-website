/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        "surface-variant": "var(--color-surface-variant)",
        "surface-low": "var(--color-surface-low)",
        "surface-lowest": "var(--color-surface-lowest)",
        "surface-high": "var(--color-surface-high)",
        "surface-highest": "var(--color-surface-highest)",
        primary: "var(--color-primary)",
        "primary-container": "var(--color-primary-container)",
        secondary: "var(--color-secondary)",
        "secondary-container": "var(--color-secondary-container)",
        tertiary: "var(--color-tertiary)",
        outline: "var(--color-outline)",
        "outline-ghost": "var(--color-outline-ghost)",
        "on-surface": "var(--color-on-surface)",
        "on-surface-variant": "var(--color-on-surface-variant)",
        "on-primary": "var(--color-on-primary)",
        "on-secondary-container": "var(--color-on-secondary-container)"
      },
      fontFamily: {
        headline: ["Noto Serif", "Georgia", "serif"],
        body: ["Plus Jakarta Sans", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      borderRadius: {
        soft: "1rem",
        lounge: "2rem",
        stitched: "2.75rem"
      },
      boxShadow: {
        ambient: "0 32px 60px -32px rgba(28, 28, 25, 0.24)",
        float: "0 28px 50px -30px rgba(145, 71, 43, 0.28)"
      },
      backgroundImage: {
        "primary-wash":
          "linear-gradient(135deg, rgba(145, 71, 43, 0.96), rgba(175, 95, 65, 0.92))",
        parchment:
          "radial-gradient(circle at top, rgba(255, 255, 255, 0.8), rgba(252, 249, 244, 0.95))"
      },
      maxWidth: {
        editorial: "78rem"
      }
    }
  },
  plugins: []
};
