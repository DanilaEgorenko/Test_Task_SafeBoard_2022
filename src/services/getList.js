export default async function getList(data = '') {
    if (!data) data = await fetch('list.json')
        .then(res => res.json())
        .catch(err => console.error(err))
    return new Promise(resolve => {
        setTimeout(() => resolve(data), Math.random() * 3000);
    })
    // Собственная реализация мок-сервера
}