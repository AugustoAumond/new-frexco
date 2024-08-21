import { useState } from "react"

export function NewProduct(){
    const [file, setFile] = useState<EventTarget>();

    function Selected () {
        console.log(file)
    }

    return (
        <div className="w-full h-screen flex items-center justify-center p-6">
            <main className="w-full h-full max-h-[500px] max-w-[700px] border-2 border-primaryColor1  bg-primaryColor2 rounded-2xl flex flex-col items-center justify-between p-10 gap-4">
                <main className="w-full h-full rounded-2xl flex flex-col items-center justify-between gap-4 text-orange-500">
                    <h1 className="text-4xl text-secundaryColor2">
                        Cadastrar novo produto
                    </h1>

                    <div className="flex w-full flex-col items-start gap-4">
                        <div className="flex w-full flex-col items-start gap-2">
                            <p className="text-secundaryColor2 text-1xl">NOME DA FRUTA/LEGUMES</p>
                            <input className="w-full max-w-[650px] h-10 rounded-lg bg-secundaryColor1 border-secundaryColor2 p-2" type="text" placeholder="Nome da Fruta ou Legume" />
                        </div>

                        
                        <div className="flex w-full flex-col items-start gap-2">
                            <p className="text-secundaryColor2 text-1xl">PREÇO</p>
                            <input className="w-full max-w-[650px] h-10 rounded-lg bg-secundaryColor1 border-secundaryColor2 p-2" type="text" placeholder="Digite seu usuário" />
                        </div>

                        <div className="flex w-full flex-col items-start gap-2">
                            <p className="text-secundaryColor2 text-1xl">IMAGEM</p>
                            <input onSelect={(e) => setFile(e.currentTarget) } className="w-full max-w-[650px] h-10 rounded-lg bg-secundaryColor1 border-secundaryColor2 p-2" type="file" placeholder="Escolha a image do produto" />
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full">
                        <button onClick={() => Selected()} className="w-4/5 h-16  border-2 border-orange-500 hover:text-primaryColor1 hover:bg-orange-500 rounded-lg" >
                            <p className="text-2x1 text-primaryColor2">ENTRAR</p>
                        </button>
                    </div>
                </main>
            </main>
        </div>
    )
}