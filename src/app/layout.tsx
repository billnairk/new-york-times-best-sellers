import Navigation from "../../components/navigation";
import "../../styles/global.css";

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
