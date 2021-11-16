import { CustomCheckbox } from "./styles";

const Checkbox = ({ ...rest }) => {
  return <CustomCheckbox defaultChecked {...rest} />;
};

export default Checkbox;
