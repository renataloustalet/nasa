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
                <input className="mr-sm-2" aria-label="Search" type="text" placeholder="Date" onChange={handleDate} value={date}/><button onClick={handleSubmit} className="btn btn-outline-success my-2 my-sm-0">Get photo of the day</button> 
           </nav>
            </div> 
{/*             <nav class="navbar navbar-light bg-light justify-content-between">
                <a class="navbar-brand"><img src="../images/nasa-logo.png"/></a>
                    <input class="form-control mr-sm-2" type="text" placeholder="Date" onChange={handleDate} value={date} />
                    <button class="btn" onClick={handleSubmit}>Get photo of the day</button>

            </nav> */}
            <div>
                <div className="card">
                <h1>{apod.title}</h1>
                <h1>{apod.copyright}</h1>
                <h3>{apod.date}</h3>
                <img src={apod.hdurl} className="img" />
                <div className="container">
                <p>{apod.explanation}</p>
                </div>
                </div>
            </div>
        </div>
    )
}


export default Home;