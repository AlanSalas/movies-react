// StyledComponents
import { InputStyled, SearchContainer } from "../styled/shared";
// Icons
import SearchIcon from "@mui/icons-material/Search";

const InputSearch = () => {
  return (
    <SearchContainer direction="row" alignItems="center">
      <SearchIcon />
      <InputStyled placeholder="Search..." />
    </SearchContainer>
  );
};

export default InputSearch;
