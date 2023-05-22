
function get() {
  return fetch("../data.json", {method: 'get'})
}
export async function getData() {
  try {
      return await get().then((respons)=> respons.json());
  } catch (error) {
    console.error('getData error #%d', error)
  }
}

export async function getProduct(productName) {
  try {
    const { Products = {}} = await getData()
    return Products[`${productName}`];
  } catch (error) {
    console.error('getProduct error #%d', error)
  }
}

export async function getProjects(){
  try {
    const { Projects = {}} = await getData()
    return Projects;
  } catch (error) {
    console.error('getProjects error #%d', error)
  }
}

export async function getProject(id) {
  try {
    const { Projects = {} } =await getData()
    return Projects.filter(project => Number.parseInt(id) === project.id)[0]
  } catch (error) {
    console.error('getProject error #%d', error)
  }
}




