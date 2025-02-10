/* eslint-disable @typescript-eslint/no-explicit-any */
import '../styles/globals.css';  // Importă stilurile globale

// Tipizăm props-ul pentru MyApp
interface MyAppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
