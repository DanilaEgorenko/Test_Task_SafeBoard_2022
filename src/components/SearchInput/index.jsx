import searchInList from '../../services/searchInList';
import { DebounceInput } from 'react-debounce-input';

export default function SearchInput({ view, setIsLoading, setList }) {
    return (
        <DebounceInput
            debounceTimeout={200}
            className={view === 3 ? 'hidden' : ''}
            type='search'
            id='search'
            onChange={(e) => {
                setIsLoading(true);
                searchInList(e.target.value)
                    .then((res) => setList(res))
                    .finally(() => setIsLoading(false));
            }}
            placeholder='Поиск' />
    )
}