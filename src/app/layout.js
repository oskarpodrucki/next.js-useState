import "@/styles/globals.css"
import Header from "@/components/Header"

export const metadata = {
  title: "next.js-reusable-components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
