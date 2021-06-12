/** @jsxImportSource theme-ui */

import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Button, Heading, Input, Label 
} from "@theme-ui/components";
import { useState } from "react";

function AssetNotificationsMenu(props) {
    const [min, setMin] = useState("");
    const [max, setMax] = useState("");
    const [postData, setPostData] = useState({});
    const ticker = props.ticker

    const handleSubmit = (event) => {
        event.preventDefault();
        const accessToken = localStorage.getItem("accessToken");

        if(min) {
            const url = process.env.REACT_APP_AUTH_API_BASEURL + "api/test/setMin";
            const body = {
                ticker: ticker,
                val: parseFloat(min),
            };
            fetch(url, {
                method: "POST",
                headers: {
                  "x-access-token": accessToken,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
              })
                .then((response) => console.log(response.json()))
                .catch((error) => {
                  console.error("Error:", error);
            });
        }

        if(max) {
            const url = process.env.REACT_APP_AUTH_API_BASEURL + "api/test/setMax";
            const body = {
                ticker: ticker,
                val: parseFloat(max),
            };
            fetch(url, {
                method: "POST",
                headers: {
                  "x-access-token": accessToken,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
              })
                .then((response) => console.log(response.json()))
                .catch((error) => {
                  console.error("Error:", error);
            });
        }
      };

    return (
       <div>
           <Dropdown>
                <Dropdown.Toggle>
                    Notify
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <form onSubmit={handleSubmit} sx={{
                        padding: '16px',
                        width: '200px'
                    }}>
                        <Heading as="h6">Notifications for {ticker}</Heading>
                        <Label htmlFor="min">Minimum</Label>
                        <Input
                        type="text"
                        name="min"
                        value={min}
                        onChange={(e) => setMin(e.target.value)}
                        />
                        <Label htmlFor="max">Maximum</Label>
                        <Input
                        type="text"
                        name="max"
                        value={max}
                        onChange={(e) => setMax(e.target.value)}
                        />
                        <Button type="submit" sx={{
                            margin: '5px'
                        }}>Set</Button>
                    </form>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}

export default AssetNotificationsMenu;