export function getChart(){
    return JSON.stringify(localStorage.getItem('Chart'))
}

export function setChart(value: any){
    return localStorage.setItem('Chart', JSON.stringify(value));
}

export function deleteChart(){
    return localStorage.removeItem('Chart');
}