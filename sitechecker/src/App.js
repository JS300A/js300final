import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  Typography,
  IconButton,
  Card,
  CardActionArea,
} from "@material-ui/core";
import Google from "./Google";
import ThumbIO from "./ThumbIO";
import "./App.css";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();
    this.state = { url: 'www.google.com' };
  }

  handleSubmit(event) {
    this.setState({
      url: this.input.current.value,
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <AppBar position="fixed">
              <Toolbar>
                {" "}
                <Typography variant="h6">Site Validation Checker</Typography>
              </Toolbar>
            </AppBar>
          </Grid>
          <Grid item xs={10} sm={8}>
            <form onSubmit={this.handleSubmit}>
              <label>
                <input type="text" ref={this.input} />
              </label>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginLeft: 10 }}
              >
                Validate Site
              </Button>
            </form>
          </Grid>
          <Grid item xs={8} sm={6}>
            <Typography variant="h6">
              <Google value={this.state.url} />
            </Typography>
          </Grid>
          <Grid item xs={4} sm={6}>
            <Card>
              <CardActionArea>
                <Typography variant="h5" component="h2">
                  Screenshot:
                </Typography>
                <ThumbIO value={this.state.url}/>
              </CardActionArea>
            </Card>
          </Grid>
          <AppBar position="static" color="primary">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
              ></IconButton>
              <Typography variant="h6" color="inherit">
                2020 Site Checker
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </div>
    );
  }
}

export default App;
