import React, { useState } from 'react'
import axios from 'axios';

const CreateMusic = () => {

  const [songTitle, setSongTitle] = useState("")

  const [audioFile, setAudioFile] = useState(null)


  const handleUpload = async (e) => {
    e.preventDefault();



    const formData = new FormData();
    formData.append('title', songTitle); // Gaane ka naam
    formData.append('music', audioFile); // Audio file (jaise .mp3)

    try {
      const response = await axios.post('http://localhost:3000/api/music/upload', formData, {
        withCredentials: true,
        // Axios apne aap sahi headers set kar leta hai jab aap FormData pass karte hain
      });

      alert(response.data.music.message);
    } catch (error) {
      alert(error.response?.data?.message || "Upload failed");
    }
  };

  return (
    <div className='text-white' ><h1>Create your music</h1>

      <form onSubmit={handleUpload}>

        <div>
          title <input type='text' name='title' placeholder='title of the song' onChange={(e) => setSongTitle(e.target.value)} />

        </div>



        <div>

          file <input type='file' name='file' placeholder='uplpoad your file' onChange={(e) => setAudioFile(e.target.files[0])} />

        </div>
        <button type='submit'><h1>Upload</h1></button>

      </form>

    </div>
  )
}

export default CreateMusic