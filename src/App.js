import { AppWrapper, Title } from './styles';
import { bookDetails } from './constants/bookDetails'; 

const App = () => {
  return (
    <AppWrapper>
      <Title>
        {bookDetails.title}
      </Title>
    </AppWrapper>
  );
}

export default App;
