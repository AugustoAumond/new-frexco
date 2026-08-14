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
    <div className='min-h-screen overflow-hidden bg-[#f6f8f2]'>
      <Header setSearch={setSearch}/>

      <MainPanel/>

      <Products 
      search={search}
      />

      <footer className="mt-8 bg-[#18372c] px-6 py-10 text-[#f7f2e8]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-['Playfair_Display'] text-3xl font-bold">Frexco</p>
            <p className="mt-1 text-sm text-[#d5dfcd]">Colhido com cuidado. Entregue com frescor.</p>
          </div>
          <p className="text-sm text-[#d5dfcd]">Produtos selecionados diretamente do campo.</p>
        </div>
      </footer>
    </div>
  )
}


