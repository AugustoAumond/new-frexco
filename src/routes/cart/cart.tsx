
export default function Cart(){
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full min-h-[800px] max-w-[1200px] flex flex-col items-center gap-20 p-10">
                <div className="flex">
                    <p className="text-4xl text-orange-500">SEU CARRINHO</p>
                </div>

                <div className="flex w-full justify-between">
                    <div className="w-full flex-1 flex flex-col gap-2">
                        <div className="flex justify-between w-full max-w-[700px] h-30 p-5 gap-10  border-b-2">
                            <img src="./photos_items/greenapple.png" alt="" />

                            <div className="flex flex-col items-center justify-evenly min-h-full">
                                <div>
                                    <p className="text-lg text-white">MAÇÃ VERDE</p>
                                </div>

                                <div className="flex items-center gap-2 text-orange-500 font-sans">
                                    QUANTIDADE: <input className="text-white w-10 bg-transparent border-b-2 text-center text-lg"/>
                                </div>
                            </div>

                            <div className="flex flex-col items-center justify-between min-h-full">
                                <div className="text-orange-500 flex gap-2">
                                    PREÇO: <p className="text-white font-mono">15R$</p>
                                </div>

                                <div>
                                    <p className="text-white">REMOVER ITEM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex w-[400px] h-full min-h-[700px]">
                        <div className="border-2 border-orange-500 border-opacity-50 w-full h-full rounded-lg gap-10 p-10 flex flex-col justify-between">
                            <div className="text-2xl text-orange-500">
                                <p className="">ORDEM DE SERVIÇO</p>
                            </div>

                            <div className="flex flex-col gap-2 border-b-2">
                                <div className="flex justify-between">
                                    <p className="text-orange-500">VALOR TOTAL:</p>

                                    <p className="font-sans text-white">100R$</p>
                                </div>
                                
                                <div className="flex justify-between">
                                    <p className="text-orange-500">TAXA DE ENVIO:</p>

                                    <p className="font-sans text-white">50R$</p>
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <p className="text-orange-500">TOTAL:</p>

                                <p className="font-sans text-white">150 R$</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}