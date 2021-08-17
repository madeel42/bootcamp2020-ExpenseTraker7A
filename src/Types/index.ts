export interface DataObj {
    id: number,
    description: string,
    amount: number
}
export interface AllStateVal {
    history: Array<DataObj>
    setInputDescription: Function
    InputDescription: string,
    setInputAmount: Function,
    InputAmount: number,
    setHistory: Function,

}