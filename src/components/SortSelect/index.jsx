import sortList from '../../services/sortList';

export default function SortSelect({ view, setIsLoading, changeListData, data }) {
    const handleSelect = (e) => {
        const value = e.target.value;
        if (!value) setIsLoading(true);
        sortList(data, value)
            .then(res => changeListData(res))
            .finally(() => setIsLoading(false));
    }
    return (
        <select onChange={handleSelect} className={view === 3 ? 'hidden' : ''}>
            <option defaultValue value=''>По-умолчанию</option>
            <option value='name A'>Имя А → Я</option>
            <option value='name Z'>Имя Я → А</option>
            <option value='email A'>Почта А → Я</option>
            <option value='email Z'>Почта Я → А</option>
            <option value='phone A'>Телефон 1 → 9</option>
            <option value='phone Z'>Телефон 9 → 1</option>
            <option value='group A'>Группа А → Я</option>
            <option value='group Z'>Группа Я → А</option>
        </select>
    );
}