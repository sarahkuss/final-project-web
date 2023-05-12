import { Button } from "react-bootstrap"


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
    <Button onClick={handleDelete}>
      Delete
    </Button>
    </>
  )
}