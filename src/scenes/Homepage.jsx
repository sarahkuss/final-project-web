import AddOrganization from "../components/AddOrganization";
import Hero from "../components/Hero";
import OrganizationList from "../components/OrganizationList";
import '../styles/organizationList.css'

export default function Homepage ({organizations, setOrganizations, user, setUser}) {
  return(
    <>
    <Hero />
    <AddOrganization setOrganizations={setOrganizations} user={user} />
    <OrganizationList organizations={organizations} setOrganizations={setOrganizations} user={user} setUser={setUser} />
    </>
  )
}