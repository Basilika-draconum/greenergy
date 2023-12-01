import { firaSans } from "@/fonts/fonts";
import "./globals.css";
import Header from "./sections/Header/Header";

const metadata = {
  title: "EcoSolution",
  description:
    "Site says about development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass",
  icons: [
    {
      rel: "icon",
      type: "image/svg",
      url: "/favicon.svg",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
