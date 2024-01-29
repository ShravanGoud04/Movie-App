import React from 'react'
import dayjs from 'dayjs';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSelector } from 'react-redux'
import img_not from '../../public/poster-holder.jpg'
import Genres from './Genres';
import { useNavigate } from 'react-router-dom';

const CardItem = ({ movie }) => {
    const { imgurl, isSuccess } = useSelector(state => state.movie)
    const navigate = useNavigate()
    const urlimg = (movie.poster_path && imgurl) ? `${imgurl}${movie.poster_path}` : img_not
    const detail = () => {

        navigate(`/movie/${movie.id}`)
    }
    if (isSuccess) {
        return (
            <>
                <div className="max-w-sm rounded overflow-hidden shadow-l cursor-pointer" onClick={() => detail()}>
                    <div className=" relative">
                        <img className="w-full rounded-[12px] " src={urlimg} alt="img" />
                        <div className="absolute  sm:right-4 sm:bottom-4 right-2 bottom-2 w-12 h-12  rounded-full  shadow-lg   bg-gray-100 font-bold flex flex-col items-center">
                            <span className=" "  >
                                <CircularProgressbar value={movie?.vote_average > 2 ? movie.vote_average : 1.5
                                } maxValue={10} text={movie?.vote_average?.toFixed(1) > 2 ? movie?.vote_average?.toFixed(1) : 1.5}
                                    styles={buildStyles({
                                        pathColor: movie?.vote_average < 5 ? "red" : movie?.vote_average < 7 ? 'orange' : 'green',
                                        textSize: '28px',
                                        textColor: "black"

                                    })}
                                />
                            </span>

                        </div>



                    </div>
                    <h1 className="  md:font-bold font-semibold md:text-xl text-lg whitespace-nowrap mt-1">{movie.title}</h1>
                    <h4 className=" text-md font-medium mt-1">Release date:- {dayjs(movie.release_date).format("MMM D, YYYY")}</h4>
                    <div className="px-1 pb-1 mt-1">
                        <Genres data={movie.genre_ids.slice(0, 3)} />

                    </div>
                </div>
            </>
        )
    }
}

export default CardItem