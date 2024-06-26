
import type { Metadata } from "next";
import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import DashboardHeader from "@/components/dashboard/header";
import { ThemeProvider } from "@/components/dashboard/header/navbar/darkmode/themeprovider";
import './nprogress.css';
const inter = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EnginetifAI",
  description: "Generated by create next app",
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
        <Provider>
        {session && <DashboardHeader/>}
        {children}
        </Provider>
        </ThemeProvider>
        </body>
    </html>
  );
}
