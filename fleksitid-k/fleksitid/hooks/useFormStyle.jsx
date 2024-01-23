// Fra MUI DOC
//https://mui.com/material-ui/react-paper/
//
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

export const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
}));
