import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getApod } from '../actions/index'
import './Home.css'

function Home() {
    const dispatch = useDispatch()
    const apod = useSelector(state => state.apod)
    const [date, setDate] = useState('')

    useEffect(() => {
        dispatch(getApod(date))
    }, [dispatch])

    function handleDate(e) {
        setDate(e.target.value)
    }

    function handleSubmit() {
        dispatch(getApod(date))
        setDate('')
    }

    return (
        <div>
            <div>
                <nav className="form-inline nav">
                    <input className="form-control mr-sm-2" type="text" placeholder="yyyy-mm-dd" onChange={handleDate} value={date} />
                    <button onClick={handleSubmit} className="btn">Get photo of the day</button>
                </nav>
            </div>
            <div>
                <div className="card">
                    <div className="row align-items-center">
                        <div className="col">
                            <img src={apod.hdurl ? apod.hdurl : <p>Image not found</p>} className="img" />
                        </div>
                        <div className="container col">
                            <h2>{apod.title}</h2>
                            <h4>Copyright: {apod.copyright ? apod.copyright : <p> not available </p>}</h4>
                            <h5>{apod.date}</h5>
                            <p>{apod.explanation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Home;