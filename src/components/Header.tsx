import React from "react"
import { Data } from "../App"

type Props = {
  zipcode: string,
  setZip: React.Dispatch<React.SetStateAction<string>>,
  setSearch: React.Dispatch<React.SetStateAction<boolean>>,
  setData: React.Dispatch<React.SetStateAction<undefined | Data>>
}

const Header = ({ zipcode, setZip, setSearch, setData }: Props) => {
  return (
    <header className='h-[30%] header'>
      <div className='image'></div>
      <div className='flex justify-center items-center h-full'>
        <div className='bg-white border-[#194D77] border-2 w-[300px] h-[40px] flex justify-between items-center'>
          <img src="search.png" alt="search" style={{ height: '25px', marginLeft: '5px' }} />
          <input
            id="input"
            className='bg-white px-2 w-full'
            placeholder='Enter Zip code...'
            type="number"
            value={zipcode}
            onChange={(e) => setZip(e.target.value)} />
          {
            zipcode.length > 0 &&
            <div className="w-[30px] m-1" onClick={() => [setZip(''), setData(undefined)]}>
              <img src="close.png" alt='clear' />
            </div>
          }
          <button
            className='bg-[#C2EEFF] text-[#194D77] px-2 hover:bg-[#a0dbf2] h-full'
            onClick={() => setSearch(true)}
            disabled={zipcode.length === 0}>
            Search
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header