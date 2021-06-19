/** @jsxImportSource theme-ui */

import Dropdown from "./Dropdown";
import { Button, Heading, Input, Label, Paragraph } from "@theme-ui/components";
import { useState } from "react";

function AssetNotificationsMenu({ revalidateAssetData, toast, ...props }) {
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const [validationMsg, setValidationMsg] = useState("");
  const ticker = props.ticker;

  const handleSubmit = (event) => {
    event.preventDefault();
    const accessToken = localStorage.getItem("accessToken");

    if (min) {
      const url = process.env.REACT_APP_AUTH_API_BASEURL + "api/test/setMin";
      if (isNaN(min)) {
        setValidationMsg("Min is not a valid number.");
        return;
      }
      const parsedInt = parseFloat(min);
      if (parsedInt < 0) {
        setValidationMsg("Min cannot be negative.");
        return;
      }

      const body = {
        ticker: ticker,
        val: parsedInt,
      };
      console.log(body);
      fetch(url, {
        method: "POST",
        headers: {
          "x-access-token": accessToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((response) => console.log(response.json()))
        .then(() => {
          revalidateAssetData();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }

    if (max) {
      const url = process.env.REACT_APP_AUTH_API_BASEURL + "api/test/setMax";
      if (isNaN(max)) {
        setValidationMsg("Max is not a valid number.");
        return;
      }
      const parsedInt = parseFloat(max);
      if (parsedInt < 0) {
        setValidationMsg("Max cannot be negative.");
        return;
      }

      const body = {
        ticker: ticker,
        val: parsedInt,
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
        .then(() => {
          revalidateAssetData();
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div {...props}>
      <Dropdown toggle={<Button variant="secondary">Notify</Button>}>
        <form
          onSubmit={handleSubmit}
          sx={{
            padding: 4,
            width: "200px",
          }}
        >
          <Heading as="h6">{ticker} Notifications</Heading>
          <Label htmlFor="min">Minimum</Label>
          <Input
            type="number"
            name="min"
            min="0"
            value={min}
            onChange={(e) => setMin(e.target.value)}
          />
          <Label htmlFor="max">Maximum</Label>
          <Input
            type="number"
            name="max"
            min="0"
            value={max}
            onChange={(e) => setMax(e.target.value)}
          />
          <Paragraph variant="error">{validationMsg}</Paragraph>
          <Button type="submit" sx={{ mt: 3 }}>
            Set
          </Button>
        </form>
      </Dropdown>
    </div>
  );
}

export default AssetNotificationsMenu;
