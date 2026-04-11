import './index.css'

export default function Header(){
    return(
        <>
            <div className='headerbar'>
                <section className='shardsHeader'>
                    <h3>Shards App</h3>
                </section>
                <section className='navbar'>
                    <nav>
                        <li><a href='downloads'>Downloads</a></li>
                        <li><a href='devlogs'>Devlogs</a></li>
                    </nav>
                </section>
            </div>

        </>
    )
}