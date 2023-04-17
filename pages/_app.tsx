import '@/styles/globals.css'
import './index.css'
import type { AppProps } from 'next/app'
import { Layout } from 'antd'
import LoginModal from '../components/loginModal'
import router from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const { Header, Content, Footer } = Layout;
  
  const gotoMain = () => {
    router.push({
        pathname: '/',
    })
  }
  
  return(
    <Layout>
      <Header style={{display:'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <div className="logo" onClick={gotoMain} style={{cursor: 'pointer'}}/>
        <LoginModal />
      </Header>
      <Component {...pageProps} />
      <Footer style={{ textAlign: 'center', cursor: 'pointer' }}>이용약관 | 개인정보 처리방침 | B.A.R ©2023</Footer>
    </Layout>
  )
}
