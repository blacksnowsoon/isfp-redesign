

export async function getData() {
    const respons = await fetch('src/data.json');
    return respons.json()
}