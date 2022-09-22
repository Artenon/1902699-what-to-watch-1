import MainContent from '../../pages/mainContent/mainContent';

type AppProps = {
  data: {
    name: string,
    genre: string,
    year: number
  }
}

function App({data} : AppProps): JSX.Element {
  return (
    <MainContent
      name={data.name}
      genre={data.genre}
      year={data.year}
    />
  );
}

export default App;
