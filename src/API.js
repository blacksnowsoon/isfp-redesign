
export async function getData() {
  try {
      const respons = await fetch("../data.json");
      return respons.json();
  } catch (error) {
    console.error('error #%d', error)
  }
}
export async function getProduct(productName) {
  try {
    const respons = await fetch("../data.json");
    const { Products } = await respons.json().then(fullfilled => fullfilled);
    return Products[`${productName}`];
  } catch (error) {
    console.error('error #%d', error)
  }
}

export async function getProjects(){
  try {
    const respons = await fetch("../data.json");
    const {Projects} = await respons.json().then(fullfilled => fullfilled)
    return Projects;
  } catch (error) {
    console.error('error #%d', error)
  }
}
export async function getProject(id) {
  try {
    const respons = await fetch("../data.json")
    const {Projects = {}} = await respons.json().then(fullfilled =>  fullfilled)
    const project = Projects.filter(project => Number.parseInt(id) === project.id)
    return project[0]
  } catch (error) {
    console.error('error #%d', error)
  }
}
