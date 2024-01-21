import "@/styles/globals.css"
import UseClient from "@/component/useClient"
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <UseClient />
    </>
  )
}
