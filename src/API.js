export async function getData() {
    const respons = await fetch("../data.json");
    return respons.json();
}
export async function getProduct(productName) {
    const respons = await fetch("../data.json");
    const { Products } = await respons.json().then(fullfilled => fullfilled);
    return Products[`${productName}`];
}
