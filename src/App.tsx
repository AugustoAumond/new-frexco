import { useEffect, useState } from 'react'
import './App.css'
import { Header } from './componentes/homepage/header/header'
import MainPanel from './componentes/homepage/main-panel/main-panel'
import Products from './componentes/homepage/products/products'
import { useStateContext } from './context/StateContex'
import { getChart } from './storage/storageCart'

export default function App() {
  const [search, setSearch] = useState<string>('');
  const { updateChart} = useStateContext();

  useEffect(()=>{
    let storage = JSON.parse(getChart());
    
    if (storage){
      updateChart([...JSON.parse(storage)]);
    }

  }, [])

  return (
    <div className='w-full h-full flex flex-col gap-10'>
      <Header setSearch={setSearch}/>

      <MainPanel/>

      <Products 
      search={search}
      />
    </div>
  )
}


