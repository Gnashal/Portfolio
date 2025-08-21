import { JetBrains_Mono} from "next/font/google";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTranstition from "@/components/StairEffect";
import "./globals.css";

const jetbrainsmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});
export const metadata = {
  title: "Yousif Quirico Ceballos",
  description: "Portfolio of Yousif Quirico Ceballos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={jetbrainsmono.variable}>
        <Header />
        <StairTranstition/>
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>

  );
}