import '@/styles/globals.css'
import Layout from '@/components/layout'
import { ThemeProvider,CssBaseline } from '@mui/material'
import { theme } from '@/shared/theme'
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
