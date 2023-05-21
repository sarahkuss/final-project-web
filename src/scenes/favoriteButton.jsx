import { useState, useEffect } from "react"
import { Button, Container, Row, Col } from "react-bootstrap"
import { SuitHeart, SuitHeartFill } from "react-bootstrap-icons"
import { useNavigate } from "react-router-dom"
import '../styles/favButton.css'


export default function FavoriteButton ({setUser,user, orgId}) {
  const navigate = useNavigate()
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    if(user && user.favorites) {
      setLiked(user.favorites.includes(orgId))
    }
  }, [user, orgId])
  
  
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
      
      setUser(data)
      
    })
    .catch(alert)
  }}

  return (
  <>
  <Container>
    <Row>
      <Col className="favbutton-col">
  {!liked ? (
    <Button className="unliked-button" onClick={handleLike}><SuitHeart /></Button>
    ) : (
      <Button className="liked-button" onClick={handleLike}><SuitHeartFill /></Button>
      )}
      </Col>
    </Row>
  </Container>
  </>
)
}