import React from "react";
import Alert from "@material-ui/lab/Alert";
import { FireBaseData } from './FireBase.js'

class Google extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client: {
          clientId: "JSAPP",
          clientVersion: "1.5.2",
        },
        threatInfo: {
          threatTypes: [
            "MALWARE",
            "SOCIAL_ENGINEERING",
            "UNWANTED_SOFTWARE",
            "POTENTIALLY_HARMFUL_APPLICATION",
          ],
          platformTypes: ["WINDOWS", "LINUX"],
          threatEntryTypes: ["URL"],
          threatEntries: [{ url: this.props.value }],
        },
      }),
    };


    fetch(
      "https://safebrowsing.googleapis.com/v4/threatMatches:find?key=AIzaSyAkr3rKH2-xicIld4B6rHrt6RF9gnLctd0",
      requestOptions
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {

    const { error, isLoaded, items } = this.state;

    FireBaseData(this.props.value, items);


    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {!items && (
            <Alert variant="outlined" severity="success">
              Looks good! Google shows it's safe!
            </Alert>
          )}

          {items && (
              <Alert variant="outlined" severity="error">
                This site is flagged.
              </Alert>
            ) &&
            items.map((item) => (
              <li key={item.name}>
                {item.name} {item.price}
              </li>
            ))}
        </ul>
      );
    }
  }
}

export default Google;
