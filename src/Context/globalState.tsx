import React, { createContext, ReactNode, useState } from 'react'
import { DataObj, AllStateVal } from './../Types/index'
///Create initial State



export const globalContext = createContext<AllStateVal | null>(null);
const ETrackerData = (): AllStateVal => {
    const [history, setHistory] = useState<DataObj[]>([])
    const [InputDescription, setInputDescription] = useState<string>('')
    const [InputAmount, setInputAmount] = useState<number>(0)
    return {
        history,
        setInputDescription,
        InputDescription,
        InputAmount,
        setInputAmount,
        setHistory
    };
};
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
    const data: AllStateVal = ETrackerData()
    return <globalContext.Provider value={data}>
        {children}
    </globalContext.Provider>
}