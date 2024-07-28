import React, { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './sr.css';

const SpeechRecognitionPage = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [listening, setListening] = useState(false);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return <div>Your browser does not support speech recognition software! Please use Chrome or Firefox.</div>;
  }

  const handleListenClick = () => {
    if (listening) {
      SpeechRecognition.stopListening();
      setListening(false);
    } else {
      SpeechRecognition.startListening({ continuous: true, language: 'yue-Hant-HK' });
      setListening(true);
    }
  };

  const handleResetClick = () => {
    resetTranscript();
  };

  return (
    <div style={{ padding: '20px'}}>
      <header className="App-header">
        <h1>Hospital IT Call Center</h1>
        <button className="speech-recognition-button" onClick={handleListenClick}>
          {listening ? 'Stop Listening' : 'Start Listening'}
        </button>
        <button className="speech-recognition-button" onClick={handleResetClick}>
          Reset Transcript
        </button>
        <p>{listening ? 'Listening...' : 'Click "Start Listening" to begin'}</p>
        <div className="transcript">
          <p>{transcript}</p>
        </div>
      </header>
    </div>
  );

  
}

export default SpeechRecognitionPage;
