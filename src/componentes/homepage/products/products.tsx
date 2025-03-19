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
        <div className='flex flex-col items-center justify-center relative p-10 gap-5'>
            <p className='text-orange-500 text-3xl'> CONFIRA NOSSOS PRODUTOS</p>
            <div className='w-full max-w-[1050px] flex justify-evenly gap-4 flex-wrap'>
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
        </div>
    )
}