import { useEffect, useState } from 'react'
import { Items, ProductsProps } from '../../../object'

interface SearchProps {
    search: string
}

export default function Products({ search} : SearchProps){
    const [itens, setItens] = useState(Items);

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
    }, [search] )

    return (
        <div className='flex flex-col items-center justify-center relative p-10 gap-5'>
            <p className='text-orange-500 text-3xl'> CONFIRA NOSSOS PRODUTOS</p>
            <div className='w-full max-w-[1200px] flex justify-evenly gap-4 flex-wrap'>
                {itens.map((e: ProductsProps, index) =>
                    <div key={index} className='border-2 w-[200px] h-[300px] flex flex-col justify-between'>
                        <div className='w-[100%] h-[125px] flex flex-col items-end overflow-hidden'> 
                            <img className='w-full' src={e.photo} alt="" />
                        </div>

                        <div className='flex flex-col justify-evenly p-4 gap-4'>
                            <div className='flex items-center gap-2'>
                                <span className='text-orange-500 text-2xl '>Nome:</span> <p className='text-white text-2xl'> {e.name}</p>
                            </div>

                            <div className='text-lg flex w-full gap-2'>
                                <span className='text-orange-500 text-2xl '>Valor:</span> <p className='text-white text-2xl'>R$ {e.price}</p>
                            </div>
                        </div>

                        <div className='flex items-center justify-center gap-2 pb-2'>
                            <button className="w-[40%] p-1/2 bg-secundaryColor1 border-2 border-orange-500 hover:text-primaryColor1 hover:bg-orange-500 rounded-lg">
                                <input type="number" placeholder='Quantidade' className='w-full bg-transparent px-1 text-orange-500 hover:text-primaryColor1 text-center' max={3} />
                            </button>

                            <button className="w-[40%] p-1/2 bg-secundaryColor1 border-2 border-orange-500 hover:text-primaryColor1 hover:bg-orange-500 rounded-lg">
                                <p className="text-2x1 text-orange-500 hover:text-primaryColor1">Adicionar</p>
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}