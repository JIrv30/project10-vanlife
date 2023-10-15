import { useOutletContext } from "react-router-dom"

export default function HostVanPhotos () {
  const {hostVans} = useOutletContext()

  return (
    <img src={hostVans.imageUrl} className="host-van-detail-image" />
  )
}