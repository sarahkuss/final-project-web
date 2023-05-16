import { Button } from "react-bootstrap"
import { Trash3Fill } from "react-bootstrap-icons"



export default function DeleteOrganization ({setOrganizations, orgId}) {
  
  const handleDelete = (e) => {
    e.preventDefault()
    fetch(`https://final-project-conservation.web.app/organizations/${orgId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
    .then(setOrganizations)
    .catch(alert)
  }
  
  return (
    <>
    <Button className="justify-content-right" onClick={handleDelete}>
      <Trash3Fill />
    </Button>
    </>
  )
}