import React, { useEffect, useState } from 'react'
import Carousel from '../component/Carousel'
import { useDispatch, useSelector } from 'react-redux'
import { upcoming } from '../feature/movieSlice/movieSlice'
import CardItem from '../utils/CardItem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from '../utils/loader/Loader'

const HeroSection = () => {
    const dispatch = useDispatch()
    const { upcoming_movie } = useSelector(state => state.movie)
    const [pageNum, setPageNum] = useState(1);




    const fetchInitialData = () => {
        dispatch(upcoming(pageNum))
        setPageNum((prev) => prev + 1);
    }


    const fetchNextPageData = () => {
        dispatch(upcoming(pageNum))
        setPageNum((prev) => prev + 1);
    }

    useEffect(() => {
        fetchInitialData();

    }, [])

    return (
        <>
            <div className="w-full  flex flex-col items-center   bg-[#EEEEEE]  text-[black]  dark:bg-[#331D2C] dark:text-white " >
                <div className='wrapper-container w-full'>
                    <Carousel />
                    {upcoming_movie && <>
                        <hr className='my-4 dark:border-[#EEEEEE] border-[#331D2C]' />
                        <section className=''>
                            <h1 className=' ms-2 text-2xl'>Upcoming Movies :-</h1>
                            <hr className='my-4 mb-6 dark:border-[#EEEEEE] border-[#331D2C]' />
                            <InfiniteScroll
                                className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4"
                                dataLength={upcoming_movie?.results?.length || []}
                                next={fetchNextPageData}
                                hasMore={pageNum <= upcoming_movie?.total_pages}
                                loader={<Loader />}
                            >
                                {
                                    upcoming_movie?.results?.map((movie, index) => <CardItem key={index} movie={movie} />)
                                }
                            </InfiniteScroll>
                        </section>
                    </>}

                </div>
            </div>
        </>
    )

}

export default HeroSection