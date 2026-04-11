import './index.css'

export default function Home() {
  return (
    <>
      {/* <section className='socialmedialogos'>
          <div className="smlogo-wrapper">
          <a href="https://www.youtube.com/@mitsukiyouko">
              <img className="smlogo" src="src/assets/socialmedialogos/youtube.png"/> 
          </a>
          <a href="https://buymeacoffee.com/mitsukiyouko">
              <img className="smlogo" src="src/assets/socialmedialogos/bmc.png"/> 
          </a>
          <a href="https://github.com/mitsukiyouko555">
              <img className="smlogo" src="src/assets/socialmedialogos/github.png"/> 
          </a>
          <a href="https://mitsukiyouko555.wixsite.com/portfolio">
              <img className="smlogo" src="src/assets/socialmedialogos/personallogo.png"/> 
          </a>
          <a href="https://mitsukiyouko555.github.io/hackwebcomic/">
              <img className="smlogo" src="src/assets/socialmedialogos/hack.png"/> 
          </a>
          </div>
      </section> */}
      <section className='header'>
        <h1>About</h1>
      </section>
      <section>
        <img src='src/assets/shardsLogo.png'/> 
      </section>
      <section>
        <p>
          Shards is an AI-less plotbuilding assistant app that is slowly in the process of being developed by Mitsuki Youko.
          <br/>
          <br/>
          Check out the Github Repository Here: <a href='https://github.com/mitsukiyouko555/shards/tree/main'>https://github.com/mitsukiyouko555/shards/tree/main</a>
          <br/>
          <br/>
          <h2>
            CONCEPT:
          </h2>
          <br/>
          <strong>THE DASHBOARD TAB</strong>
          <br/>
          <br/>
          <small>
          For adding or importing, and viewing all Characters, Objects, and Locations - as well as viewing data for each of these elements. In the tab for each character you can add additional elements that are trackable across your many arcs/chapters/beats.
          </small>
          <br/>
          <br/>
          <strong>THE WEAVE TAB</strong>
          <br/>
          <br/>
          <small>  
          Named for how writers weave the plot of different characters across different arcs together, the WEAVE tab is a Tauri/Rust based glorified loop based Search Crawler that reads your drafts/prose and compares it to preset logic (assuming your data marks Arcs clearly).
          <br/>
          <br/>
          
          For Example: You've imported Characters. SHARDS will go through whatever draft you provide and see if a character has been missing for X amount of arcs, or if there is an item that was imported but never used at all in the story.
          </small>
          <br/>
          <br/>
          <strong>THE ASSET MANAGEMENT TAB</strong>
          <br/>
          <br/>
          <small>
          The Asset Management Tab allows you to convert existing files to desired formats - like for example, if you need lightweight versions of your .png or .jpg files, you can convert them to .avif files for uploading to certain websites.
          <br/><br/>
          You can also manage your assets if SHARDS is given a path where your files are stored, and assuming you name your folders hierarchically and your folder names are named similarly to your assets, it can have look at what assets you put into the SHARDS' system and compare it to your folders so that it can pick out which ones don't have .jpgs or .pngs, or whatever file extension you dictate and alert you to it so that you can see what areas you still need to work on in terms of Asset Creation.
          </small>
          <br/>
          <br/>
          <strong>THE EVENT VIEWER TAB</strong>
          <br/>
          <br/>
          <small>

          </small>
          <br/>
          <br/>
          <strong>THE SETTINGS & PREFERENCES TAB</strong>
          <br/>
          <br/>
          <small>

          </small>
          <br/>
          <br/>
          <strong>(PLUGIN) - THE MAGIC SYSTEM TAB</strong>
          <br/>
          <br/>
          <small>

          </small>
          <br/>
          <br/>
          <strong>(PLUGIN) - THE FIGHT SCENE CALCULATOR TAB</strong>
          <br/>
          <br/>
          <small>

          </small>
        </p>
      </section>
      <hr/>
      <section>
        <h2>
          SHARDS Demo Videos:
        </h2>
      </section>
      <section>
        <p>
          COMING SOON!
        </p>
      </section>
    </>
)
}