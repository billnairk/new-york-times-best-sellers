import Navigation from "../../components/navigation";

export default function Home({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
