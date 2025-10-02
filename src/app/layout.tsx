import '../styles.css';
export const metadata = {
  title: "Sean Paolo Banza - Portfolio",
  description: "Software Engineer specializing in full-stack development, cloud solutions, and AI/ML",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}