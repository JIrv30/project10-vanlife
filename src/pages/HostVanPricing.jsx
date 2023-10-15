
import { useOutletContext } from "react-router-dom"

export default function HostVanPricing () {
  const {hostVans} = useOutletContext()


  return (
    <h3 className="host-van-price">
      ${hostVans.price}<span>/day</span>
    </h3>
  )
}