import React from "react";
import { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";

const App = () => {
  const [post, setPost] = useState([]);

  const handleClick = () => {
    const httpReq = axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((response) => {
        let res = response.data; //data fetched by response.data
        console.log(res);
        let tempArry = [...post];
        tempArry.push(res[0]);

        setPost(tempArry);
        console.log(tempArry);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    console.log("ram");
  }, []);

  return (
    <div>
      <Grid container xs={12}>
        <Grid
          container
          xs={2}
          style={{ backgroundColor: "orange", justifyContent: "center" }}
        >
          This is my first grid
        </Grid>

        {/* This is my second grid i.e center grid */}
        <Grid
          container
          xs={8}
          style={{ backgroundColor: "white", justifyContent: "center" }}
        >
          <button
            style={{ height: 30, backgroundColor: "pink" }}
            onClick={handleClick}
          >
            Click me
          </button>
          {post.map((post) => {
            return (
              <div>
                <ul>
                  <img
                    alt={post.id}
                    src={post.url}
                    style={{ width: 70, height: 70, borderRadius: 70 / 2 }}
                  />
                </ul>
              </div>
            );
          })}
        </Grid>

        <Grid
          container
          xs={2}
          style={{ backgroundColor: "green", justifyContent: "center" }}
        >
          This is my third grid
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
