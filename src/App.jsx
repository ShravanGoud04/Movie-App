import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Hearder from './component/Hearder'
import { useSelector } from 'react-redux'
import HeroSection from './page/HeroSection'
import Popular from './page/Popular'
import Trending from './page/Trending'
import Search from './page/Search'
import DetailPage from './page/DetailPage'
import PageNote from './page/PageNote'

const App = () => {
  const { isDark } = useSelector(state => state.movie)

  return (

    <BrowserRouter>
      <div className={isDark ? "" : "dark"}>
        <Hearder />
        <div className='mt-12'>
          <Routes>
            <Route path='/' element={<HeroSection />} />
            <Route path='/popular' element={<Popular />} />
            <Route path='/trending' element={<Trending />} />
            <Route path='/search/:query' element={<Search />} />
            <Route path='/movie/:id' element={<DetailPage />} />
            <Route path='*' element={<PageNote />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>

  )
}

export default App

{/* <nav class="bg-white border-gray-200 dark:bg-gray-900">
<div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
  <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
    <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
  </a>
  <div class="flex items-center space-x-6 rtl:space-x-reverse">
    <a href="tel:5541251234" class="text-sm  text-gray-500 dark:text-white hover:underline">(555) 412-1234</a>
    <a href="#" class="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
  </div>
</div>
</nav>
<nav class="bg-gray-50 dark:bg-gray-700">
<div class="max-w-screen-xl px-4 py-3 mx-auto">
  <div class="flex items-center">
    <ul class="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
      <li>
        <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" class="text-gray-900 dark:text-white hover:underline">Company</a>
      </li>
      <li>
        <a href="#" class="text-gray-900 dark:text-white hover:underline">Team</a>
      </li>
      <li>
        <a href="#" class="text-gray-900 dark:text-white hover:underline">Features</a>
      </li>
    </ul>
  </div>
</div>
</nav> */}