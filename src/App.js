import "./App.css";
import { Service } from "./components/Service";
import { StatusBar } from "./components/StatusBar";

function App() {
  const numberOfServices = 6;
  const numberOfStatuses = 3;
  return (
    <div className="App">
      <body>
        <div>
          <div className="task-container">
            <div className="title">Task</div>
            <div className="task">
              <div className="service">
                {[...Array(numberOfServices).keys()].map((i) => (
                  <Service
                    key={`service_${i}`}
                    src="https://cdn.icon-icons.com/icons2/510/PNG/512/at_icon-icons.com_50456.png"
                  />
                ))}
              </div>
              <div className="status-bar">
                {[...Array(numberOfStatuses).keys()].map((i) => (
                  <StatusBar key={`status_bar__${i}`} StatusBar />
                ))}
              </div>
            </div>
          </div>
          <div className="box">AWS box</div>
          <div className="box">Azure box</div>
        </div>
      </body>
    </div>
  );
}

export default App;
