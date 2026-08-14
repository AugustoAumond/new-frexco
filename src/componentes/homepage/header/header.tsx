import { FaCartShopping } from "react-icons/fa6";
import { Search, Sprout } from "lucide-react";
import { Link } from "react-router-dom";
import { useStateContext } from "../../../context/StateContex";

interface HeaderProps {
    setSearch: (e: string) => void;
}

/* Previous header layout kept as reference during visual redesign.
export function HeaderLegacy(
    {
    setSearch
    }:HeaderProps){
    const {productsCart} = useStateContext();

    return (
        <div className="bg-white w-full p-4 bg-primaryColor2 flex items-center justify-center fixed z-10">
            <div className="max-w-[1200px] w-full h-full flex items-center justify-between flex-col gap-4 md:flex-row">
                <p className="text-orange-500 text-3xl"> Direto do campo para a sua <span className="text-[#33375899]"> CASA </span></p>

                <div className="flex justify-end items-center flex-1 w-full h-full max-w-[90%] md:max-w-[50%]  text-primaryColor1 gap-4">
                    <div className="flex flex-1 w-full">
                        <input type="text" className="text-lg w-full border-2 border-primaryColor1 rounded-lg p-1" onChange={(e) => setSearch(e.currentTarget.value)} placeholder="Qual produto você está procurando?"/>
                    </div>

                    <div className="relative flex gap-2 items-start">
                        <Link to={'/cart'}>
                            <div className="flex items-start gap-1">
                                <FaCartShopping className={`size-8 hover:text-orange-500 ${productsCart.length > 0 ? 'text-orange-500' : ''}`}/>
                                <span className="absolute -top-2 -right-2 text-orange-500">{productsCart.length}</span>
                            </div>                           
                        </Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
*/

export function Header({ setSearch }: HeaderProps) {
    const { productsCart } = useStateContext();

    return (
        <header className="fixed inset-x-0 top-0 z-30 border-b border-[#315c46]/10 bg-[#f6f8f2]/85 px-4 py-3 backdrop-blur-lg">
            <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <Link to="/" className="flex items-center gap-2 self-start text-[#18372c] transition hover:text-[#e5872e]">
                    <span className="flex size-9 items-center justify-center rounded-full bg-[#dce9d3]"><Sprout size={20} strokeWidth={2.4}/></span>
                    <span className="font-['Playfair_Display'] text-2xl font-bold tracking-tight">frexco</span>
                    <span className="hidden border-l border-[#18372c]/20 pl-3 text-xs font-medium text-[#597466] sm:inline">do campo para a sua casa</span>
                </Link>
                <div className="flex w-full items-center gap-2 md:max-w-[540px]">
                    <label className="group flex min-w-0 flex-1 items-center gap-2 rounded-full border border-[#315c46]/15 bg-white px-4 py-2.5 shadow-sm transition focus-within:border-[#315c46]/50 focus-within:ring-4 focus-within:ring-[#dce9d3]">
                        <Search size={18} className="shrink-0 text-[#597466] transition group-focus-within:text-[#315c46]" />
                        <input type="text" className="min-w-0 flex-1 bg-transparent text-sm text-[#18372c] outline-none placeholder:text-[#82988b]" onChange={(e) => setSearch(e.currentTarget.value)} placeholder="Busque frutas e sabores"/>
                    </label>
                    <Link to="/cart" aria-label="Abrir carrinho" className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-[#18372c] text-white shadow-lg shadow-[#18372c]/20 transition hover:-translate-y-0.5 hover:bg-[#315c46]">
                        <FaCartShopping className="size-[18px]"/>
                        {productsCart.length > 0 && <span className="absolute -right-1 -top-1 flex size-5 items-center justify-center rounded-full bg-[#f6aa3c] text-[11px] font-bold text-[#18372c]">{productsCart.length}</span>}
                    </Link>
                </div>
            </div>
        </header>
    )
}
