import { useState } from "react"
import { Button } from "react-bootstrap"
import { SuitHeart, SuitHeartFill } from "react-bootstrap-icons"


export default function FavoriteButton ({user, orgId}) {
  const [liked, setLiked] = useState(false)
  // const userId = user._id
 

  const handleLike = () => {
    // fetch(`https://final-project-conservation.web.app/users/${userId}/favorites/${orgId}`,{
    fetch(`https://final-project-conservation.web.app/users/userId/favorites/orgId`, {
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
      setLiked(true)
    })
    .catch(alert)
  }

  return (
  <>
  {!liked ? (
    <Button><SuitHeart /></Button>
  ) : (
    <Button onClick={handleLike}><SuitHeartFill /></Button>
  )}
  </>
)
}