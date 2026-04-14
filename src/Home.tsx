import './index.css'

export default function Home() {
  return (
    <>
      <section className='header'>
        <h1>About</h1>
      </section>
      <section>
        <img src='assets/shardsLogo.png'/> 
      </section>
      <section>
        <p>
          Shards is an AI-less plotbuilding assistant app that is slowly in the process of being developed by Mitsuki Youko.
          <br/>
          <br/>
          Check out the Github Repository Here: <a href='https://github.com/mitsukiyouko555/shards/tree/main'>https://github.com/mitsukiyouko555/shards/tree/main</a>
          <br/>
          <br/>          
          <strong className='fakeh2'>
            CONCEPT:
          </strong>
          <br/>
          <br/>
          <strong>THE DASHBOARD TAB</strong>
          <br/>
          <br/>
          <small>
          For adding or importing, and viewing all Characters, Objects, and Locations - as well as viewing data for each of these elements. In the tab for each character, object, or location, you can add additional elements that are trackable across your many arcs/chapters/beats.
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
          The Event Viewer tab gathers info from all the tabs and displays it in an easy to read fashion.
          <br/>
          <br/>
          For example, if you had something that needs to be addressed in the settings, something to address in Weave, and another thing to address in the Dashboard, instead of jumping to different tabs, you can just view all the to do's here!
          </small>
          <br/>
          <br/>
          <strong>THE SETTINGS & PREFERENCES TAB</strong>
          <br/>
          <br/>
          <small>
          This is a critical part of SHARDS - as you can customize the app to fit your story - Including how your pipeline looks - so that it can better help you manage your assets.
          </small>
          <br/>
          <br/>
          <strong>(PLUGIN) - THE MAGIC SYSTEM TAB</strong>
          <br/>
          <br/>
          <small>
          Not every story has a magic system and some stories might have multiple magic systems, which is why this is a plugin instead of a core feature.
          <br/><br/>
          This tab keeps track of all your magic systems. You can have a magic system with one type of calculation in terms of mana usage, and another completely different workings and attributes and maybe mo mana count at all but something else entirely.. ink, if the magic is written, ingredients, if the magic is cooked, etc.
          <br/><br/>
          The idea is that every magic system should be supported.
          </small>
          <br/>
          <br/>
          <strong>(PLUGIN) - THE FIGHT SCENE CALCULATOR TAB</strong>
          <br/>
          <br/>
          <small>
          This is an additional plugin that works with the Magic System Tab. 
          <br/>
          <br/>          
          It takes the calculations and formulas for your magic system and the abilities you've noted for your characters and makes it so that when you write a fight scene, you can select a character, select the spells that they've used, and it will calculate how much mana the character has left based on the rules in your Magic System tab so as to keep your fight scene realistic in accordance with your worldbuilding.
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