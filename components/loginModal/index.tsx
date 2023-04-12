import { Button, Checkbox, Form, Input, Modal } from "antd"
import { LogoutOutlined } from '@ant-design/icons'
import { useState } from "react";

const LoginModal = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

    return (
      <>
      <Button type="primary" onClick={showModal}>
        <LogoutOutlined />로그인 / 회원가입
      </Button>
      <Modal title="Login" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
        cancelButtonProps={{ style: {display: 'none'}}} okButtonProps={{ style: {display: 'none'}}}
      >

      <Form
          name="basic"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 16 }}
          style={{ maxWidth: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px 5px 0' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <div style={{width: '80%'}}>
            <Form.Item
              label="Username"
              name="username"
              rules={[{ required: true, message: 'id를 입력하세요' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: '비밀번호를 입력하세요' }]}
            >
              <Input.Password />
            </Form.Item>
          </div>

          <Form.Item style={{width: '15%'}}>
            <Button type="primary" htmlType="submit" style={{color: 'black', outline: '1px solid black', width: '100%'}}>
              Login
            </Button>
          </Form.Item>
        </Form>
        
        <div>
          <p style={{textAlign: 'center', cursor: 'pointer'}}>아이디/비밀번호 찾기 | 회원가입</p>
        </div>
        
      </Modal>
    </>
    )
}

export default LoginModal;