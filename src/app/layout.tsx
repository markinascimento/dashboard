"use client";

// -> NextJS
import { Poppins } from "next/font/google";

// -> Components
import { Sidebar } from "@/shared/layouts/Sidebar";

// -> CSS Global
import "@/assets/styles/globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-full h-full">
      <body className={`w-full h-full ${poppins.className}`}>
        <div className="bg-background w-full h-full overflow-y-auto ">
          <Sidebar />

          <div
            className="pt-12 px-3 pb-3 flex flex-col flex-1 overflow-y-auto 
            lg:p-4 main-container h-screen"
          >
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
