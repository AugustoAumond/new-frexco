
interface Header {
    setSearch: (e: string) => void;
}

export function Header({setSearch}:Header){
    return (
        <div className="bg-white w-full p-4 bg-primaryColor2 flex items-center justify-center">
            <div className="max-w-[1200px] w-full h-full flex items-center justify-between">
                <p className="text-orange-500 text-3xl"> Direto do campo para a sua <span className="text-[#33375899]"> CASA </span></p>

                <div className="flex justify-end items-center flex-1 w-full h-full max-w-[50%]  text-orange-500 gap-4">
                    <div className="flex flex-1 w-full">
                        <input type="text" className="text-lg w-full border-2 border-orange-500 rounded-lg p-1" onChange={(e) => setSearch(e.currentTarget.value)} placeholder="Qual produto você está procurando?"/>
                    </div>

                    <div>
                        USUÁRIO
                    </div>
                    
                </div>
            </div>
        </div>
    )
}