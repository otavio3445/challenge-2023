import React from 'react';
import './DataTable.scss';
import { useHistory } from 'react-router-dom';

const DataTable = ({ headers, colorFilter, data, dataFull, route, nome="" }) => {
    const history = useHistory();

    return (
        <div className='tableContainer'>
            <table className='dataTable'>
                <thead>
                <tr>
                    {headers.map((header, i) => <th className='dtHeader' key={i}>{header}</th>)}
                </tr>
                </thead>
                <tbody>
                    {data.map((el, i) => {
                        let filtro = colorFilter !== '' ? true : false

                        return (<tr className={`linha-${i%2}`} key={i} onClick={() => {
                            history.push(route, {
                                vaga: dataFull[i],
                                nome
                            })
                        }}>
                            {Object.keys(el).map((key) => {
                                if (filtro) {
                                    switch (key.toLowerCase()) {
                                        case 'idade':
                                            return el[key] >= 40 ? <td style={{color: '#017d1c'}}>{el[key]}</td> : <td style={{color: '#C30000'}}>{el[key]}</td>
                                        case 'etinia':
                                            return el[key] !== 'Branca' ? <td style={{color: '#017d1c'}}>{el[key]}</td> : <td style={{color: '#C30000'}}>{el[key]}</td>
                                        case 'pcd':
                                            return el[key] ? <td style={{color: '#017d1c'}}>Sim</td> : <td style={{color: '#C30000'}}>Não</td>
                                        case 'povos':
                                            return el[key] ? <td style={{color: '#017d1c'}}>Sim</td> : <td style={{color: '#C30000'}}>Não</td>
                                        case 'lgbt':
                                            return el[key] ? <td style={{color: '#017d1c'}}>Sim</td> : <td style={{color: '#C30000'}}>Não</td>
                                        case 'renda':
                                            return el[key] !== 'Classe A' &&  el[key] !== 'Classe B' ? <td style={{color: '#017d1c'}}>{el[key]}</td> : <td style={{color: '#C30000'}}>{el[key]}</td>
                                        default:
                                            return <td>{el[key]}</td>
                                    }
                                } else {
                                    return <td>{el[key]}</td>
                                }
                            })}
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default DataTable