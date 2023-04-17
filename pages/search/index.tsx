import SearchInput from '@/components/searchInput';
import SearchResultList from '@/components/searchResultList';
import { Button, Card, Layout, Pagination, theme } from 'antd';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 30px 5px;
`

const {Content} = Layout;

const SearchPage = () => {
    const {
        token: { colorBgContainer },
      } = theme.useToken();

      const searchResult = [
        {title: 'title1', author: 'author1', info: 'infotext1'},
        {title: 'title2', author: 'author2', info: 'infotext2'},
        {title: 'title3', author: 'author3', info: 'infotext3'},
        {title: 'title4', author: 'author4', info: 'infotext4'},
        {title: 'title5', author: 'author5', info: 'infotext5'},
      ]
    return (
        <>
        <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>
            <SearchInput />
            <div style={{margin: '5px 0', display: 'flex'}}>
                <Button style={{marginLeft: 'auto'}}>등록</Button>
            </div>
            <Wrapper>
                {searchResult.map((el: any, idx: number) => (
                    <SearchResultList key={`search_result_${idx}`} props={el} />
                ))}
            </Wrapper>
            <div style={{width: '100%', display: 'flex'}}>
                <div style={{margin: 'auto'}}>
                    <Pagination/>
                </div>
            </div>
        </div>
      </Content>
        </>
    )
}

export default SearchPage;