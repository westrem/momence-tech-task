import { useDailyFx } from './queries'

function App() {
  const { data, isLoading, isError, isSuccess } = useDailyFx()

  return (
    <div className='App'>
      <h1>Hello Momence</h1>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {isSuccess && (
        <>
          <p>Loaded</p>
          <p>{JSON.stringify(data, null, 2)}</p>
        </>
      )}
    </div>
  )
}

export default App
