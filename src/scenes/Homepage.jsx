import AddOrganization from "../components/AddOrganization";
import ConservationNavbar from "../components/ConservationNavbar";
import OrganizationList from "../components/OrganizationList";
import '../styles/organizationList.css'

export default function Homepage ({organizations, setOrganizations}) {
  return(
    <>
    <ConservationNavbar />
    <AddOrganization setOrganizations={setOrganizations} />
    <OrganizationList organizations={organizations} setOrganizations={setOrganizations} />
    </>
  )
}