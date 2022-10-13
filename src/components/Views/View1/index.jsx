import './View1.css';

export default function View1({ list }) {
    const handleCheckbox = e => e.target.closest('tr').classList.toggle('active');
    const handleEveryCheckbox = e => {
        [...e.target.closest('table').querySelectorAll('tbody tr')].map(el => {
            el.classList.toggle('active');
            el.querySelector('input').checked = !el.querySelector('input').checked
        })
    }
    return (
        <>
            {list.length
                ?
                <table>
                    <thead>
                        <tr>
                            <td><input type='checkbox' onClick={handleEveryCheckbox} /></td>
                            <td>Имя</td>
                            <td>Почта</td>
                            <td>Телефон</td>
                            <td>Группа</td>
                        </tr>
                    </thead>
                    <tbody>
                        {list.map(({ name, email, phone, group }) => {
                            return (
                                <tr key={name}>
                                    <td><input type='checkbox' onClick={handleCheckbox} /></td>
                                    <td>{name}</td>
                                    <td>{email}</td>
                                    <td>{phone}</td>
                                    <td>{group || 'Unmanaged'}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                :
                <p className='status'>Нет совпадений</p>
            }
        </>
    )
}