import { useDispatch, useSelector } from 'react-redux'
import { trendingMovies } from '../feature/movieSlice/movieSlice'
import React, { useEffect, useState } from 'react'
import CardItem from '../utils/CardItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from '../utils/loader/Loader'

const Trending = () => {
    const dispatch = useDispatch()
    const { trending_movie } = useSelector(state => state.movie)
    const [pageNum, setPageNum] = useState(1);



    const fetchInitialData = () => {
        dispatch(trendingMovies(pageNum))
        setPageNum((prev) => prev + 1);
    }


    const fetchNextPageData = () => {
        dispatch(trendingMovies(pageNum))
        setPageNum((prev) => prev + 1);
    }

    useEffect(() => {
        fetchInitialData();

    }, [])

    return (
        <div className="w-full  flex flex-col items-center   bg-[#EEEEEE]  text-[black]  dark:bg-[#331D2C] dark:text-white " >
            <div className='wrapper-container w-full'>

                <section className='mt-12'>

                    {
                        trending_movie && <>
                            <h1 className=' ms-2 text-2xl'>Trending Movies :-</h1>
                            <hr className='my-4 mb-6 dark:border-[#EEEEEE] border-[#331D2C]' />
                            <InfiniteScroll
                                className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4"
                                dataLength={trending_movie?.results?.length || []}
                                next={fetchNextPageData}
                                hasMore={pageNum <= trending_movie?.total_pages}
                                loader={<Loader />}
                            >
                                {
                                    trending_movie?.results?.map((movie, index) => <CardItem key={index} movie={movie} />)
                                }
                            </InfiniteScroll>
                        </>
                    }
                </section>

            </div>
        </div>
    )
}

export default Trending