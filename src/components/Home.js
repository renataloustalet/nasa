import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getApod } from '../actions/index'
import mediumZoom from 'medium-zoom'
import ImageZoom from './ImageZoom'
import './Home.css'

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
        <div>
            <div>
                <h1>APOD</h1>
                <nav className="form-inline nav navbar-expand">
                    <input className="form-control mr-sm-2" type="search" placeholder="yyyy-mm-dd" onChange={handleDate} value={date} />
                    <button onClick={handleSubmit} className="btn" type="submit">Get photo of the day</button>
                </nav>
                <div className="error">
                    {error !== "" && <p>{error}</p>}
                </div>
            </div>
            <div>
                <div className="card">
                    {loading ? <h3>Loading...</h3> :
                        <div className="row align-items-center">
                            <div className="col">
                                <ImageZoom
                                    src={apod.hdurl}
                                    zoom={zoom.current}
                                    background="#130D24"
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2>{apod.title}</h2>
                                    <h4>{apod.copyright}</h4>
                                    <h5>{apod.date}</h5>
                                    <p>{apod.explanation}</p>
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