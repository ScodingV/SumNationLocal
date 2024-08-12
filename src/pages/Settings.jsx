import React from 'react';
import IDCard from '../components/IDCard';
import userAvatar from '../pictures/default-user-avatar.jpeg'

function Settings() {
     return (
         <div className="routeContainer p-5">
            <IDCard src={userAvatar} name="You" teamRole="Summarization Nation User" desc="This is your account settings. You can change some of your settings, and your previous summaries will be saved here" />
         </div>
     );
}

export default Settings;