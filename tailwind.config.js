const themes = {
  skin: {
    base: "var(--color-background)",
    primary: "var(--color-primary)",
    secondary: "var(--color-secondary)",
    header: "var(--color-header)",
    gridTemplateColumns: {
      blog: "1fr min(600px, 100%) 1fr",
    },
  },
}

module.exports = {
  content: {
    mode: "all",
    content: [
      "./src/**/*.tsx",
      "./src/**/*.ts",
      "./content/**/*.tsx",
      "./content/**/*.mdx",
    ],
  },
  theme: {
    extend: {
      backgroundColor: themes,
      gradientColorStops: themes,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
