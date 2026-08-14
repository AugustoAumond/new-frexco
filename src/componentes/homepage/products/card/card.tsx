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
    <article className='group flex min-h-[390px] flex-col overflow-hidden rounded-3xl border border-[#315c46]/10 bg-white p-3 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#315c46]/10'>
        <div className='relative h-[185px] overflow-hidden rounded-2xl bg-[#edf3e7]'>
            <img className='h-full w-full object-contain p-5 transition duration-500 group-hover:scale-110' src={photo} alt={name} />
            <span className='absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#315c46] shadow-sm'>Fresco</span>
        </div>

        <div className='flex flex-1 flex-col px-2 pb-1 pt-5'>
            <div className='flex items-start justify-between gap-2'>
                <div>
                    <p className='text-xs font-semibold uppercase tracking-[0.16em] text-[#82988b]'>Direto do campo</p>
                    <h3 className="mt-1 font-['Playfair_Display'] text-3xl font-bold text-[#18372c]">{name}</h3>
                </div>
                <p className='whitespace-nowrap pt-1 text-lg font-bold text-[#315c46]'>R$ {price?.toFixed(2).replace('.', ',')}</p>
            </div>
            <p className='mt-1 text-sm text-[#597466]'>Preco por quilograma</p>
        </div>

        <div className='flex items-center gap-2 border-t border-[#315c46]/10 px-2 pt-4'>
            <label className='flex h-11 w-[76px] items-center rounded-xl border border-[#315c46]/15 bg-[#f6f8f2] px-2 focus-within:border-[#315c46]'>
                <input required min="0.1" step="0.1" type="number" value={`${quantidadeProduct}`} onChange={ (e: any) => setQuantidadeProduct(e.currentTarget.value)} placeholder='Kg' aria-label={`Quantidade de ${name} em quilogramas`} className='[appearance:textfield] w-full bg-transparent text-center text-sm font-semibold text-[#18372c] outline-none placeholder:text-[#82988b] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none'/>
                <span className='text-xs text-[#597466]'>kg</span>
            </label>
            <button disabled={quantidadeProduct === ''} onClick={() => SetChart() } className="h-11 flex-1 rounded-xl bg-[#18372c] px-3 text-sm font-bold text-[#fffdf8] shadow-md shadow-[#18372c]/15 transition hover:bg-[#315c46] disabled:cursor-not-allowed disabled:bg-[#b9c8b4] disabled:shadow-none">
                Adicionar
            </button>
        </div>
    </article>
    )
}
