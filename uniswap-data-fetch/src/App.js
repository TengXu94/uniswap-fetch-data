import logo from './logo.svg';
import './App.css';
import { ChainId, Token, WETH, Fetcher } from '@uniswap/sdk';

function App() {
  const chainId = ChainId.MAINNET;
  let tokenAddress = "0x6B175474E89094C44Da98b954EedeAC495271d0F";
  const decimals = 18;

  const DAI = new Token(chainId, tokenAddress, decimals);
  console.log(DAI);


  return (
    <div className="App">
      Hello
    </div>
  );
}

export default App;
