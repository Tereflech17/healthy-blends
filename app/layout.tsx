import "./global.css";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Healthy Blends - Premium Health Drinks",
  description:
    "Discover the power of natural pine tea for weight loss and energy boost",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
