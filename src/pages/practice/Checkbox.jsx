import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

const checks = [
  { name: "sonam", selected: false },
  { name: "ritu", selected: false },
  { name: "lavish", selected: false },
];

const CheckBox = () => {
  const classes = useStyles();
  const [state, setState] = React.useState(checks);
  const [selectedArray, setselectedArray] = React.useState([]);

  const handleChange = (event, index) => {
    const newArray = checks.map((item, index1) => {
      if (index === index1) {
        item.selected = event.target.checked;
      }
      return item;
    });

    setState(newArray);
    const selectedArray = newArray.filter((item) => item.selected === true);
    setselectedArray(selectedArray);
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Assign responsibility</FormLabel>
        <FormGroup>
          {checks.map((item, index) => (
            <FormControlLabel
              control={
                <Checkbox
                  onChange={(event) => handleChange(event, index)}
                  name={item.name}
                  checked={state.selected}
                />
              }
              label={item.name}
            />
          ))}
        </FormGroup>
      </FormControl>
      <Typography>
        {selectedArray.map((item) => {
          return (
            <>
              <h3>{item.name}</h3>
            </>
          );
        })}
      </Typography>
    </div>
  );
};

export default CheckBox;
