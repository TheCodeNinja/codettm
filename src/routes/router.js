import { createBrowserRouter } from "react-router-dom";
import ReactVerticalTimeline from "../pages/timeline/ReactVerticalTimeline";
import ReactVerticalTimeline2 from "../pages/timeline/ReactVerticalTimeline2";
import Home from "../pages/home/Home";
import AgGridTable from "../pages/ag-grid/AgGridTable";
import SpeechRecognitionPage from "../pages/speech-recognition/SpeechRecognitionPage";
import PhoneCallRecognitionPage from "../pages/speech-recognition/PhoneCallRecognitionPage";
import AudioSearchPage from "../pages/speech-recognition/AudioSearchPage";
import ThreeDimensionPage from "../pages/3d/ThreeDimensionPage";
import ScrollPage from "../pages/scroll/ScrollPage";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ag-grid-table",
    element: <AgGridTable />,
  },
  {
    path: "/audio-search",
    element: <AudioSearchPage />,
  },
  {
    path: "/speech-recognition",
    element: <SpeechRecognitionPage />,
  },
  {
    path: "/phone-call-recognition",
    element: <PhoneCallRecognitionPage />,
  },
  {
    path: "/react-vertical-timeline",
    element: <ReactVerticalTimeline />,
  },
  {
    path: "/react-vertical-timeline2",
    element: <ReactVerticalTimeline2 />,
  },
  {
    path: "/3d",
    element: <ThreeDimensionPage />,
  },
  {
    path: "/3d1",
    element: <ScrollPage />,
  }
]);

export default router;