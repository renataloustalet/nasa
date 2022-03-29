import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getApod } from '../actions/index'
import mediumZoom from 'medium-zoom'
import ImageZoom from './ImageZoom'

function Home() {
    const dispatch = useDispatch()
    const zoom = React.useRef(mediumZoom())
    const apod = useSelector(state => state.apod)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)
    const [date, setDate] = useState('')

    useEffect(() => {
        dispatch(getApod(date))
    }, [])

    function handleDate(e) {
        setDate(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getApod(date))
        setDate('')
    }

    return (
        <div className='font-normal font-sans flex-col bg-gray-900 text-white space-y-11 pt-3.5 h-screen'>
            <div className='space-y-8'>
                <h1 className='text-3xl text-center font-bold'>Astronomy Picture of the Day</h1>
                <nav className='flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8'>
                    <div className='relative'>
                        <input type="text" placeholder="yyyy-mm-dd" onChange={handleDate} value={date} className='h-14 w-96 pl-5 rounded z-0 focus:shadow focus:outline-none text-gray-500' />
                        <div className='absolute top-4 right-3'>
                            <button onClick={handleSubmit} className='fa fa-search text-gray-400 z-20 hover:text-gray-500' type="submit">Get photo of the day</button>
                        </div>
                    </div>
                </nav>
                <div>
                    {error !== "" && <p>{error}</p>}
                </div>
            </div>
            <div>
                <div className='flex justify-center items-center'>
                    {loading ? <h3>Loading...</h3> :
                        <div className='flex justify-center'>
                            <div className='flex flex-col md:flex-row rounded-lg shadow-lg bg-gray-900'>
                                <div className='flex items-center pl-9'>
                                    <ImageZoom
                                        src={apod.hdurl}
                                        zoom={zoom.current}
                                        background="#111827"
                                    />
                                </div>
                                <div className='p-6 flex flex-col justify-start md:max-w-prose space-y-4'>
                                    <h2 className='underline text-center font-semibold'>{apod.title}</h2>
                                    <p className='text-base mb-4'>{apod.explanation}</p>
                                    <h4 className='text-center'>{apod.copyright}</h4>
                                    <h5 className='text-center'>{apod.date}</h5>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}


export default Home;