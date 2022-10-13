import './View2.css';

export default function View2({ list }) {
    const handleCheckbox = e => e.target.closest('.element').classList.toggle('active');
    return (
        <>
            {list.length
                ?
                <div className='elements'>
                    {list.map(({ name, group, phone }) => {
                        return (
                            <div className='element' key={name}>
                                <div className='top'>
                                    <input type='checkbox' onClick={handleCheckbox} />
                                    <div className='cloud'></div>
                                </div>
                                <p className='name'>{name}</p>
                                <div className='photo'></div>
                                <p
                                    style={{ fontWeight: !group ? 'bold' : '' }}
                                >{group || 'Unmanaged'}</p>
                                <p>{phone}</p>
                            </div>
                        )
                    })}
                </div >
                :
                <p className='status'>Нет совпадений</p>
            }
        </>
    )
}