import React from 'react'
import Favourites from '../../components/Favourites/Favourites'
import Header from '../../components/Header/Header'
import MainBlock from '../../components/MainBlock/MainBlock'
import Search from '../../components/Search/Search'

const Hotels = () => {
  return (
    <div className='hotels'>
      <Header />
      <div className='content'>
        <div className='sidebar'>
          <Search />
          <Favourites />
        </div>
        <MainBlock />
      </div>
    </div>
  )
}

export default Hotels