import React, { useEffect } from 'react'
import Detail from '../component/Detail';
import { useDispatch } from 'react-redux';
import { detailMovies } from '../feature/movieSlice/movieSlice';
import { useParams } from 'react-router-dom';


const DetailPage = () => {

    const { id } = useParams()
    const dipatch = useDispatch()

    useEffect(() => {
        dipatch(detailMovies(id))
    }, [])
    return (
        <> <div className="w-full  flex flex-col items-center   bg-[#EEEEEE]  text-[black]  dark:bg-[#331D2C] dark:text-white mt-16 py-8" >
            <div className='wrapper-container w-full bg-[]'>
                <Detail />
            </div>
        </div>
        </>
    )
}

export default DetailPage