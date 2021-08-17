import './App.css';
import { Balance } from './Component/balance'
import { Summary } from './Component/Summary'
import { History } from './Component/History'
import { AddTransaction } from './Component/AddTransaction'
import { GlobalProvider } from './Context/globalState'
function App() {
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <GlobalProvider >
        <Balance />
        <Summary />
        <History />
        <AddTransaction />
      </GlobalProvider>
    </div>
  );
}

export default App;
