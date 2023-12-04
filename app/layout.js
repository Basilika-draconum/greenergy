import { firaSans } from "@/fonts/fonts";
import { Toaster } from "react-hot-toast";
import Header from "./sections/Header/Header";
import "./globals.css";

export const metadata = {
  title: "EcoSolution",
  description:
    "Site says about development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass",
  icons: [
    {
      rel: "icon",
      type: "image/svg",
      media: "(prefers-color-scheme: dark)",
      url: "/icons/favicon.svg",
    },
    {
      rel: "icon",
      type: "image/svg",
      media: "(prefers-color-scheme: light)",
      url: "/icons/favicon.svg",
    },
  ],
  openGraph: {
    title: "EcoSolution",
    description:
      "Site says about development and implementation of renewable non-polluting energy sources, generating power generation using energy wind, sun, water, biomass",
    type: "website",
    siteName: "EcoSolution",
    images: [{ url: "/ogp/main.png" }, { url: "/ogp/main.jpg" }],
    url: "https://ecosolution-red.vercel.app/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={firaSans.className}>
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
