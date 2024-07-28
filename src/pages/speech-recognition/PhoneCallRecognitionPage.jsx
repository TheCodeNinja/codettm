import React, { useState, useEffect, useRef } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ReactAudioPlayer from 'react-audio-player';
import './sr.css';

const PhoneCallRecognitionPage = () => {
  const { transcript, listening, resetTranscript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [callerTranscript, setCallerTranscript] = useState('');
  const [receiverTranscript, setReceiverTranscript] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isCaller, setIsCaller] = useState(true); // true for caller, false for receiver
  const audioRef = useRef(null);

  useEffect(() => {
    if (!listening && isListening) {
      if (transcript.trim()) {
        if (isCaller) {
          setCallerTranscript((prev) => prev + transcript + '\n');
        } else {
          setReceiverTranscript((prev) => prev + transcript + '\n');
        }
      }
      resetTranscript();

      // Toggle between caller and receiver
      setIsCaller(!isCaller);

      // Restart listening after a short delay
      const restartListening = setTimeout(() => {
        SpeechRecognition.startListening({ continuous: true, language: 'yue-Hant-HK' });
      }, 500); // 500ms delay

      return () => clearTimeout(restartListening);
    }
  }, [listening, isListening, isCaller, transcript, resetTranscript]);

  useEffect(() => {
    if (isListening && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
    }
  }, [isListening]);

  if (!browserSupportsSpeechRecognition) {
    return <div>Your browser does not support speech recognition software! Please use Chrome or Firefox.</div>;
  }

  const handleListenClick = () => {
    if (isListening) {
      SpeechRecognition.stopListening();
      setIsListening(false);
    } else {
      SpeechRecognition.startListening({ continuous: true, language: 'yue-Hant-HK' });
      setIsListening(true);
    }
  };

  const handleResetClick = () => {
    setCallerTranscript('');
    setReceiverTranscript('');
    resetTranscript();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Phone Call Transcription</h1>
        <button onClick={handleListenClick}>
          {isListening ? 'Stop Listening' : 'Start Listening'}
        </button>
        <button onClick={handleResetClick}>
          Reset Transcript
        </button>
        <p>{isListening ? 'Listening...' : 'Click "Start Listening" to begin'}</p>
        <audio
          src="/phone-call-audio.mp3"
          controls
          ref={audioRef}
        />
        <div className="transcript">
          <h2>Caller:</h2>
          <pre>{callerTranscript}</pre>
          <h2>Receiver:</h2>
          <pre>{receiverTranscript}</pre>
        </div>
      </header>
    </div>
  );
}

export default PhoneCallRecognitionPage