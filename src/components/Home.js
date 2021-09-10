import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getApod } from '../actions/index'

function Home() {
    const dispatch = useDispatch()
    const apod = useSelector(state => state.apod)

    useEffect(() => {
        dispatch(getApod())
    }, [dispatch])

    return (
        <div>
            <h1>{apod.copyright}</h1>
            <h3>{apod.date}</h3>
            <h3>{apod.explanation}</h3>
            <img src={apod.hdurl}/>
            <h2>{apod.title}</h2>
            <img src={apod.url}/>
        </div>
    )
}

export default Home;