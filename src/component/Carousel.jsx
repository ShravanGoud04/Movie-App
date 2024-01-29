import React from 'react'
import dayjs from 'dayjs';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux'
import img_not from '../../public/image-not.png'
import Loader from '../utils/loader/Loader';

const Carousel = () => {


    const { upcoming_movie, imgurl } = useSelector(state => state.movie)


    const index = Math.floor(Math.random() * 20)
    const upcoming = upcoming_movie?.results[index]

    if (!upcoming_movie) {
        return (
            <Loader />

        )
    }

    if (upcoming) {

        const heroImg = upcoming.backdrop_path ? `${imgurl}${upcoming.backdrop_path}` : img_not

        return (
            <>
                <div className=' max-w-[100%]  mt-8 flex justify-center overflow-hidden '>
                    <div className="">
                        <div className="shadow-xl rounded-lg overflow-hidden " >
                            <span className='relative'>
                                <img className={` md:h-96 w-full bg-gray-200 bg-cover bg-center rounded-t-lg flex items-center justify-center bg `} src={heroImg} />
                                <span className="text-white font-bold md:text-4xl text-2xl md:w-[600px] w-72 absolute left-4 bottom-4">{upcoming.title}</span>
                            </span>


                            <div className="bg-white rounded-b-lg md:px-8 sm:px-4 ">
                                <div className="relative">
                                    <span className="right-0 w-16 h-16 rounded-full mr-4 shadow-lg absolute -mt-8 bg-gray-100 font-bold"  >
                                        <CircularProgressbar value={upcoming.vote_average > 2 ? upcoming.vote_average : 1.5
                                        } maxValue={10} text={upcoming.vote_average.toFixed(1) > 2 ? upcoming.vote_average.toFixed(1) : 1.5}
                                            styles={buildStyles({
                                                pathColor: upcoming.vote_average < 5 ? "red" : upcoming.vote_average < 7 ? 'orange' : 'green',
                                                textSize: '24px',
                                                textColor: "black"

                                            })}
                                        />
                                        <h4 className=' text-center mt-1'>Rating</h4>
                                    </span>

                                </div>
                                <div className="pt-6 pb-6 px-2">
                                    <p className="text-lg text-gray-600">Language:-{upcoming.original_language}</p>
                                    <h1 className="text-xl font-medium text-gray-700">Release date :-   {dayjs(upcoming.release_date).format("MMM D, YYYY")}</h1>
                                    <p className="mt-1 text-xl font-normal text-[#050505]">Discription :-</p>
                                    <p className="mt-1 text-lg text-[#1e1e1e]">{upcoming.overview}</p>

                                </div>
                            </div>
                        </div>
                    </div>

                </div >
            </>
        )
    }
}

export default Carousel