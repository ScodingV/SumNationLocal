import React from 'react'

function NoPage(){
    return (
        <>
            <h1 className = "homeSubTitle"> Coming Soon! </h1>
            <p className = "text-justify"> This app is still being developed, tested, and modified. As such, not all features are fully implemented yet. Check back often to see what new functionalities are coming. </p>

            <p className = "text-justify"> We hope to add features including:</p>
            <ul className = "text-justify">
                <li> Multiple language support </li>
                <li> Support for large file sizes </li>
                <li> Further options for output summaries </li>
            </ul>
        </>
    )
}

export default NoPage;