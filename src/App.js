import { AppWrapper, Title, DataWrapper, GenreText, NumText } from './styles';
import { bookDetails } from './constants/bookDetails'; 
import DataColumn from './components/DataColumn';
import DataBar from './components/DataBar';

const App = () => {

  const calculateFill = (numOfBooks) => {
    let countArray = [];
    bookDetails.rows.forEach(item => {
      countArray.push(parseInt(item.count)); 
    }); 
    const max = Math.max(...countArray);
    const fill = (numOfBooks / max) * 100;
    return `${fill}%`;
  }

  return (
    <AppWrapper>
      <Title>
        {bookDetails.title}
      </Title>
      <DataWrapper>
        <DataColumn header={bookDetails.rowLabel}>
          {
            bookDetails.rows.map((item, index) => 
              <GenreText key={index}>
                {item.label}
              </GenreText>
            )
          }
        </DataColumn>
        <DataColumn style={{flexGrow: 1, marginRight: "-5rem"}}>
          {
            bookDetails.rows.map((item, index) =>
              <DataBar fillPercent={calculateFill(item.count)} key={index} />
            )
          }
        </DataColumn>
        <DataColumn header={bookDetails.numLabel}>
          {
            bookDetails.rows.map((item, index) => 
              <NumText key={index}>
                {item.count}
              </NumText>
            )
          }
        </DataColumn>
      </DataWrapper>
    </AppWrapper>
  );
}

export default App;
