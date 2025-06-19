import { useState } from 'react'
import { Input } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'


function App() {
  const [amount, setAmount] = useState(0)
  const [fromCurrency, setFromCurrency] = useState('inr')
  const [toCurrency, setToCurrency] = useState('usd')
  const [convertedAmount, setConvertedAmount] = useState(0)


  const currencyInfo = useCurrencyInfo(fromCurrency)
  const currencyOptions = Object.keys(currencyInfo)

  const swap = () => {
    setFromCurrency(toCurrency)
    setToCurrency(fromCurrency)
    // setConvertedAmount(amount)
    // setAmount(convertedAmount)
  }

  const conversion = () => {
    setConvertedAmount(amount * currencyInfo[toCurrency])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/259165/pexels-photo-259165.jpeg')`,
      }}
    >
      <div className="w-full">
      {/* <div className="w-full flex justify-end">
        <div className=' w-full max-w-md mx-auto bg-cover bg-no-repeat' style ={{backgroundImage: `url('https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg')`}} ></div> */}
        <div className=" w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              conversion()

            }}
          >
            <div className="w-full mb-1">
              <Input
                label="From"
                amount ={amount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setFromCurrency(currency)}
                onAmountChange={(amt) => setAmount(amt)}
                selectCurrency={fromCurrency}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input
                label="To"
                amount ={convertedAmount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setToCurrency(currency)}
                selectCurrency={toCurrency}
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {fromCurrency.toUpperCase()} to {toCurrency.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
