import React, { useState } from 'react';
import Canvas from './Canvas.js'
import help from '../pictures/logos/help.png'

function SummaryArea() {
    
    const [ file, setFile ] = useState();
    let token;

    function makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function createData(evt) {

        if (evt.target.files[0].size > 30000000){
            alert("You have chosen a file too large to be processed! Please upload a smaller file (max 30MB), and stay tuned for when we release support for larger file sizes. Thank you!")
        }
        else{
            setFile(evt.target.files[0]);
        }
        
    }

    function uploadFile() {
        token = makeid(32);
        const uploadData = new FormData();

        uploadData.append("record", file);
        uploadData.append("token", token);

        console.log(uploadData);
        document.querySelector('canvas').style.display = 'inline';
        document.querySelector('canvas').value = "Transcribing"

        let url = "https://summarization-nationbackend-production.up.railway.app/transcribe/";
        fetch(url, {
            method: "POST",
            body: uploadData
        }).then(res => {
            if (!res.ok) {
                document.querySelector('canvas').style.display = 'none'
                const transcribe = document.getElementById("readSA");
                transcribe.value = "Internal Error with our API! Please try again later."
                throw new Error('Error with api');
            }
                return res.json();
            })
        .then( data => {
            document.querySelector('canvas').style.display = 'none'
            const transcribe = document.getElementById("readSA");
            transcribe.value = data;
        })
        .catch(error => {
            console.log(error);
            document.querySelector('canvas').style.display = 'none';
            
            const transcribe = document.getElementById("readSA");
            transcribe.value = "Internal Error! Please try again later."
        })
    }

    function downloadFile() {
        const download = document.createElement('a')
        const summary = document.getElementById("editSA");
        const content = summary.value
        const fileName = 'summary.txt'
        
        const userSummary = new Blob([content], { type: 'plain/text' })
        const fileUrl = URL.createObjectURL(userSummary)

        download.setAttribute('href', fileUrl)
        download.setAttribute('download', fileName)
        download.style.display = 'none'

        document.body.appendChild(download)
        download.click()
        document.body.removeChild(download)
    }

    function summarizeFile() {
        
        let url = "https://summarization-nationbackend-production.up.railway.app/summarize/"
        const uploadData = new FormData();

        const level = document.getElementById("languageTypeSelector").value;
        const choice = document.getElementById("summaryTypeSelector").value;
        const transcribe = document.getElementById("readSA");

        if (transcribe.value === ""){
            alert("The transcription section is blank, so there is nothing to summarize! Upload a file and hit Upload File to get a transcription, or paste some text of your own to be summarized.")
            return null;
        }

        document.querySelector('canvas').style.display = 'inline';
        document.querySelector('canvas').value = "Summarizing"

        uploadData.append("choice", choice);
        uploadData.append("transcript", transcribe.value);
        uploadData.append("level", level);


        const options = {method: "POST", body: uploadData}
        fetch(url, options).then(res => {
        if (!res.ok) {
            document.querySelector('canvas').style.display = 'none'
            throw new Error('Error with api');
        }
            return res.json();
        }).then(data => {
            document.querySelector('canvas').style.display = 'none'
            // data is whatever the backend responds with
            console.log(data); 
            const summary = document.getElementById("editSA");
            summary.value = data;
        }).catch(err => {
            document.querySelector('canvas').style.display = 'none';
            console.log(err);
        });
    }

    function uploadMsg(){

        if (file === undefined) {
            return alert("You must select a file to upload and summarize. The Upload Button will not be enabled if a file is not chosen!");
        }

        uploadFile();
        const transcribe = document.getElementById("readSA");
        const summary = document.getElementById("editSA");
        transcribe.value = "File uploaded! Click \"Summarize\" to get your output!";
        summary.value = "File uploaded! Click \"Summarize\" to get your output!";
    }
    
    
    return (
        <>
            <h2 className='text-white my-1.5 text-2xl font-bold'>Generated Summary</h2>

            <div id="sumContainer" class="grid grid-cols-2 gap-5 h-5/6 my-2">
                <Canvas />
                <textarea id="readSA" class="resize-none text-black p-5 col-span-1" placeholder="Your uploaded file's transcription will be placed here! If you already have a transcription, you can paste it here and hit 'Summarize' to get started."></textarea>
                <textarea id="editSA" class="resize-none text-black p-5 col-span-1" placeholder='Your summary will be returned here. You can edit the text here to fix any issues and download them'></textarea>
            </div>

            <div>
                <div class="monacoFontWhite">
                <input id="fileSelector" class="sumFunc m-1 float-left" type="file" accept=".mp4,.mp3,.m4a,.mov" onChange={(evt) => createData(evt)}  className='m-1 float-left'></input>
                <select id="summaryTypeSelector" class="sumFunc p-1 m-1 text-black float-left" name="summaryType">
                    <option value="default">Select Summary type</option>
                    <option value="long">Long summarization</option>
                    <option value="short">Short summarization</option>
                    <option value="bullets">Bullet points summary</option>
                    <option value="email">Email summarization</option>
                </select>
                <select id="languageTypeSelector" class="sumFunc p-1 m-1 text-black float-left" name="summaryType">
                    <option value="defaultLevel">Select Language Level</option>
                    <option value="elementary">Elementary Level</option>
                    <option value="middle">Middle Level</option>
                    <option value="highschool">Highschool Level</option>
                    <option value="collegephd">College/PhD Level</option>
                </select>

                <button className='sumFunc bg-white text-black px-2.5 py-1 m-1 float-right' onClick={downloadFile}>Download</button>
                <button className='sumFunc bg-white text-black px-2.5 py-1 m-1 float-right' onClick={summarizeFile}>Summarize</button>
                <button className='sumFunc bg-white text-black px-2.5 py-1 m-1 float-right' onClick={uploadMsg}>Transcribe File</button>
                <button class="rounded-button object-right" onClick="javascript:showPopupSmart46915();" type="button">
                        <ion-icon name="help-circle-outline" size="large"></ion-icon>
                    </button>
                    <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
                </div>
            </div>
        </>
    );
  }

  
  
  export default SummaryArea;