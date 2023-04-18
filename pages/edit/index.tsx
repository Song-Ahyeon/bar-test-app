import { Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
    theme,
    Layout, } from 'antd'
import React, { useState } from 'react';

type SizeType = Parameters<typeof Form>[0]['size'];

const Edit = () => {

    const [componentSize, setComponentSize] = useState<SizeType | 'default'>('default');

    const {
        token: { colorBgContainer },
      } = theme.useToken();

      const onFormLayoutChange = ({ size }: { size: SizeType }) => {
        setComponentSize(size);
      };

    const {Content} = Layout;    

    return (<>
    <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ background: colorBgContainer }}>

        <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        style={{ maxWidth: 600 }}
        >
        <Form.Item label="Input">
            <Input />
        </Form.Item>
        <Form.Item label="Select">
            <Select>
            <Select.Option value="demo">Demo</Select.Option>
            </Select>
        </Form.Item>
        <Form.Item label="TreeSelect">
            <TreeSelect
            treeData={[
                { title: 'Light', value: 'light', children: [{ title: 'Bamboo', value: 'bamboo' }] },
            ]}
            />
        </Form.Item>
        <Form.Item label="Cascader">
            <Cascader
            options={[
                {
                value: 'zhejiang',
                label: 'Zhejiang',
                children: [{ value: 'hangzhou', label: 'Hangzhou' }],
                },
            ]}
            />
        </Form.Item>
        <Form.Item label="DatePicker">
            <DatePicker />
        </Form.Item>
        <Form.Item label="InputNumber">
            <InputNumber />
        </Form.Item>
        <Form.Item label="Switch" valuePropName="checked">
            <Switch />
        </Form.Item>
        <Form.Item label="Button">
            <Button>Button</Button>
        </Form.Item>
        </Form>

        </div>
    </Content>


        <p>표지</p>
        <p>제목</p>
        <p>저자</p>
        <p>역자</p>
        <p>출판사</p>
        <p>출판년도</p>
        <p>원제</p>
        <p>간략 설명</p>
        <p>키워드</p>
        <p>연관도서</p>
        <p>추천도서</p>
    </>)
}

export default Edit;