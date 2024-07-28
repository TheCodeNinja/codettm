import React, { useEffect, useState } from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import axios from 'axios';
import './sr.css';

const incidentData = [
  { incidentNo: "INC001", title: "Server Down", description: "Main server is not responding.", priority: "High" },
  { incidentNo: "INC002", title: "Email Issue", description: "Unable to send emails.", priority: "Medium" },
  { incidentNo: "INC003", title: "Login Failure", description: "Users cannot log in to the system.", priority: "High" },
  { incidentNo: "INC004", title: "Network Latency", description: "Slow network response time.", priority: "Low" },
  { incidentNo: "INC005", title: "Printer Offline", description: "Office printer is offline.", priority: "Low" },
  { incidentNo: "INC006", title: "伺服器故障", description: "主要伺服器沒有反應。", priority: "高" },
  { incidentNo: "INC007", title: "電郵問題", description: "無法發送電郵。", priority: "中" },
  { incidentNo: "INC008", title: "登入失敗", description: "用戶無法登入系統。", priority: "高" },
  // Add more realistic incidents here
];

const AudioSearchPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {
    transcript,
    resetTranscript,
    listening,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  // useEffect(() => {
  //   setSearchTerm(transcript);
  // }, [transcript]);

  useEffect(() => {
    setSearchTerm(transcript);
    if (transcript) {
      fetchSearchResults(transcript);
    }
  }, [transcript]);

  const fetchSearchResults = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post('http://localhost:8080/ask', { question: query });
      setSearchResults(response.data);
    } catch (err) {
      setError('Error fetching search results');
    } finally {
      setLoading(false);
    }
  };

  const startListening = () => SpeechRecognition.startListening({ language: 'zh-HK' });

  const filteredIncidents = incidentData.filter(incident =>
    incident.title.includes(searchTerm) ||
    incident.description.includes(searchTerm)
  );

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div className="audio-search-container">
      <div className="audio-search-search-box">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="搜索事件..."
        />
        <button onClick={resetTranscript}>重置</button>
        <button onClick={startListening}>開始聆聽</button>
        <button onClick={SpeechRecognition.stopListening}>停止聆聽</button>
      </div>
      <div className="audio-search-cards">
        {filteredIncidents.map(incident => (
          <div key={incident.incidentNo} className="audio-search-card">
            <h3>{incident.title}</h3>
            <p>{incident.description}</p>
            <p><strong>優先級:</strong> {incident.priority}</p>
          </div>
        ))}
      </div>
      <div>
        <p>{listening ? "正在聆聽..." : "點擊“開始聆聽”以使用語音搜索。"}</p>
        <p>轉錄: {transcript}</p>
      </div>
    </div>
  );
}

export default AudioSearchPage;
