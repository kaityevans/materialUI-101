import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

export default function OnlineCard(props) {
  const {notifications, setNotifications, isToggled, setIsToggled} = props;

  const handleChange = () => {
    setIsToggled(!isToggled);
    
    if(!isToggled){
    if(!notifications.length){
    setNotifications(arr => [...arr, "Your application is offline. You won't be able to share or stream music to other devices."])
    };
    if(notifications.length >1 && !notifications.find(el=>el==="Your application is offline. You won't be able to share or stream music to other devices.")){
    setNotifications(arr => [...arr, "Your application is offline. You won't be able to share or stream music to other devices."])
    };
    };
    }
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <div className="card-title-container">
          <Typography variant="body2">{props.body}</Typography>
        </div>
      </CardContent>
      <CardActions>
        <Switch
          defaultChecked
          color="error"
          onChange={handleChange}
        />
        {/* {BasicSelect(props)} */}
      </CardActions>
    </Card>
  );
}