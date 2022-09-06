import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
// import BasicSelect from "./components/CardActions"

export default function VolumeCard(props) {
  const { notifications, setNotifications, isHigh, setIsHigh } = props;
  const handleChange = (e) => {
    setIsHigh(e.target.value);

    if (e.target.value > 80) {
      setNotifications({
        ...notifications,
        isLoud:
          "Listening to music at a high volume could cause long-term hearing loss.",
      });
    } else {
      setNotifications({
        ...notifications,
        isLoud: null,
      });
    }
  };
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
        <Slider
          aria-label="Small steps"
          defaultValue={40}
          // getAriaValueText={valuetext}
          step={10}
          marks
          min={0}
          max={100}
          valueLabelDisplay="auto"
          onChange={handleChange}
        />
        {/* {BasicSelect(props)} */}
      </CardActions>
    </Card>
  );
}
