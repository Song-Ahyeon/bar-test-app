import { Form, Input, Button } from "antd";
import router from "next/router";
import React, { useEffect, useState } from "react";

const SearchInput = () => {
    const { Search } = Input;

    const [searchKeyword, setSearchKeyword] = useState('');

    const onSearch = (value: string) => {
        setSearchKeyword(value);
    }

    useEffect(() => {
        if(!!searchKeyword){
            router.push({
                pathname: '/search',
                query: {keyword: searchKeyword}
            })
        }
    }, [searchKeyword])

    return (<>
    <Search
      placeholder="search"
      enterButton="Search"
      size="large"
      onSearch={onSearch}
    />
    </>)
}

export default SearchInput;