import AddOrganization from "../components/AddOrganization";
import OrganizationList from "../components/OrganizationList";

export default function Homepage ({organizations, setOrganizations}) {
  return(
    <>
    <OrganizationList organizations={organizations} setOrganizations={setOrganizations} />
    <AddOrganization setOrganizations={setOrganizations} />
    </>
  )
}