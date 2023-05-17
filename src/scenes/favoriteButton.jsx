import { useState } from "react"
import { Button } from "react-bootstrap"
import { SuitHeart, SuitHeartFill } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"


export default function FavoriteButton ({user, orgId}) {
  // const [liked, setLiked] = useState(false)
  const navigate = useNavigate()
  const liked = (user && user.favorites && user.favorites.includes(orgId))
  
  
  const handleLike = () => {
    if(!user){
      navigate('/login')
    } else {
    const userId = user._id
    fetch(`https://final-project-conservation.web.app/users/${userId}/favorites/${orgId}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({orgId})
    })
    .then(res => res.json())
    .then(data => {
      if(data.message) {
        alert(data.message)
        return
      }
      // setLiked(true)
    })
    .catch(alert)
  }}

  return (
  <>
  {!liked ? (
    <Button className="mt-2" onClick={handleLike}><SuitHeart /></Button>
  ) : (
    <Button className="mt-2" onClick={handleLike}><SuitHeartFill /></Button>
  )}
  </>
)
}