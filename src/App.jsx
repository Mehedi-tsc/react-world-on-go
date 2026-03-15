
import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries'
const countriesData = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/all');
  return res.json();

}
function App() {
  const countriesPromise = countriesData();
  return (
    <>
      <Suspense fallback={<p>Waiting for loading countries......</p>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
