import Countries from './components/Countries/Countries'
import './App.css'
import { Suspense } from 'react'

const fetchCountries =async ()=>{
  const res = await fetch('https://openapi.programming-hero.com/api/all')
  const data = res.json()
  // const countries = data.countries;
  return data;
}


function App() {
  const fetchPromise = fetchCountries();

  return (
    <>
      <Suspense fallback={<h3>Countries Loading....</h3>}>
        <Countries fetchPromise={fetchPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
