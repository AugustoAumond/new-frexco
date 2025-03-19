import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useStateContext } from "../../../context/StateContex";

interface HeaderProps {
    setSearch: (e: string) => void;
}

export function Header(
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