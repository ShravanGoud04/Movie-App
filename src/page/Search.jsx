import { useDispatch, useSelector } from 'react-redux'
import { popularMovies, searchMovies } from '../feature/movieSlice/movieSlice'
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import CardItem from '../utils/CardItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from '../utils/loader/Loader'



const Search = () => {
    const { search_movie } = useSelector(state => state.movie)
    const dispatch = useDispatch()
    const { query } = useParams()

    const [textSearch, settextSearch] = useState({
        query,
        pageNum: 2
    })





    const fetchNextPageData = () => {

        dispatch(searchMovies(textSearch))
        settextSearch({
            ...textSearch,
            pageNum: textSearch.pageNum + 1
        })

    }
    if (!search_movie) {
        return <Loader />
    }
    if (search_movie.results.length === 0) {
        return (
            <div className="w-full  flex flex-col items-center   bg-[#EEEEEE]  text-[black]  dark:bg-[#331D2C] dark:text-white " >
                <div className='wrapper-container w-full'>
                    <section className=' min-h-[100vh] flex flex-col items-center justify-center'>
                        <h1 className="text-4xl mb-[150px]">No results match</h1>

                    </section>
                </div>
            </div>
        )
    }


    return (
        <div className="w-full  flex flex-col items-center   bg-[#EEEEEE]  text-[black]  dark:bg-[#331D2C] dark:text-white " >
            <div className='wrapper-container w-full'>

                <section className='mt-12'>

                    {
                        search_movie && <>
                            <h1 className=' ms-2 text-2xl'>{`Search results of ${query} :-`}</h1>
                            <hr className='my-4 mb-6 dark:border-[#EEEEEE] border-[#331D2C]' />

                            <InfiniteScroll
                                className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4"
                                dataLength={search_movie?.results?.length || []}
                                next={fetchNextPageData}
                                hasMore={textSearch.pageNum <= search_movie?.total_pages}
                                loader={<Loader />}
                            >
                                {
                                    search_movie?.results?.map((movie, index) => <CardItem key={index} movie={movie} />)
                                }
                            </InfiniteScroll>


                        </>
                    }
                </section>

            </div>
        </div>
    )
}

export default Search
