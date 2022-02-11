import SearchIcon from "@mui/icons-material/Search";
import { InputStyled, SearchContainer } from "../styled/shared";

const InputSearch = () => {
  return (
    <SearchContainer direction="row" alignItems="center">
      <SearchIcon />
      <InputStyled placeholder="Search..." />
    </SearchContainer>
  );
};

export default InputSearch;
