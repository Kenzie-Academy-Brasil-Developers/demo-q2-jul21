import Modal from "../Modal";

const ModalCreateTech = ({ isOpen, setIsOpen }) => {
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <h3>Cadastrar tecnologia</h3>
    </Modal>
  );
};

export default ModalCreateTech;
