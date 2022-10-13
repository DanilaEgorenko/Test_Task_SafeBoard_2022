import { useEffect, useState } from 'react';
import getListByGroups from '../../../services/getListByGroups';
import './View3.css';

export default function View3({ list }) {
    const [groups, setGroups] = useState({});
    useEffect(() => {
        setGroups(getListByGroups(list));
    }, [list])
    return (
        <div className='groups'>
            {Object.keys(groups).map(group => {
                return (
                    <div className='block' key={group}>
                        <h2>{group || 'Unmanaged'}</h2>
                        {groups[group].map(({ name, email, phone }) => {
                            return (
                                <div className='person' key={name}>
                                    <h3>{name}</h3>
                                    <p>{email}</p>
                                    <p>{phone}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}