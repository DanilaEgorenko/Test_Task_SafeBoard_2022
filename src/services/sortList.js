import searchInList from './searchInList'

export default async function sortList(data, value) {
    if (value) {
        let [val, sign] = value.split(' ')
        sign = sign === 'A' ? 1 : -1
        data = data.sort((a, b) => a[val] > b[val] ? sign : sign * -1)
        // Я не стал писать свою функцию сортировки, тк в движках браузеров используются более быстрые и эффектиные методы (FireFox - сортировка слиянием, Chrome - Timsort)
        // Сложность сортировки O(log(n) * n) по времени и O(n) по памяти (Timsort / Merge sort)
        // Можно было бы написать функцию быстрой сортировки, которая испольузет O(log(n)) по памяти
        // Но ввместо этого, в худшем случае получится O(n^2) по времени, что является не лучшим результатом в сравнении с Timsort / Merge sort
        return [...data]
    }
    const searchValue = document.querySelector('#search').value;
    return searchInList(searchValue);
}