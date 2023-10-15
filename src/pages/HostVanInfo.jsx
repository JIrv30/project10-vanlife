import { useOutletContext } from "react-router-dom"

export default function HostVanInfo () {
  const {hostVans} = useOutletContext()

  
  return (
    <section className="host-van-detail-info">
      <h4>Name: <span>{hostVans.name}</span></h4>
      <h4>Catagory: <span>{hostVans.type}</span></h4>
      <h4>Description: <span>{hostVans.description}</span></h4>
      <h4>Visability: <span>Public</span></h4>
    </section>
  )
}