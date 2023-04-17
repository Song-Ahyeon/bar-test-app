import React from 'react';
import { Card, Layout, theme } from 'antd';
import SearchInput from '@/components/searchInput';

const { Header, Content, Footer } = Layout;

const Home: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="layout">

      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
          <SearchInput />

          <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px auto', height: '500px'}}>
            <div style={{outline: '1px solid black', width: '74%', display: 'flex', alignContent: 'center'}}>
                <p style={{margin: '15px auto', fontSize: 17}}>현재 사람들이 찾는 책이에요</p>
            </div>

            <div style={{outline: '1px solid black', width: '25%'}}>
              <Card title="NOTICE" extra={<a href="#">More</a>} style={{ width: '100%' }}>
              <a style={{fontSize: 19}}>Notice Title 1</a><br />
              </Card>
            </div>
          </div>

          <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px auto'}}>
            <div style={{outline: '1px solid black', width: '50%', display: 'flex', alignContent: 'center', height: '300px'}}> </div>
            <div style={{outline: '1px solid black', width: '49%', display: 'flex', alignContent: 'center', height: '300px'}}> </div>
          </div>

          <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px auto'}}>
            <div style={{outline: '1px solid black', width: '50%', display: 'flex', alignContent: 'center', height: '300px'}}> </div>
            <div style={{outline: '1px solid black', width: '49%', display: 'flex', alignContent: 'center', height: '300px'}}> </div>
          </div>

        </div>
      </Content>
      {/* <Footer style={{ textAlign: 'center', cursor: 'pointer' }}>이용약관 | 개인정보 처리방침 | B.A.R ©2023</Footer> */}
    </Layout>
  );
};

export default Home;