import React from 'react'

function ImageZoom({zoom, src, alt, background}){
    const zoomRef = React.useRef(zoom.clone({background}))

    function attachZoom(image) {
        zoomRef.current.attach(image)
    }

    return (
        <div>
    <img src={src} alt={alt} ref={attachZoom} className='rounded-md shadow-2xl float-left w-96 h-96 '/>
    </div>
    )
}

export default ImageZoom;