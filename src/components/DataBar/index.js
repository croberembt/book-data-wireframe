import { DataBarContainer, DataBarFill } from "./styles";

const DataBar = ({
  fillPercent
}) => {
  return (
    <DataBarContainer>
      <DataBarFill fillPercent={fillPercent}/>
    </DataBarContainer>
  )
}

export default DataBar;