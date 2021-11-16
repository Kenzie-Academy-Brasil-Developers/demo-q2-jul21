import { styled } from "@mui/material/styles";
import MaterialCheckbox from "@mui/material/Checkbox";

export const CustomCheckbox = styled(MaterialCheckbox)(({ theme }) => ({
  color: theme.primary.main,
  "&.Mui-checked": {
    color: theme.primary.main,
  },
}));
