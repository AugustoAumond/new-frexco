import { useEffect, useRef, useState} from "react"

export default function MainPanel(){
    const [msg, setMsg] = useState(false);
    const ref = useRef<HTMLTableCellElement | null>(null)

    useEffect(()=>{
        let count = 0;

        setInterval(()=>{
            if (msg === false){
                if (count < 2){
                    document.querySelector('#wrapper')?.scrollBy(300, 0)
                
                    count = count + 1;
                }
            }   
        }, 2000)
        

    }, [msg])

    function Wheel(event: any){
        let eventDelta: number = 0;
        setMsg(true);

        if (event === undefined){
            eventDelta = 100;
        } else {
            eventDelta = event.deltaY;
        }
    
        if (eventDelta > 0){
            event.target.scrollBy(300, 0)
        } else if (eventDelta < 0) {
            event.target.scrollBy(-300, 0)
        }        
    }

    

    return (
        <div className="flex items-center justify-center relative mt-40">
            {/* AJUSTAR PARA SCROLL OPACITY */}

            <div id="wrapper" className="w-full max-w-[800px] h-[325px] bg-primaryColor2 flex items-center justify-flex-start overflow-x-auto overflow-y-hidden rounded-lg gap-2 [-webkit-overflow-scrolling: touch;] snap-x snap-mandatory scroll-smooth scroll-wrapper relative" onWheel={e => Wheel(e)}>
                <div className="flex items-center justify-center bg-[url(./frutos-panel.jpg)] bg-center bg-cover w-full h-full flex-shrink-0 sticky scroll-smooth snap-start pointer-events-none">
        
                </div>

                <div className="flex items-center justify-center bg-[url(./frutas-colhidas.jpg)] bg-center bg-cover w-full h-full flex-shrink-0 sticky scroll-smooth snap-start pointer-events-none">
                
                </div>

                <div className="flex items-center justify-center bg-[url(./pequeno-agricultor.jpg)] bg-center bg-cover w-full h-full flex-shrink-0 sticky scroll-smooth snap-start pointer-events-none">
                
                </div>
            </div>
        </div>
    )
}