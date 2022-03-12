import { DataColumnHiddenTitle, DataColumnTitle } from "./styles";

const DataColumn = ({
  header,
  children
}) => {
  return (
    <div>
      {
        header ?
        <DataColumnTitle>
        {header}
        </DataColumnTitle> :
        <DataColumnHiddenTitle>
          No Header
        </DataColumnHiddenTitle>
      }
        {children}
    </div>
  )
}

export default DataColumn;