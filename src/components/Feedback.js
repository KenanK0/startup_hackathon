import { Box, Card, CardContent, Typography } from "@mui/material";
import React from "react";

function Feedback({ data }) {
  console.log(data);
  const dataContent = data.message.content.split("|||");

  console.log(dataContent);
  return (
    <Box
      display="flex"
      justifyContent={"center"}
      alignItems={"center"}
      flexDirection={"column"}
    >
      {dataContent.map((Name, index) => {
        //   console.log(index)
        console.log(Name);
        // Name = Name.split(":")[1];
        if (index === 0) {
          return (
            <Box
              key={index}
              display="flex"
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                // height: "25vh",
                // background: "#246b4d",
                margin: "5px",
                marginTop: "60px",
              }}
            >
              <h1
                style={{
                  fontFamily: "Gloria Hallelujah",
                  fontSize: "45px",
                  color: "lightcoral",
                }}
              >
                {Name}
              </h1>
            </Box>
          );
        }
        if (index === 1) {
          return (
            <Card
              key={index}
              display="flex"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                height: "30vh",
                width: "55%",
                // background: "#246b4d",
                margin: "8px",
                marginTop: "20px",
                boxShadow:
                  "0 5px 10px rgba(34, 139, 34, 0.4), 0 8px 25px rgba(0, 100, 0, 0.3)",
              }}
            >
              <CardContent>
                <h1
                  style={{
                    margin: 0,
                    padding: 0,
                    fontFamily: "Gloria Hallelujah",
                  }}
                >
                  Cleaning Instructions
                </h1>
                <Typography variant="subtitle1">{Name} </Typography>
              </CardContent>
            </Card>
          );
        }
        if (index === 2) {
          return (
            <Card
              key={index}
              display="flex"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                height: "30vh",
                width: "55%",
                // background: "#246b4d",
                margin: "8px",
                marginTop: "20px",
                boxShadow:
                  "0 5px 10px rgba(34, 139, 34, 0.4), 0 8px 25px rgba(0, 100, 0, 0.3)",
              }}
            >
              <CardContent>
                <h1
                  style={{
                    margin: 0,
                    padding: 0,

                    fontFamily: "Gloria Hallelujah",
                  }}
                >
                  Disposal Methods
                </h1>
                <Typography variant="subtitle1">{Name} </Typography>
              </CardContent>
            </Card>
          );
        }
        if (index === 3) {
          return (
            <Card
              key={index}
              display="flex"
              flexDirection={"column"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                height: "30vh",
                width: "55%",
                // background: "#246b4d",
                margin: "8px",
                marginTop: "20px",
                boxShadow:
                  "0 5px 10px rgba(34, 139, 34, 0.4), 0 8px 25px rgba(0, 100, 0, 0.3)",
              }}
            >
              <CardContent>
                <h1
                  style={{
                    margin: 0,
                    padding: 0,

                    fontFamily: "Gloria Hallelujah",
                  }}
                >
                  Alternative Uses
                </h1>
                <Typography variant="subtitle1">{Name} </Typography>
              </CardContent>
            </Card>
          );
        }
      })}

      <Box>{/* <p style={{ textAlign: "center" }}>{Name}</p> */}</Box>
    </Box>
  );
}

export default Feedback;
