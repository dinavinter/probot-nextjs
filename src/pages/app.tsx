
 import { createProbot } from "probot";

function Page({ data}: {data:any}) {

    return <>Welcome to probot app {JSON.stringify(data)}</>;

    // Render data...
  }
  

export async function getServerSideProps() {
  
    // Fetch data from external API
    const probot = createProbot(); 
    var octokit = await  probot.auth(); 
    const data =await octokit.apps.listInstallations(); 
    // Pass data to the page via props
    return { props: { data } }
  }
  
   export default Page
  