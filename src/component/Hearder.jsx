import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Button from "@mui/material/Button"
import logo from '../../public/logo/logo.webp'
import { useDispatch } from 'react-redux';
import { darkmode, getGenres, searchMovies, searchReset, } from '../feature/movieSlice/movieSlice';
import { Link, useNavigate } from 'react-router-dom';
const Hearder = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [dark, setdark] = useState(true)
    const [open, setopen] = useState(false)
    const [query, setquery] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(text);
        dispatch(searchReset())
        const textSearch = {
            query,
            pageNum: 1
        }
        if (textSearch.query.length <= 0) {
            alert("Please enter proper name")
            setopen(false)

        } else {
            dispatch(searchMovies(textSearch))
            setopen(false)
            navigate(`/search/${textSearch.query}`)
        }

        setquery("")

    }

    const search = () => {
        setopen((prev) => prev ? false : true)
    }
    useEffect(() => {
        genresCall();
    }, []);

    useEffect(() => {
        dispatch(darkmode(dark))
    }, [dark])

    const genresCall = async () => {
        const apiurl = 'https://api.themoviedb.org/3/genre/movie/list?api_key=d7c00c415443aef748e5f007d2199e25'

        const res = await fetch(apiurl)
        const data = await res.json()
        dispatch(getGenres(data.genres));
    };

    return (
        <>
            <div className=" fixed top-0  z-10 w-full flex justify-center  bg-[#EEEEEE]  text-[black]  dark:bg-[#331D2C] dark:text-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]" >
                <div className='wrapper-container w-full  relative'>
                    <div className=" flex flex-row justify-between p-3 ">
                        <Link to={"/"} className=" flex flex-col items-center cursor-pointer sm:w-12 w-8">
                            <img className='object-contain' src={logo} alt="" />

                        </Link>

                        <nav className="flex flex-row items-center sm:text-lg font-medium text-[14px] sm:gap-8  gap-2 ">

                            <Link to={"/popular"}
                                className="cursor-pointer mr-2 "
                            >
                                Popular
                            </Link>
                            <Link to={"/trending"}
                                className=" cursor-pointer mr-2 "
                            >
                                Trending
                            </Link>
                            <div className='cursor-pointer' onClick={() => search()}>

                                {
                                    open ? <CloseIcon /> : <SearchIcon />
                                }

                            </div>

                            {
                                dark ? <div className=' text-[black] cursor-pointer' onClick={() => setdark(false)}>
                                    <DarkModeIcon />
                                </div> : <div className=' text-[yellow] cursor-pointer' onClick={() => setdark(true)}>
                                    <LightModeIcon />
                                </div>
                            }

                            <div
                                className={` ${open ? "translate-x-0  " : "-translate-x-[-140%]  "
                                    }   absolute  text-white left-0 sm:top-[72px] top-[58px] 
           w-full px-2
            transition-transform duration-300`}
                            >

                                <form className=' bg-[white]' onSubmit={handleSubmit}>
                                    <div className="flex text-black  items-center">

                                        <span className=" w-full md:px-10 sm:px-5">
                                            <input type="text"
                                                name="text"
                                                id="text"
                                                onChange={(e) => setquery(e.target.value)}
                                                value={query}
                                                placeholder='Millions of movies, To discover. Explore now.'
                                                autoComplete="off" className="block w-full   border-0
                                                h-14 py-3 text-gray-900 outline-none sm:px-5 px-2 shadow-sm  placeholder:text-[#838383]  
                                              placeholder:text-[16px] text-[16px]
                                                " />
                                        </span>
                                        <span className='sm:pr-8 pr-2'>
                                            <Button type='Submit' variant="text" sx={{ color: "black", fontSize: '14px' }} startIcon={<SearchIcon />}>
                                                Search
                                            </Button>

                                        </span>


                                    </div>
                                </form>
                            </div>

                        </nav>


                    </div>
                </div>
            </div>

        </>
    )
}

export default Hearder