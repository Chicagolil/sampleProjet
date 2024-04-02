import styles from './Content.module.scss'
import Tatoo from './Tatoo.jsx';
import {data} from '../data/tattoo.jsx'
import { useState } from 'react';

function Content(){
    const tatoo = data ;
    const [filter,setFilter] = useState('')
    function handleInput(e){
        const filter = e.target.value 
        setFilter(filter.trim().toLowerCase());
    }

    return (
    <div className="flex-fill container p-20"> 
        <h1 className='my-30'>Découvrez nos nouveaux tatoueurs </h1>
        <div className={`d-flex flex-column card p-20 ${styles.contentCard} `}>
            <div className={`my-30 d-flex flex-row justify-content-center allign-items-center ${styles.searchBar}`}>
                <i className="fa-solid fa-magnifying-glass mr-15"></i>
                <input onInput={handleInput} className='flex-fill'type="text" placeholder='Rechercher'/>
            </div>
            <div className={styles.grid}>
                {tatoo
                .filter((r)=>r.title.toLowerCase().startsWith(filter))
                .map( (r) => (
                <Tatoo  key={r._id} title ={r.title} image={r.image} />
                ))}
                
            </div>
        </div>
        
    </div>
    );
}

export default  Content ;