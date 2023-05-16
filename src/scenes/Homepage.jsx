import AddOrganization from "../components/AddOrganization";
import ConservationNavbar from "../components/ConservationNavbar";
import OrganizationList from "../components/OrganizationList";
import '../styles/organizationList.css'

export default function Homepage ({organizations, setOrganizations, user}) {
  return(
    <>
    <AddOrganization setOrganizations={setOrganizations} user={user} />
    <OrganizationList organizations={organizations} setOrganizations={setOrganizations} user={user} />
    </>
  )
}