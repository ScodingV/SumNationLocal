import React from 'react';
import IDCard from '../components/IDCard';
import gokul from '../pictures/portraits/gokul.jpeg'
import nicole from '../pictures/portraits/nicole.png'
import srikar from '../pictures/portraits/srikar.jpg'
import kieran from '../pictures/portraits/kieran.jpg'
import emily from '../pictures/portraits/emily.jpeg'
import eiko from '../pictures/portraits/eiko.jpeg'

function About() {
    const desc = {
        gokul: "Gokul Prasad is the Team Lead",
        nicole: "Nicole Fong is a Front-End Engineer",
        srikar: "Srikar Vemuri is the Fullstack Engineer",
        kieran: "Kieran Llarena is a Front-End Engineer",
        emily: "Emily Ai is a Back-End Engineer",
        eiko: "Eiko Reisz is a Back-End Engineer"
    }

     return (
         <div className="routeContainer p-5"> {/* we could link githubs here*/}
            <h1 id="aboutHeader">Meet the Team Behind Summarization Nation</h1>
            
            <div id="cardContainer" class="grid flex-auto grid-cols-3 grid-rows-2 gap-5 place-items-center">
                <IDCard src={gokul} name="Gokul Prasad" teamRole="Team Lead" desc={desc.gokul} />
                <IDCard src={nicole} name="Nicole Fong" teamRole="Front-End Engineer" desc={desc.nicole} />
                <IDCard src={srikar} name="Srikar Vemuri" teamRole="Fullstack Engineer" desc={desc.srikar} />
                <IDCard src={kieran} name="Kieran Llarena" teamRole="Front-End Engineer" desc={desc.kieran} />
                <IDCard src={emily} name="Emily Ai" teamRole="Back-End Engineer" desc={desc.emily} />
                <IDCard src={eiko} name="Eiko Reisz" teamRole="Back-End Engineer" desc={desc.eiko} />
            </div>
         </div>
     );
}

export default About;

/*

<IDCard src={gokul} name="Gokul Prasad" teamRole="Team Lead" desc={desc.gokul} />
            <IDCard src={nicole} name="Nicole Fong" teamRole="Front-End Engineer / Designer" desc={desc.nicole} />
            <IDCard src={srikar} name="Srikar Vemuri" teamRole="Fullstack Engineer" desc={desc.srikar} />
            <IDCard src={kieran} name="Kieran Llarena" teamRole="Front-End Engineer / Product Manager" desc={desc.kieran} />
            <IDCard src={emily} name="Emily Ai" teamRole="Back-End Engineer" desc={desc.emily} />
            <IDCard src={eiko} name="Eiko Reisz" teamRole="Back-End Engineer / Product Manager" desc={desc.eiko} />

*/