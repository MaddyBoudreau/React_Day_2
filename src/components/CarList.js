import { useEffect, useState } from 'react'
import Car from './Car'

export default function CarList() {
    const [cars, setCars] = useState([])

    useEffect(() => {
        // fetch('http://127.0.0.1:5000/api/posts')
        fetch('https://my-json-server.typicode.com/Llang8/cars-api/cars')
            .then((res) => res.json())
            .then((data) => setCars(data))
    }, [])

    return (
        <>
            {/* { 
                posts.map(post => {
                    return (
                        <div className="card">
                            <h2>{ post.title }</h2>
                            <p>{ post.text }</p>
                        </div>
                    )
                }) 
            } */}
            { 
                cars.map(car => <Car car={car} key={ car.id } />)
            }
        </>
    )
}