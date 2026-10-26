import "./globals.css";

export const metadata = {
  title: "FRAME. — Your personal film journal",
  description: "Keep track of everything you love to watch.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
