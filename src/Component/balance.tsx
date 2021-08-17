import React, { useContext } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { globalContext } from './../Context/globalState'
import { AllStateVal } from './../Types/index'
export const Balance = () => {
    const data = useContext<AllStateVal | null>(globalContext)
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                paddingTop: 15,
                '& p': {
                    fontWeight: 'bold'
                }
            }
        }),
    );
    const classes = useStyles();
    const totalBalance: number[] | undefined = data?.history && data?.history.map((item) => {
        return item.amount
    })

    const total = totalBalance && totalBalance.reduce((cur, pre) => {
        return cur + pre
    }, 0)
    return (
        <div className={classes.root}>
            <h3>CURRENT BALANCE</h3>
            <h1>${total}</h1>
        </div>
    )
}
