import { Inter } from "next/font/google";
import AdminNavBar from "@/components/Admin/Nav/AdminResponsivNavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{ backgroundColor: "white", margin: 0, padding: 0 }}
      >
        <AdminNavBar />
        {children}
      </body>
    </html>
  );
}
