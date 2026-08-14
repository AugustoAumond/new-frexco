import { useEffect, useState } from "react";
import { useMemo } from "react";
import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../context/StateContex"
import { setChart } from "../../storage/storageCart";

export function CartLegacy(){
    const {productsCart, updateChart} = useStateContext();
    const [valorTotal, setValorTotal] = useState(0);

    useEffect(()=>{
        productsCart.forEach((item: any) => {
            setValorTotal(valorTotal + (item.quantidade*item.price));
        });
    }, [])

    function deleteItem(id: number){
        let newItem: any = [];
        
        productsCart.forEach((element: any) => {
            if (id !== element.id){
                newItem.push(element);
            }
        });

        setChart(newItem);
        updateChart(newItem)
    }
    

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full min-h-[800px] max-w-[1200px] flex flex-col items-center gap-10 p-10">
                <div className="flex">
                    <p className="text-4xl text-orange-500">SEU CARRINHO</p>
                </div>
                {productsCart?.map((item: any)=>(
                    <div key={item.id}  className="flex w-full justify-between">
                        <div className="w-full flex-1 flex flex-col gap-2">
                            <div className="flex justify-between w-full max-w-[700px] h-30 p-5 gap-10  border-b-2">
                                <img className="w-[150px] h-[120px]" src={item.photo} alt="" />

                                <div className="flex flex-col items-center justify-evenly min-h-full">
                                    <div>
                                        <p className="text-lg text-white">{item.name}</p>
                                    </div>

                                    <div className="flex items-center gap-2 text-orange-500 font-sans">
                                        QUANTIDADE: <input value={item.quantidade} className="text-white w-10 bg-transparent border-b-2 px-2 text-center text-lg"/> Kg
                                    </div>
                                </div>

                                <div className="flex flex-col items-center justify-between min-h-full">
                                    <div className="text-orange-500 flex gap-2">
                                        PREÇO: <p className="text-white font-mono">{item.price*item.quantidade} R$</p>
                                    </div>

                                    <div onClick={() => deleteItem(item.id)}>
                                        <p className="text-white">REMOVER ITEM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                </div>

                <div className="flex w-[400px] h-[400px]">
                    <div className="border-2 border-orange-500 border-opacity-50 w-full h-full rounded-lg gap-10 p-10 flex flex-col justify-between">
                        <div className="text-2xl text-orange-500">
                            <p className="">ORDEM DE SERVIÇO</p>
                        </div>

                        <div className="flex flex-col gap-2 border-b-2">
                            <div className="flex justify-between">
                                <p className="text-orange-500">VALOR TOTAL:</p>

                                <p className="font-sans text-white">{valorTotal} R$</p>
                            </div>
                            
                            <div className="flex justify-between">
                                <p className="text-orange-500">TAXA DE ENVIO:</p>

                                <p className="font-sans text-white">50R$</p>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <p className="text-orange-500">TOTAL:</p>

                            <p className="font-sans text-white">{valorTotal + 50} R$</p>
                        </div>

                    </div>
                </div>

        </div>
    )
}

const formatCurrency = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
});

export default function Cart(){
    const { productsCart, updateChart } = useStateContext();
    const products = productsCart ?? [];
    const subtotal = useMemo(
        () => products.reduce((total: number, item: any) => total + Number(item.price ?? 0) * Number(item.quantidade ?? 0), 0),
        [products],
    );
    const shipping = subtotal > 0 ? 50 : 0;

    function updateQuantity(id: number, value: number) {
        const nextProducts = products.map((item: any) => item.id === id
            ? { ...item, quantidade: Math.max(0.1, value) }
            : item,
        );
        setChart(nextProducts);
        updateChart(nextProducts);
    }

    function deleteItem(id: number) {
        const nextProducts = products.filter((item: any) => item.id !== id);
        setChart(nextProducts);
        updateChart(nextProducts);
    }

    return (
        <main className="min-h-screen bg-[#f6f8f2] px-4 pb-16 pt-28 sm:px-6 sm:pt-32">
            <div className="mx-auto w-full max-w-[1200px]">
                <Link to="/" className="inline-flex items-center gap-2 text-sm font-bold text-[#597466] transition hover:text-[#18372c]">
                    <ArrowLeft size={17} /> Continuar comprando
                </Link>

                <div className="mb-8 mt-6 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#e5872e]">Seu pedido</p>
                        <h1 className="mt-2 font-['Playfair_Display'] text-4xl font-bold tracking-tight text-[#18372c] sm:text-5xl">Carrinho de compras</h1>
                    </div>
                    <p className="text-sm text-[#597466]">{products.length} {products.length === 1 ? "item selecionado" : "itens selecionados"}</p>
                </div>

                {products.length === 0 ? (
                    <section className="flex min-h-[420px] flex-col items-center justify-center rounded-[2rem] border border-dashed border-[#315c46]/25 bg-white px-6 text-center">
                        <span className="flex size-16 items-center justify-center rounded-full bg-[#edf3e7] text-[#315c46]"><ShoppingBag size={28}/></span>
                        <h2 className="mt-5 font-['Playfair_Display'] text-3xl font-bold text-[#18372c]">Seu carrinho esta vazio.</h2>
                        <p className="mt-2 max-w-sm text-sm leading-6 text-[#597466]">Escolha frutas frescas para montar um pedido cheio de sabor.</p>
                        <Link to="/" className="mt-7 rounded-xl bg-[#18372c] px-5 py-3 text-sm font-bold text-[#fffdf8] transition hover:bg-[#315c46]">Ver produtos</Link>
                    </section>
                ) : (
                    <div className="grid gap-7 lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start">
                        <section className="overflow-hidden rounded-[2rem] border border-[#315c46]/10 bg-white shadow-sm">
                            <div className="border-b border-[#315c46]/10 px-5 py-4 text-xs font-bold uppercase tracking-[0.16em] text-[#597466] sm:px-7">Produtos escolhidos</div>
                            <div className="divide-y divide-[#315c46]/10 px-5 sm:px-7">
                                {products.map((item: any) => {
                                    const quantity = Number(item.quantidade) || 0;
                                    const unitPrice = Number(item.price) || 0;

                                    return (
                                        <article key={item.id} className="grid gap-4 py-5 sm:grid-cols-[112px_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:py-6">
                                            <div className="flex h-28 items-center justify-center overflow-hidden rounded-2xl bg-[#edf3e7] p-3">
                                                <img src={item.photo} alt={item.name} className="h-full w-full object-contain" />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#82988b]">Produto fresco</p>
                                                <h2 className="mt-1 font-['Playfair_Display'] text-3xl font-bold text-[#18372c]">{item.name}</h2>
                                                <p className="mt-1 text-sm text-[#597466]">{formatCurrency.format(unitPrice)} por kg</p>
                                                <div className="mt-4 inline-flex items-center rounded-xl border border-[#315c46]/15 bg-[#f6f8f2] p-1">
                                                    <button onClick={() => updateQuantity(item.id, quantity - 0.5)} aria-label={`Diminuir ${item.name}`} className="flex size-8 items-center justify-center rounded-lg text-[#315c46] transition hover:bg-[#dce9d3]"><Minus size={15}/></button>
                                                    <span className="w-16 text-center text-sm font-bold text-[#18372c]">{quantity.toFixed(1)} kg</span>
                                                    <button onClick={() => updateQuantity(item.id, quantity + 0.5)} aria-label={`Aumentar ${item.name}`} className="flex size-8 items-center justify-center rounded-lg text-[#315c46] transition hover:bg-[#dce9d3]"><Plus size={15}/></button>
                                                </div>
                                            </div>
                                            <div className="flex items-end justify-between gap-4 sm:h-full sm:flex-col sm:items-end">
                                                <p className="text-lg font-bold text-[#18372c]">{formatCurrency.format(unitPrice * quantity)}</p>
                                                <button onClick={() => deleteItem(item.id)} className="inline-flex items-center gap-2 text-sm font-bold text-[#b85d42] transition hover:text-[#8e3c28]"><Trash2 size={16}/> Remover</button>
                                            </div>
                                        </article>
                                    )
                                })}
                            </div>
                        </section>

                        <aside className="rounded-[2rem] bg-[#18372c] p-6 text-[#fffdf8] shadow-xl shadow-[#18372c]/15 lg:sticky lg:top-28">
                            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f7c96e]">Resumo do pedido</p>
                            <div className="mt-7 space-y-4 border-b border-white/15 pb-6 text-sm">
                                <div className="flex justify-between text-[#d5dfcd]"><span>Subtotal</span><span>{formatCurrency.format(subtotal)}</span></div>
                                <div className="flex justify-between text-[#d5dfcd]"><span>Entrega</span><span>{formatCurrency.format(shipping)}</span></div>
                            </div>
                            <div className="mt-6 flex items-end justify-between gap-4"><span className="font-['Playfair_Display'] text-2xl font-bold">Total</span><span className="text-2xl font-bold text-[#f7c96e]">{formatCurrency.format(subtotal + shipping)}</span></div>
                            <button className="mt-7 w-full rounded-xl bg-[#f6aa3c] px-4 py-3.5 text-sm font-bold text-[#18372c] transition hover:bg-[#f7c96e]">Finalizar pedido</button>
                            <p className="mt-4 text-center text-xs leading-5 text-[#b8c8b5]">Entrega calculada para sua regiao.</p>
                        </aside>
                    </div>
                )}
            </div>
        </main>
    )
}
