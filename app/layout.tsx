import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "700"], // Add weights you plan to use
	display: "swap",
});

export const metadata: Metadata = {
	title: "Waaffle-inn",
	description: "DElicious waffle and shawarma in halishahar",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			className={`scroll-smooth ${dmSans.className}`}
			lang='en'
		>
			<body>{children}</body>
		</html>
	);
}
