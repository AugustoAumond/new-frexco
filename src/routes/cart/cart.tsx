
export default function Cart(){
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full max-w-[1200px] flex flex-col items-center border-2 gap-5">
                <div>
                    <p className="text-2xl text-orange-500">SEU CARRINHO</p>
                </div>

                <div className="w-full flex flex-col gap-2">
                    <div className="flex justify-between w-full max-w-[700px] h-30 p-5 gap-10  border-2">
                        <img src="./photos_items/greenapple.png" alt="" />

                        <div className="flex flex-col items-center justify-evenly min-h-full">
                            <div>
                                <p>NAME</p>
                            </div>

                            <div>
                                <p>QUANTIDADE</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center justify-between min-h-full">
                            <div>
                                <p>PRICE</p>
                            </div>

                            <div>
                                <p>REMOVER ITEM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}