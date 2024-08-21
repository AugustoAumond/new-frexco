import { useState } from "react"

export function UserAcess(){
    const [create, setCreate] = useState(false);

    return (
        <div className="w-full h-full flex items-center justify-center">
            <main className="w-full h-full max-w-[700px] max-h-[500px] border-2 border-primaryColor1  bg-primaryColor2 rounded-2xl flex flex-col items-center justify-between p-10 gap-4">
            {create === false &&  (
                <main className="w-full h-full rounded-2xl flex flex-col items-center justify-between gap-4 text-orange-500">
                    <h1 className="text-4xl">
                        Faça o login para acessar sua conta
                    </h1>
    
                    <div className="flex w-full flex-col items-start gap-4">
                        <div className="flex w-full flex-col items-start gap-2">
                            <p className="text-secundaryColor2 text-1xl">USUÁRIO</p>
                            <input className="w-full max-w-[650px] h-10 rounded-lg bg-secundaryColor1 border-secundaryColor2 p-2" type="text" placeholder="Digite seu usuário" />
                        </div>
    
                        <div className="flex w-full flex-col items-start gap-2">
                            <p className="text-secundaryColor2 text-1xl">PASSWORD</p>
                            <input className="w-full max-w-[650px] h-10 rounded-lg bg-secundaryColor1 border-secundaryColor2 p-2" type="text" placeholder="Digite seu password" />
                        </div>
                    </div>
    
                    <div className="flex items-center justify-center w-full gap-4">
                        <button onClick={()=>  setCreate(false)}  className="w-4/5 h-16 bg-secundaryColor1 border-2 border-orange-500 hover:text-primaryColor1 hover:bg-orange-500 rounded-lg" >
                            <p className="text-2x1 text-primaryColor2">ENTRAR</p>
                        </button>

                        <button onClick={()=>  setCreate(true)}  className="w-4/5 h-16 bg-secundaryColor1 border-2 border-orange-500 hover:text-primaryColor1 hover:bg-orange-500 rounded-lg" >
                            <p className="text-2x1 text-primaryColor2">CRIAR CONTA</p>
                        </button>
                    </div>
                </main>
            )}

            {create === true &&  (
                <main className="w-full h-full rounded-2xl flex flex-col items-center justify-between gap-4 text-orange-500">
                    <h1 className="text-4xl">
                        Faça o login para acessar sua conta
                    </h1>
    
                    <div className="flex w-full flex-col items-start gap-4">
                        <div className="flex w-full flex-col items-start gap-2">
                            <p className="text-secundaryColor2 text-1xl">NOVO USUÁRIO</p>
                            <input className="w-full max-w-[650px] h-10 rounded-lg bg-secundaryColor1 border-secundaryColor2 p-2" type="text" placeholder="Digite seu usuário" />
                        </div>
    
                        <div className="flex w-full flex-col items-start gap-2">
                            <p className="text-secundaryColor2 text-1xl">NOVO PASSWORD</p>
                            <input className="w-full max-w-[650px] h-10 rounded-lg bg-secundaryColor1 border-secundaryColor2 p-2" type="text" placeholder="Digite seu password" />
                        </div>

                        <div className="flex w-full flex-col items-start gap-2">
                            <p className="text-secundaryColor2 text-1xl">REPITA PASSWORD</p>
                            <input className="w-full max-w-[650px] h-10 rounded-lg bg-secundaryColor1 border-secundaryColor2 p-2" type="text" placeholder="Digite seu password" />
                        </div>
                    </div>
    
                    <div className="flex items-center justify-center w-full ">
                        <button onClick={()=>  setCreate(false)}  className="w-4/5 h-16 bg-secundaryColor1 border-2 border-orange-500 hover:text-primaryColor1 hover:bg-orange-500 rounded-lg">
                            <p className="text-2x1 text-primaryColor2">CRIAR CONTA</p>
                        </button>
                    </div>
                </main>
            )}
            </main>
        
        </div>
    )
}