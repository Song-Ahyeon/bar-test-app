import { Modal } from "antd"

const LoginModal = (isModalOpen: boolean) => {
    return (
        <Modal title="Basic Modal" open={isModalOpen} >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    )
}

export default LoginModal;