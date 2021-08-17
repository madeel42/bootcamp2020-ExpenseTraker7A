import React, { useContext } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { globalContext } from './../Context/globalState'
import { AllStateVal } from './../Types/index'
export const Summary = () => {
    const data = useContext<AllStateVal | null>(globalContext)
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                display: 'flex',
                justifyContent: 'space-between',
                padding: 18,
                boxShadow: '0px 2px 3px -1px grey',
                '& div': {
                    flex: '1 1',
                    '& h3': {
                        margin: '11px 0px 1px'
                    }
                },
                '& div:first-child': {
                    borderRight: '1px solid red'
                }
            }
        }),
    );
    const totalAMount: number[] | undefined = data?.history.map((item) => {
        return item.amount
    })
    const filterIncome: number[] | undefined = totalAMount && totalAMount.filter(item => {
        return item > 0
    })
    const filterExpense: number[] | undefined = totalAMount && totalAMount.filter(item => {
        return item < 0
    })
    var totalncome = filterIncome && filterIncome.reduce(function (a, b) { return a + b; }, 0);
    var totalExpense = filterExpense && filterExpense.reduce(function (a, b) { return a - b; }, 0);
    // console.log(totalExpense,'totalncome')

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>
                <h3>INCOME</h3>
                <p>${totalncome}</p>
            </div>
            <div>
                <h3>EXPENSE</h3>
                <p>${totalExpense}</p>
            </div>
        </div>
    )
}
