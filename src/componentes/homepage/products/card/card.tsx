import { useEffect, useState } from "react"
import { ProductsProps } from "../../../../object"

interface CardProps {
    photo: string
    name: string
    price: number | undefined
    products: ProductsProps
    AddChart: (e1: ProductsProps, quantidade?: number) => void
    id: number
}

export default function Card({
    AddChart,
    name,
    photo,
    price,
    id
    
}:CardProps){
    const [quantidadeProduct, setQuantidadeProduct] = useState<number | undefined>(0);

    useEffect(()=>{
    
    }, [quantidadeProduct] )

    function SetChart(){
        let Item: ProductsProps = {
            id: id,
            name: name,
            photo: photo,
            price: price,
            quantidade: quantidadeProduct
        }
        AddChart(Item)
    }

    return (
    <div className='border-2 w-[200px] h-[300px] flex flex-col justify-between'>
        <div className='w-[100%] h-[125px] flex flex-col items-end overflow-hidden'> 
            <img className='w-full' src={photo} alt="" />
        </div>

        <div className='flex flex-col justify-evenly p-4 gap-4'>
            <div className='flex items-center gap-2'>
                <span className='text-orange-500 text-2xl '>Nome:</span> <p className='text-white text-2xl'> {name}</p>
            </div>

            <div className='text-lg flex w-full gap-2'>
                <span className='text-orange-500 text-2xl '>Valor:</span> <p className='text-white text-2xl'>R$ {price}</p>
            </div>
        </div>

        <div className='flex items-center justify-center gap-2 pb-2'>
        
            <input required type="number" value={quantidadeProduct} onChange={ (e: any) => setQuantidadeProduct(e.currentTarget.value)} placeholder='Quantidade' className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[40%] border-2 border-orange-500 rounded-lg placeholder:text-orange-500  bg-transparent px-1 font-serif text-center' maxLength={3}/>
        

            <button className="w-[40%] p-1/2 bg-secundaryColor1 border-2 border-orange-500 hover:text-primaryColor1 hover:bg-orange-500 rounded-lg">
                <p onClick={() => SetChart() } className="text-2x1 text-orange-500 hover:text-primaryColor1">Adicionar</p>
            </button>
        </div>
    </div>
    )
}