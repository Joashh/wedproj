import { Geist, Geist_Mono, Lato, Playfair_Display,Libre_Baskerville  } from "next/font/google";
import { Great_Vibes, Dancing_Script, Parisienne, Montserrat, EB_Garamond, Style_Script} from "next/font/google";
import "./globals.css";

const styleScript = Style_Script({
  variable: '--font-style-script',
  subsets: ['latin'],
  weight: '400', // you can adjust weight if needed
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400","700"], // regular and bold
  variable: "--font-libre-baskerville",
});

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // optional, add weights you need
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // choose the weights you need
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

// Wedding fonts
const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
});
const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
  weight: "400",
});
const parisienne = Parisienne({
  variable: "--font-parisienne",
  subsets: ["latin"],
  weight: "400",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700", "900"], 
});

export const metadata = {
  title: "Pat and Cha Wedding",
  description: "Patrixia and Charlo is inviting you!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${styleScript.variable} ${geistSans.variable}  ${geistMono.variable} ${montserrat.variable} ${playfair.variable} ${greatVibes.variable} ${dancing.variable} ${parisienne.variable} ${lato.variable} ${libreBaskerville.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
