import React, { useContext } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { globalContext } from './../Context/globalState'
import { AllStateVal } from './../Types/index'
export const History = () => {
    const history = useContext<AllStateVal | null>(globalContext)
    console.log(history, 'his')
    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            root: {
                marginTop: 25,
                position: 'relative',
                cursor: 'pointer',
                '& ul': {
                    listStyle: 'none',
                    padding: '10px 10px',
                    display: 'flex',
                    background: 'aliceblue',
                    justifyContent: 'space-between',
                    boxShadow: '0px 2px 6px 2px grey',
                    '&:hover > button': {
                        opacity: 1,
                    }
                },


            },
            dellButton: {
                position: "absolute",
                left: '-25px',
                opacity: 0,


            }
        }),
    );
    const classes = useStyles();
    const handleDel = (e: number) => {
        const dell = history?.history.filter(item => {
            return item.id !== e
        })
        history?.setHistory(dell)
    }
    return (
        <div className={classes.root}>
            <h3>Transaction History</h3>
            {history?.history && history.history.length ? history.history.map((item => {
                return <div key={item.id}>
                    <ul>
                        <li>{item.description}</li>
                        <li>{item.amount > 0 ? '+' : '-'}${Math.abs(item.amount)}</li>
                        <button className={classes.dellButton} onClick={() => handleDel(item.id)}>x</button>
                    </ul>
                </div>
            })) : <p>There is no transaction yet</p>}

        </div>
    )
}
