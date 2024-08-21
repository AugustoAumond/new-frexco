import { useState } from 'react'
import './App.css'
import { Header } from './componentes/homepage/header/header'
import MainPanel from './componentes/homepage/main-panel/main-panel'
import Products from './componentes/homepage/products/products'

export default function App() {
  const [search, setSearch] = useState<string>('');

  return (
    <div className='w-full h-full flex flex-col gap-10'>
      <Header setSearch={setSearch}/>

      <MainPanel/>

      <Products search={search}/>
    </div>
  )
}


