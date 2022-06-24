import "./App.css";
import { Service } from "./components/Service";
import { StatusBar } from "./components/StatusBar";

function App() {
  const numberOfServices = 6;
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
                <StatusBar
                  key={`status_bar__security`}
                  type="security"
                  currentStatus={4}
                />
                <StatusBar
                  key={`status_bar__speed`}
                  type="speed"
                  currentStatus={9}
                />
                <StatusBar
                  key={`status_bar__stability`}
                  type="stability"
                  currentStatus={6}
                />
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
