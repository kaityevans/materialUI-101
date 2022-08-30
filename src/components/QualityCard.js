import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function QualityCard(props) {
  const { notifications, setNotifications, isQuality, setIsQuality } = props;

  const handleChange = (e) => {
    setIsQuality(e.target.value);

    if (e.target.value === 1) {
      if (!notifications.length) {
        setNotifications((arr) => [
          ...arr,
          "Music quality is degraded. Increase quality if your connection allows it.",
        ]);
      }
      if (
        notifications.length > 1 &&
        !notifications.find(
          (el) =>
            el ===
            "Music quality is degraded. Increase quality if your connection allows it."
        )
      ) {
        setNotifications((arr) => [
          ...arr,
          "Music quality is degraded. Increase quality if your connection allows it.",
        ]);
      }
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
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Quality</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={isQuality}
              label="Sound Quality"
              onChange={handleChange}
            >
              <MenuItem value={1}>Low</MenuItem>
              <MenuItem value={2}>Normal</MenuItem>
              <MenuItem value={3}>High</MenuItem>
            </Select>
          </FormControl>
        </Box>
        {/* {BasicSelect(props)} */}
      </CardActions>
    </Card>
  );
}
