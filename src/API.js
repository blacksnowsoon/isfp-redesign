

export async function getData() {
    const respons = await fetch('data.json');
    return respons.json()
}