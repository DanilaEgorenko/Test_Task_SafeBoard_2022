import { useEffect, useState } from 'react';
import SortSelect from '../../components/SortSelect';
import ViewSelect from '../../components/ViewSelect';
import SearchInput from '../../components/SearchInput';
import View1 from '../../components/Views/View1';
import View2 from '../../components/Views/View2';
import View3 from '../../components/Views/View3';
import getList from '../../services/getList';
import './List.css';

export default function List() {
    const [view, setView] = useState(1);
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        getList()
            .then((data) => setList(data))
            .finally(() => setIsLoading(false));
    }, []);
    return (
        <>
            <div className='head'>
                <h1>Список</h1>
                <ViewSelect changeView={setView} />
                <SearchInput
                    view={view}
                    setIsLoading={setIsLoading}
                    setList={setList}
                />
                <SortSelect
                    view={view}
                    setIsLoading={setIsLoading}
                    changeListData={setList}
                    data={list}
                />
            </div>
            {isLoading
                ? <div className='loader' />
                : (
                    <>
                        {view === 1 && <View1 list={list} />}
                        {view === 2 && <View2 list={list} />}
                        {view === 3 && <View3 list={list} />}
                    </>
                )}
        </>
    );
}
