import './index.css'

export default function Footer(){
    return(
        <>
            <hr/>
            <section className='socialmedialogos'>
            <div className="smlogo-wrapper">
                <a href="https://www.youtube.com/@mitsukiyouko">
                    <img className="smlogo" src="assets/socialmedialogos/youtube.png"/> 
                </a>
                <a href="https://buymeacoffee.com/mitsukiyouko">
                    <img className="smlogo" src="assets/socialmedialogos/bmc.png"/> 
                </a>
                <a href="https://github.com/mitsukiyouko555">
                    <img className="smlogo" src="assets/socialmedialogos/github.png"/> 
                </a>
                <a href="https://mitsukiyouko555.wixsite.com/portfolio">
                    <img className="smlogo" src="assets/socialmedialogos/personallogo.png"/> 
                </a>
                <a href="https://mitsukiyouko555.github.io/hackwebcomic/">
                    <img className="smlogo" src="assets/socialmedialogos/hack.png"/> 
                </a>
                <a href="https://mitsukiyouko555.github.io/cyanscythe-and-goldenmage/">
                    <img className="smlogo" src="assets/socialmedialogos/cyandden.png"/> 
                </a>
            </div>
        </section>
      </>
    )
}