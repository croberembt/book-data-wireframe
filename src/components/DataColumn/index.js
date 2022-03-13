import { DataColumnHiddenTitle, DataColumnTitle } from "./styles";

const DataColumn = ({
  header,
  children,
  style
}) => {
  return (
    <div style={style}>
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