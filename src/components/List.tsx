import { data_Resep } from '../static/resep';

export default function List(){

    return(
        <div className='section'>
            <div className='list'>
                {data_Resep.map((data, i) => {
                    return(
                        <>
                            <p className={`list_content ${i % 2 == 0 && 'list_content_color'}`}>
                                {data}
                            </p>
                        </>
                    )
                })}
                <p>
                    Telor ayam 1 butir
                </p>
            </div>
        </div>
    )
}