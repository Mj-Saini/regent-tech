/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // Enable JIT mode (optional)
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-bgIMg":
          "url('/assets/images/webp/landing-page-hero-bg-img.webp')",
        Star_bg: "url('/assets/images/png/starts-bg-img.png')",
        "header-gradient":
          " linear-gradient(90deg, rgba(255, 255, 255, 0.2) 0%, rgba(153, 153, 153, 0.2) 100%)",
        "gray-bg-gradient":
          " linear-gradient(94.9deg, #171717 -62.71%, #323335 -62.69%, rgba(90, 90, 90, 0.2) 47.9%, #171717 160.85%)",

        "marged-gradient":
          " linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 45.09%, rgba(0, 0, 0, 0) 100%)",
        "card-hover-gradient":
          " linear-gradient(90deg, #0099A1 0%, #C6F0FF 22.45%, rgba(180, 243, 255, 0.9) 73.6%, #176DB4 99.27%)",
        gradient_green:
          "linear-gradient( 0deg, #000000 0%, rgba(8, 8, 8, 0) 100%)",

        card_hover_gradient:
          "linear-gradient(90deg, rgba(0, 153, 161, 0.5) 0%, rgba(23, 109, 180, 0.5) 99.27%)",
      },
      boxShadow: {
        "custom-shadow": "0px 0px 7.1px 0px #00000040",
      },
    },
  },
  plugins: [],
};
