import {  useState } from "react"
import { ProductsProps } from "../../../../object"
import { useStateContext } from "../../../../context/StateContex" 
import { setChart } from "../../../../storage/storageCart"

interface CardProps {
    photo: string
    name: string
    price: number | undefined
    products: ProductsProps
    id: number
}

export default function Card({
    name,
    photo,
    price,
    id
    
}:CardProps){
    const [quantidadeProduct, setQuantidadeProduct] = useState<number | undefined | string>('');
    const {productsCart, updateChart} = useStateContext();

    function SetChart(){
        let Item: ProductsProps = {
            id: id,
            name: name,
            photo: photo,
            price: price,
            quantidade: quantidadeProduct
        }

        const idExiste = productsCart.some((product: any) => product.id === Item.id);

        if (idExiste){
            productsCart.map((product: ProductsProps) => {
                if (product.id === Item.id){
                    product.quantidade =  Number(product.quantidade) + Number(quantidadeProduct);
                }
            });
            setChart(productsCart);
            updateChart(productsCart);
        } else {
            setChart(productsCart ? [...productsCart, Item] : [Item]);
            updateChart(productsCart ? [...productsCart, Item] : [Item]);
        }
        
        setQuantidadeProduct('');
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
        
            <input required type="number" value={`${quantidadeProduct}`} onChange={ (e: any) => setQuantidadeProduct(e.currentTarget.value)} placeholder='Kg' className='[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none w-[40%] border-2 border-orange-500 rounded-lg placeholder:text-orange-500  bg-transparent px-1 font-serif text-center' maxLength={3}/>
        

            <button disabled={quantidadeProduct === ''}  onClick={() => SetChart() } className="w-[40%] p-1/2 bg-secundaryColor1 border-2 border-orange-500 hover:text-primaryColor1 hover:bg-orange-500 rounded-lg">
                <p className="text-2x1 text-orange-500 hover:text-primaryColor1">Adicionar</p>
            </button>
        </div>
    </div>
    )
}