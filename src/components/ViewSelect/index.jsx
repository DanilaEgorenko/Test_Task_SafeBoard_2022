export default function ViewSelect({ changeView }) {
    const handleSelect = (e) => changeView(+e.target.value);
    return (
        <select onChange={handleSelect}>
            <option defaultValue value={1}>Таблица</option>
            <option value={2}>Плитка</option>
            <option value={3}>По группам</option>
        </select>
    );
}