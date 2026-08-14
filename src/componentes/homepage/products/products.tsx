import { useEffect, useState } from 'react'
import { Items, ProductsProps } from '../../../object'
import Card from './card/card';
import { useStateContext } from '../../../context/StateContex';

interface SearchProps {
    search: string
}

export default function Products(
    {search} : SearchProps, 
){
    const [itens, setItens] = useState<ProductsProps[] >(Items);
    const {productsCart} = useStateContext();

    useEffect(()=>{
        if (search !== ''){
            let newList:any = [];

            Items.forEach((e)=>{
                if (e.name.toUpperCase().includes(search.toUpperCase()))  {
                    newList.push(e);
                }
            })
            setItens(newList)
        } else {
            setItens(Items)
        }
    }, [search, productsCart] )

    return (
        <section className='relative mx-auto w-full max-w-[1280px] px-4 pb-20 pt-10 sm:px-6'>
            <div className='mb-10 flex flex-col gap-3 border-b border-[#315c46]/15 pb-6 sm:flex-row sm:items-end sm:justify-between'>
                <div>
                    <p className='text-xs font-bold uppercase tracking-[0.2em] text-[#e5872e]'>Selecao da estacao</p>
                    <h2 className="mt-2 font-['Playfair_Display'] text-4xl font-bold tracking-tight text-[#18372c] sm:text-5xl">Sabores que vem da terra.</h2>
                </div>
                <p className='text-sm text-[#597466]'>{itens.length} {itens.length === 1 ? 'produto encontrado' : 'produtos encontrados'}</p>
            </div>
            <div className='grid grid-cols-1 gap-5 min-[480px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {itens?.map((e: any, index: number) =>
                    <Card
                    key={index}
                    id={e.id}
                    name={e.name}
                    photo={e.photo}
                    price={e.price}
                    products={e}
                    />
                )}

            </div>
            {itens.length === 0 && <div className="rounded-3xl border border-dashed border-[#315c46]/25 bg-white px-6 py-16 text-center text-[#597466]">Nenhum produto encontrado. Tente outro termo.</div>}
        </section>
    )
}
