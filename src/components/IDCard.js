import React from 'react';
import thinking from '../pictures/special/scrt/thinking.png'
import sleeping from '../pictures/special/scrt/sleeping.jpg'
import hydrating from '../pictures/special/scrt/drinking.jpg'
import smiling from '../pictures/special/scrt/smiling.jpeg'
import stressed from '../pictures/special/scrt/stressed.jpeg'
import michael from '../pictures/special/scrt/michael.png'
import bike from '../pictures/special/scrt/bike.png'
import robert from '../pictures/special/scrt/robert.jpeg'

function IDCard(props) {
    const phrases = [
        "gokul is thinking",
        "nicole is sleeping",
        "nicole is robert",
        "srikar is drinking",
        "kieran is smiling",
        "emily is stressed",
        "eiko was fired and got replaced with michael rice",
        "michael rice wasn't good enough and was replaced with bichael"
    ]

    function easterEgg() {
        const userPic = document.getElementsByClassName('userPic')
        const userDesc = document.getElementsByClassName('userDesc')
        let userRole = document.getElementsByClassName('userRole')
        let userName = document.getElementsByClassName('userName')

        const gokulDesc = userDesc[0].innerHTML.toLowerCase()
        const nicoleDesc = userDesc[1].innerHTML.toLowerCase()
        const srikarDesc = userDesc[2].innerHTML.toLowerCase()
        const kieranDesc = userDesc[3].innerHTML.toLowerCase()
        const emilyDesc = userDesc[4].innerHTML.toLowerCase()
        const eikoDesc = userDesc[5].innerHTML.toLowerCase()

        if(gokulDesc === phrases[0]) {
            userRole[0].innerHTML = "Thinking hard"
            userPic[0].src = thinking
        }
        if(nicoleDesc === phrases[1]) {
            userRole[1].innerHTML = "Sleeping, ssshhh be quiet"
            userPic[1].src = sleeping
        }
        if(nicoleDesc === phrases[2]) userPic[1].src = robert
        if(srikarDesc === phrases[3]) userPic[2].src = hydrating
        if(kieranDesc === phrases[4]) {
            userRole[3].innerHTML = "literal jumpscare"
            userPic[3].src = smiling
        }
        if(emilyDesc === phrases[5]) {
            userRole[4].innerHTML = "Stressing :("
            userPic[4].src = stressed
        }
        if(eikoDesc === phrases[6]) {
            userName[5].innerHTML = "MICHAEL RICE!!!!"
            userPic[5].src = michael
        }
        if(eikoDesc === phrases[7]) {
            userName[5].innerHTML = "Bichael"
            userPic[5].src = bike
        }
    }

    return (
        <div className="idCard">
            <img src={props.src} class="userPic" alt="pic of person here"></img>

            <p class="userName">{props.name}</p>
            <p class="userRole">{props.teamRole}</p>
            <p class="userDesc" spellCheck="false" contentEditable="true" onKeyUp={easterEgg}>{props.desc}</p>
        </div>
    );
  }
  
export default IDCard;