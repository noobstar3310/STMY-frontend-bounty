// import AppWalletProvider from "./components/AppWalletProvider"
// import "./globals.css"
// require("@solana/wallet-adapter-react-ui/styles.css")

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body>
//         <AppWalletProvider>{children}</AppWalletProvider>
//       </body>
//     </html>
//   );
// }
import AppWalletProvider from "./components/AppWalletProvider"
import "./globals.css"
import { Inter } from 'next/font/google'
require("@solana/wallet-adapter-react-ui/styles.css")

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppWalletProvider>{children}</AppWalletProvider>
      </body>
    </html>
  );
}

