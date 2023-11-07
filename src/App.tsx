import { useEffect, useState } from 'react';
import Header from './components/Header'
import Main from './components/Main'

type Places = {
  'latitude': string,
  'longitude': string,
  'place name': string,
  'state': string,
  'state abbreviation': string
}

export type Data = {
  'country': string,
  'country abbreviation': string,
  'post code': string,
  'places': Array<Places>
}

function App() {
  const [zipcode, setZipcode] = useState<string>('')
  const [search, setSearch] = useState<boolean>(false)
  const [data, setData] = useState<Data | undefined>()
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [errorTxt, setErrorTxt] = useState<TypeError | undefined>()

  useEffect(() => {
    if (search) {
      setLoading(true)
      setError(false)
      fetch(`https://api.zippopotam.us/in/${zipcode}`)
        .then(res => {
          if (res.ok) {
            return res.json()
          }
          throw new Error('Not Found')
        })
        .then(data => {
          setData(data)
          setLoading(false)
          setSearch(false)
        })
        .catch(err => {
          setLoading(false)
          setError(true)
          setSearch(false)
          console.error('There was a problem with the Fetch operation:', err);
          setErrorTxt(err)
        })
    }
  }, [search])

  return (
    <div className='h-screen'>
      <Header zipcode={zipcode} setZip={setZipcode} setSearch={setSearch} setData={setData} setError={setError}/>
      <Main data={data} loading={loading} error={error} errorTxt={errorTxt} />
    </div>
  )
}

export default App
