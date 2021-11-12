import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index';
import './App.css';


function App() {
  const account = useSelector((state) => state.account);
  const dispatch = useDispatch();

  const {depositMoney, withdrawMoney} = bindActionCreators(actionCreators, dispatch);

  console.log(withdrawMoney);

  return (
    <div className="App">
      <h1>{account}</h1>
      <button onClick={() => depositMoney(1)}>deposit</button>
      <button onClick={() => withdrawMoney(1)}>withdraw</button>
    </div>
  );
}

export default App;
