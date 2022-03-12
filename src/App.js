import { AppWrapper, Title, DataWrapper, GenreText, NumText } from './styles';
import { bookDetails } from './constants/bookDetails'; 
import DataColumn from './components/DataColumn';
import DataBar from './components/DataBar';

const App = () => {
  return (
    <AppWrapper>
      <Title>
        {bookDetails.title}
      </Title>
      <DataWrapper>
        <DataColumn header={bookDetails.rowLabel}>
          {
            bookDetails.rows.map(item => 
              <GenreText>
                {item.label}
              </GenreText>
            )
          }
        </DataColumn>
        <DataColumn style={{alignSelf: "start"}}>
          {
            bookDetails.rows.map(item =>
              <DataBar />
            )
          }
        </DataColumn>
        <DataColumn header={bookDetails.numLabel}>
          {
            bookDetails.rows.map(item => 
              <NumText>
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
