import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

export default function HostVanDetail () {

  const [hostVans, setHostVans] = useState(null)

  const {id} = useParams()

  useEffect(()=>{
    fetch(`/api/host/vans/${id}`)
    .then(res => res.json())
    .then(data=>setHostVans(data.vans))
  },[])

  if(!hostVans) {
    return <h1>Loading...</h1>
  }

  return (
    <section>
      <Link
        to='..'
        relative="path"
        className="back-button"
      >&larr; <span>Back to all vans</span></Link>
      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={hostVans.imageUrl} />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${hostVans.type}`}>
              {hostVans.type}
            </i>
            <h2>{hostVans.name}</h2>
            <p>${hostVans.price}/day</p>
          </div>
        </div>
      </div>

    </section>
  )
}