/** @jsxImportSource theme-ui */
import {
  Card,
  Container,
  Heading,
  Button ,
  Spinner,
  Text,
} from "@theme-ui/components";
import FullBox from "../components/FullBox";
import MainLayout from "../internals/MainLayout";
import useSWR from "swr";
import fetcherWithToken from "../internals/fetcherWithToken";
import useUser from "../internals/useUser";
import { useState } from "react";

function AddAssets() {
  const { user, isError } = useUser();
  const { data: assetsData, assetsError } = useSWR(
    process.env.REACT_APP_AUTH_API_BASEURL + "api/test/getAllSymbols",
    fetcherWithToken
  );
  const [searchTerm, setSearchTerm] = useState("")
  const searchResultsMax = 10
  let searchResultsCount = 0
  

  if(isError) {
    console.log(isError)
  }

  if(assetsError) {
    console.log(assetsError)
  }

  if (!user || !assetsData) {
    return (
      <FullBox useDims>
        <Spinner />
        <Text>Loading Data</Text>
      </FullBox>
    );
  }

  return (
    <MainLayout>
      <Container>
        <input type="text" placeholder="Search Ticker" sx={{  
          margin: '20px 0 20px 0',
          width: '100%',
          height: '40px',
          fontSize: '20px',
          paddingLeft: '10px',
          borderRadius: '3px',
          border: '1px solid #6F6F6F',
          boxShadow: '0px 1px 3px 3px rgba(0,0,0,.2);'
        }} onChange={(event) => {
          searchResultsCount = 0;
          setSearchTerm(event.target.value)
          }}></input>
        {assetsData.filter((val) => {
          if (searchTerm === "") {
            return null;
          } else if(val.ticker.toLowerCase().includes(searchTerm.toLowerCase()) ) {
            searchResultsCount++;
            if(searchResultsCount < searchResultsMax) {
              return val
            }
            return null;
          }
        }).map((val, key) =>  {
          return (
            <Card key={key} sx={{ mb: 3,
            display: 'flex',
            justifyContent: 'space-between' }}>
              <div>
                <Heading as="h3">{val.ticker}</Heading>
                <Text sx={{ color: '#6F6F6F' }}>{val.name}</Text>
              </div>
              <div>
                <Button mr={2}>Add</Button>
              </div>
            </Card>
          );
        })

        }
      </Container>
    </MainLayout>
  );
}

export default AddAssets;
