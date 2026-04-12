import './index.css'
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <>
            <div className='headerbar'>
                <section className='shardsHeader'>
                    <h3>Shards App</h3>
                </section>
                <section className='navbar'>
                    <nav>
                        <li><Link to='#/devlogs'>Devlogs</Link></li>
                        <li><Link to='#/downloads'>Downloads</Link></li>
                        <li><Link to='#/'>Home</Link></li>
                    </nav>
                </section>
            </div>

        </>
    )
}