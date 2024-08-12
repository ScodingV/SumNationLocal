import React from 'react'
import aicamp_logo from '../pictures/logos/aicamp_logo.png'
import github_logo from '../pictures/logos/github_logo.png'
import discord_logo from '../pictures/logos/discord_logo.png'

function Footer() {
    let logoSize = "32"

    return ( 
        <footer>
            <p id="footerText" class="m-0 float-left">Summarization Nation</p>

            <div class="flex float-right">
                <a href="https://www.ai-camp.org/" target="_blank"><img class="mx-1" src={aicamp_logo} alt="ai camp logo" width={logoSize} height={logoSize}></img></a>
                <a href="https://github.com/" target="_blank"><img class="mx-1" src={github_logo} alt="ai camp logo" width={logoSize} height={logoSize}></img></a>
                <a href="https://discord.com/" target="_blank"><img class="mx-1" src={discord_logo} alt="ai camp logo" width={logoSize} height={logoSize}></img></a>
            </div>
        </footer>
    );
}
  
export default Footer;