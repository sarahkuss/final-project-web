import { useState } from "react"
import { Button, Form } from "react-bootstrap"

export default function AddOrganization ({setOrganizations}) {
  const [orgName, setOrgName] = useState()
  
  const handleSubmit = (e) => {
    e.preventDefault()
    fetch("https://final-project-conservation.web.app/organizations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({orgName})
    })
    .then(resp => resp.json())
    .then(data => {
      if(data.messaage) {
        alert(data.message)
        return
      }
      setOrganizations(data)
    })
    .catch(alert)
  }
  
  return(
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Organization Name</Form.Label>
        <Form.Control 
          type="text"
          value={orgName}
          required={true}
          onChange={(e) => {setOrgName(e.target.value)}} />
      </Form.Group>
      <Button type="submit">Save</Button>
    </Form>
    </>
  )
}