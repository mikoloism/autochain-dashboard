import '@/libs/normalize.css';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

function AppRenderer({ Component: PageComponent, pageProps }: AppProps) {
	return <PageComponent {...pageProps} />;
}

export default AppRenderer;
