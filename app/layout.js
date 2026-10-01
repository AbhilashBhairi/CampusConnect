import "./globals.css";

export const metadata = {
  title: "CampusConnect",
  description: "Smart Campus Complaint System",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
