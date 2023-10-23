import { useEffect, useState } from "react"
import { useParams, Link, Outlet, NavLink, } from "react-router-dom"
import {getHostVans} from '../api'

export default function HostVanDetail () {

  const [hostVans, setHostVans] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const {id} = useParams()

  

  useEffect (()=>{
    async function loadVans () {
      try {
        const data = await getHostVans(id)
        setHostVans(data)
      } catch (err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }
    loadVans ()
  },[id])

  if(loading) {
    return <h1>Loading</h1>
  }

  if(error) {
    return <h1>There was an error: {error.message}</h1>
  }

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
}

  return (
    <section>
      <Link
        to='..'
        relative="path"
        className="back-button"
      >&larr; <span>Back to all vans</span></Link>
      {hostVans && 
      
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

      <nav className="host-van-detail-nav">
        <NavLink
        to='.'
        end
        style={({isActive})=>isActive ? activeStyles : null}
        >Details</NavLink>
        
        <NavLink
        to='pricing'
        style={({isActive})=>isActive ? activeStyles : null}
        >Pricing</NavLink>
        
        <NavLink
        to='photos'
        style={({isActive})=>isActive ? activeStyles : null}
        >Photos</NavLink>

      </nav>

      <Outlet context={{hostVans}} />
      </div>
      }

    </section>
  )
}