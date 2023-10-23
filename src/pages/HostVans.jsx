import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import {getHostVans} from '../api'

export default function HostVans () {
  const [hostVans, setHostVans] = useState([])
  const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

  // useEffect(()=>{
  //   fetch('/api/host/vans')
  //   .then(res=>res.json())
  //   .then(data=>setHostVans(data.vans))
  // },[])

  useEffect (()=>{
    async function loadVans () {
      setLoading(true)
      try {
        const data = await getHostVans()
        setHostVans(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans()
  },[])

  const hostVanElements = hostVans.map(van => {
    return (
      <Link to={van.id}
      key={van.id}
      className="host-van-link-wrapper"
      >
      
      <div className="host-van-single">
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
        </div>
      </div>
      </Link>
      
    )
  })

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  return(
    <section>
      <h1 className="host-vans-title"> Your listed vans </h1>
      <div className="host-vans-list">
        {hostVans.length > 0 ? (
          <section>
            {hostVanElements}
          </section>
        ) : (
          <h2>Loading...</h2>
        )
      }
      </div>
    </section>
  )
}