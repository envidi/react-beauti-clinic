/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animate';
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs: "200px",
      // => @media (min-width: 400px) { ... }
      sm: "600px",
      // => @media (min-width: 640px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      xl: "1270px",
      // => @media (min-width: 1280px) { ... }
      xxl: "1370px",
      // => @media (min-width: 1370px) { ... }
      "2xl": "1450px",
      // => @media (min-width: 1440px) { ... }
      "3xl": "1750px",
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // Thêm font Poppins vào đây
        serif: ["Roboto", "sans-serif"], // Thêm font Roboto vào đây
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    colors: {
      border: {
        DEFAULT: "hsl(var(--border))",
        calendarBorder: "var(--calendar-border)",
      },
      input: "hsl(var(--input))",
      shadow: {
        card: "var(--shadow-card)",
      },
      ring: "hsl(var(--ring))",
      background: {
        DEFAULT: "hsl(var(--background))",
        main: "#ffffff",
      },
      foreground: {
        DEFAULT: "hsl(var(--foreground))",
      },
      primary: {
        DEFAULT: "hsl(var(--primary))",
        mainColor: "#091156",
        textColor: "#8b8b8b",
        footerColor: "#172176",
        slogan : "#ABB4FF",
        treatment : "#CACACA"
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        mainColor: "#ff64ae",
        footerColor: "#0d165c",
        cardHome2: "#E2E2E2",
        hoverCardHome: "#9BA2E0",
        secondNav : '#D8DCFF'
      },
     
    },
  },
  plugins: [animate],
};
