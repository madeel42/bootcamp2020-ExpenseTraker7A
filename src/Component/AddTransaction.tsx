import React, { useContext } from 'react'
import { globalContext } from './../Context/globalState'
import { AllStateVal, DataObj } from './../Types/index'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export const AddTransaction: React.FC = () => {
    const data = useContext<AllStateVal | null>(globalContext)
    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
        data?.setInputDescription((e.currentTarget.value))
    }
    const handleChangeAmount = (e: React.FormEvent<HTMLInputElement>): void => {
        data?.setInputAmount(e.currentTarget.value)
    }
    const handleSubmit = () => {
        data?.setHistory((pre: DataObj[]) => [...pre, {
            id: Math.floor(Math.random() * 100),
            description: data.InputDescription,
            amount: +data?.InputAmount
        }])
    }
    console.log(data?.InputAmount, 'inputamount');

    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                marginTop: 25,
                '& h3': {
                    paddingBottom: 7,
                    borderBottom: '1px solid black'
                },
                '& label': {
                    display: 'inherit',
                    fontWeight: 700,
                    margin: '10px 0'
                },
                '& input': {
                    width: '100%',
                    display: 'block',
                    padding: '10px 0',
                    outline: 'none',
                    fontSize: '16px',
                    borderRadius: '5px'
                },
                '& button': {
                    width: '100%',
                    padding: 10,
                    margin: '10px 0',
                    border: 0,
                    cursor: 'pointer',
                    display: 'block',
                    fontWeight: 700,
                }
            }
        }),
    );
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <h3>Transaction History</h3>
            <div>
                <label>   Description  </label>
                <input type="text" placeholder='Transaction details' value={data?.InputDescription} onChange={handleChange} name="description" />
            </div>
            <div>
                <label>   Amount  </label>
                <input type="number" onChange={handleChangeAmount} value={data?.InputAmount} placeholder='Transaction amount' name="amount" />
            </div>
            <button onClick={handleSubmit}>Add</button>
        </div>
    )
}
