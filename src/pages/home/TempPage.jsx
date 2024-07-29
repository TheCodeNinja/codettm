// import React, { useState } from 'react';
// import './Temp.css';

// const Box = ({ title, color }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="box"
//       style={{ backgroundColor: color }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       {isHovered ? (
//         <div className="buttons">
//           <button className="button">Learn More</button>
//           <button className="button">Get Started</button>
//         </div>
//       ) : (
//         <div className="title">{title}</div>
//       )}
//     </div>
//   );
// };

// const TempPage = () => {
//   const boxes = [
//     { title: 'Grafana Loki', color: '#4caf50' },
//     { title: 'Grafana Tempo', color: '#2196f3' },
//     { title: 'Grafana Mimir', color: '#ff5722' },
//     { title: 'Grafana Pyroscope', color: '#9c27b0' }
//   ];

//   return (
//     <div className="App">
//       {boxes.map((box, index) => (
//         <Box key={index} title={box.title} color={box.color} />
//       ))}
//     </div>
//   );
// }

// export default TempPage;


import React, { useState } from 'react';
import './Temp.css';

const Box = ({ title, color, width, buttons }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="box"
      style={{ backgroundColor: color, width: width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered ? (
        <div className="buttons">
          {buttons.map((button, index) => (
            <button key={index} className="button">
              {button}
            </button>
          ))}
        </div>
      ) : (
        <div className="title">{title}</div>
      )}
    </div>
  );
};

const TempPage = () => {
  const boxes = [
    { title: 'Grafana Loki', color: '#4caf50', width: '200px', buttons: ['Learn More', 'Get Started'] },
    { title: 'Grafana Tempo', color: '#2196f3', width: '250px', buttons: ['Learn More'] },
    { title: 'Grafana Mimir', color: '#ff5722', width: '300px', buttons: ['Get Started', 'Documentation'] },
    { title: 'Grafana Pyroscope', color: '#9c27b0', width: '180px', buttons: ['Learn More', 'Get Started', 'Contact Us'] }
  ];

  return (
    <div className="App">
      {boxes.map((box, index) => (
        <Box 
          key={index} 
          title={box.title} 
          color={box.color} 
          width={box.width} 
          buttons={box.buttons} 
        />
      ))}
    </div>
  );
}

export default TempPage;