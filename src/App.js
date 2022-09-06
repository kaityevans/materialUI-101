import { useState, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Button from "@mui/material/Button";
import "./App.css";
// import CustomCard from "./components/Card";
import OnlineCard from "./components/OnlineCard";
import VolumeCard from "./components/VolumeCard";
import QualityCard from "./components/QualityCard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [isHigh, setIsHigh] = useState(!100);
  const [isQuality, setIsQuality] = useState(!3);
  const [notifications, setNotifications] = useState({
    isLoud: null,
    isOnline: null,
    isLowQuality: null
  });

  useEffect(() => {
    console.log(isToggled);
  }, [isToggled]);

  useEffect(() => {
    console.log(isHigh);
  }, [isHigh]);

  useEffect(() => {
    console.log(isQuality);
  }, [isQuality]);

  useEffect(() => {
    console.log(notifications);
  }, [notifications]);

  return (
    <main>
      <Header title="Music Dashboard" />
      <div className={`App`}>
        {isLoggedIn === false ? (
          <form class="form" action="">
            <Input label="Username" />
            <Input type="password" label="Password" />
            <Button
              className="button"
              variant="contained"
              onClick={() => setIsLoggedIn(true)}
            >
              Login
            </Button>
          </form>
        ) : (
          <div className="dashboard-container">
            <h2>Welcome User!</h2>
            {/* This is where we will put our cards */}
            <div className="card-container">
              <OnlineCard
                notifications={notifications}
                setNotifications={setNotifications}
                isToggled={isToggled}
                setIsToggled={setIsToggled}
                title="Online Mode"
                body="Is this application connected to the internet?"
              />
              <VolumeCard
                notifications={notifications}
                setNotifications={setNotifications}
                isHigh={setIsHigh}
                setIsHigh={setIsHigh}
                title="Master Volume"
                body="Overrides all other sound settings in this application"
              />
              <QualityCard
                notifications={notifications}
                setNotifications={setNotifications}
                isQuality={isQuality}
                setIsQuality={setIsQuality}
                title="Sound Quality"
                body="Manually control the music quality in event of poor connection"
              />
            </div>
            <h4>System Notifications</h4>
            {/* This is where our notifications will go */}
            {notifications ? (
              <div>
                {Object.values(notifications).map((note, index) => (
                  <p key={index} style={{ color: "red" }}>
                    {note}
                  </p>
                ))}
              </div>
            ) : (
              <p>No new notifications to display.</p>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
export default App;
