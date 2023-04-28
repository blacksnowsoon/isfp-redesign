import Projects from "./Components/Page/Projects";

export async function getData() {
    const respons = await fetch("../data.json");
    return respons.json();
}
export async function getProduct(productName) {
    const respons = await fetch("../data.json");
    const { Products } = await respons.json().then(fullfilled => fullfilled);
    return Products[`${productName}`];
}

export async function getProjects(){
    const respons = await fetch("../data.json");
    const {Projects} = await respons.json().then(fullfilled => fullfilled)
    return Projects;
}
export async function getProject(id) {
    const respons = await fetch("../data.json")
    const {Projects = {}} = await respons.json().then(fullfilled =>  fullfilled)
    const project = Projects.filter(project => Number.parseInt(id) === project.id)
    return project[0]
}
