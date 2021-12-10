import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChainId, Token, WETH, Fetcher, Route } from '@uniswap/sdk';
async function getPair(token1, token2) {
	const pair = await Fetcher.fetchPairData(token1, token2);
	return pair
}

const chainId = ChainId.MAINNET;
let tokenAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
const decimals = 18;

const DAI = new Token(chainId, tokenAddress, decimals);
console.log(DAI);

const USDC = new Token(ChainId.MAINNET,  "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",  6);


let pair = getPair(DAI, WETH[DAI.chainId])
const DAIUSDCPair = getPair(DAI, USDC)
Promise.all([pair, DAIUSDCPair]).then(([pair, result2]) => {
	console.log(pair);
	const route = new Route([pair, result2], WETH[DAI.chainId]); console.log(route.midPrice.toSignificant(6));
	console.log(route.midPrice.invert().toSignificant(6));
});

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
