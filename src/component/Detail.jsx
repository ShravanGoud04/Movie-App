import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import img_not from '../../public/poster-holder.jpg'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../utils/loader/Loader';
import { detailMovies } from '../feature/movieSlice/movieSlice';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { imgurl, detail_movie } = useSelector(state => state.movie)

    const bgurl = (detail_movie?.backdrop_path && imgurl) ? `${imgurl}${detail_movie?.backdrop_path}` : img_not


    if (!detail_movie) {
        return (
            <Loader />

        )
    }
    return (
        <>
            <div className=' max-w-[100%]  mt-2 flex justify-center overflow-hidden '>
                <div className="">
                    <div className="shadow-xl rounded-lg overflow-hidden " >
                        <span className='relative'>
                            <img className={` md:h-96 w-full bg-gray-200 bg-cover bg-center rounded-t-lg flex items-center justify-center bg `} src={bgurl} />
                            <h1 className="text-white font-bold md:text-4xl text-2xl md:w-[600px] w-72 absolute left-4 bottom-4">{detail_movie?.title}</h1>
                        </span>


                        <div className="bg-white rounded-b-lg md:px-8 sm:px-4 ">
                            <div className="relative">
                                <span className="right-0 w-16 h-16 rounded-full mr-4 shadow-lg absolute -mt-8 bg-gray-100 font-bold"  >
                                    <CircularProgressbar value={detail_movie?.vote_average > 2 ? detail_movie?.vote_average : 1.5
                                    } maxValue={10} text={detail_movie?.vote_average.toFixed(1) > 2 ? detail_movie?.vote_average.toFixed(1) : 1.5}
                                        styles={buildStyles({
                                            pathColor: detail_movie?.vote_average < 5 ? "red" : detail_movie?.vote_average < 7 ? 'orange' : 'green',
                                            textSize: '24px',
                                            textColor: "black"

                                        })}
                                    />
                                    <h4 className=' text-center mt-1'>Rating</h4>
                                </span>

                            </div>
                            <div className="pt-6 pb-6 px-2">
                                <h1 className="text-xl font-medium text-black">Release date :-   {dayjs(detail_movie?.release_date).format("MMM D, YYYY")}</h1>
                                <h1 className="text-black font-semibold lg:text-2xl text-2xl md:w-[600px] w-72 ">Name :-{detail_movie?.title}</h1>
                                <p className="text-lg text-black font-medium">Language:-{detail_movie?.original_language}</p>
                                <div className="genres">
                                    {detail_movie?.genres?.map((g) => {
                                        return (
                                            <span key={g} className="inline-block  bg-[#000000] rounded-full px-3 py-1 text-sm font-normal text-white  mr-2 mb-2">{g?.name}</span>
                                        );
                                    })}
                                </div>
                                <p className="mt-1 text-xl font-medium text-[#010101]">Discription :-</p>
                                <p className="mt-1 text-lg text-[#000000]">{detail_movie?.overview}</p>

                            </div>
                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}

export default Detail