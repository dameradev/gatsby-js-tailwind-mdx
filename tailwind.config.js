const themes = {
  primary: "var(--color-primary)",
  secondary: "var(--color-secondary)",
  darkBlue: "var(--color-dark-blue)",
  gridTemplateColumns: {
    blog: "1fr min(600px, 100%) 1fr",
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
      typography: theme => ({
        DEFAULT: {
          css: {
            color: theme("colors.white"),
            a: {
              color: theme("colors.white"),
              "&:hover": {
                color: theme("colors.anchor-hover"),
              },
            },
            "h1,h2,h3,h4,h5,h6,tr,strong,code,p,ul,ol,th": {
              color: theme("colors.white"),
            },
          },
        },
      }),
      backgroundColor: themes,
      colors: themes,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
