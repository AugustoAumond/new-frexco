import { useEffect, useState } from 'react'
import { Items, ProductsProps } from '../../../object'
import Card from './card/card';
import { setChart } from '../../../storage/storageCart';
import { useStateContext } from '../../../context/StateContex';

interface SearchProps {
    search: string
}

export default function Products(
    {search} : SearchProps, 
){
    const [itens, setItens] = useState<ProductsProps[] >(Items);
    const {productsCart, setProductsCart} = useStateContext();

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

        console.log(productsCart)
    }, [search, productsCart] )

    function AddChart(value: ProductsProps){
        let validation = true;

        let newItem: ProductsProps[] = productsCart;
        newItem.map((item)=>{
            if (item.id === value.id){
                if (item.quantidade && value.quantidade)
                item.quantidade = Number(item.quantidade) + Number(value.quantidade);
                validation = false;
            }
        })

        if (validation === true){
            newItem.push(value);
        }
        
        setChart(newItem);
        setProductsCart(newItem);
    }

    return (
        <div className='flex flex-col items-center justify-center relative p-10 gap-5'>
            <p className='text-orange-500 text-3xl'> CONFIRA NOSSOS PRODUTOS</p>
            <div className='w-full max-w-[1200px] flex justify-evenly gap-4 flex-wrap'>
                {itens?.map((e: any, index: number) =>
                    <Card
                    key={index}
                    AddChart={AddChart}
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