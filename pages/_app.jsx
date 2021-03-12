import { AnimateSharedLayout } from 'framer-motion';
import '../styles/tailwind.scss';
import '../styles/global.scss';

export default function App({ Component, pageProps }) {
  return (
    <AnimateSharedLayout type='crossfade' suppressHydrationWarning>
      {typeof window === 'undefined' ? null : <Component {...pageProps} />}
    </AnimateSharedLayout>
  );
}
