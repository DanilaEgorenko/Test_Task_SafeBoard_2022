import getList from './getList';

export default async function searchInList(value) {
    const list = await getList();
    value = value.toLowerCase();
    return list.filter(({ name }) => KMPSearch(value, name.toLowerCase()))
    // Сложность функции поиска по времени - O(n * (value + name))
}

function computeLPSArray(pat, M, lps) {
    let len = 0;
    let i = 1;
    lps[0] = 0;
    while (i < M) {
        if (pat[i] === pat[len]) {
            lps[i++] = ++len;
        } else {
            len ? len = lps[len - 1] : lps[i++] = len;
        }
    }
}

const KMPSearch = (value, name) => {
    const lps = [];
    computeLPSArray(value, value.length, lps);
    let i = 0;
    let j = 0;
    while ((name.length - i) >= (value.length - j)) {
        if (value[j] === name[i]) {
            j++;
            i++;
        }
        if (j === value.length) return true
        if (i < name.length && value[j] !== name[i]) {
            j ? j = lps[j - 1] : i = i + 1;
        }
    }
}

// Алгоритм поиска - КМП (Кнута — Морриса — Пратта)
// Сложность по времени - O(value + name)