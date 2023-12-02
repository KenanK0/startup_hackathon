import axios from "axios";
import React, { useEffect } from "react";
import { useRef, useState } from "react";
import Button from "@mui/material/Button";
import { AppBar, Toolbar, Typography, Box, Slide } from "@mui/material";
import Logo from "../assets/CleanIT_Logo-nobg.png";
import Upload from "../assets/Upload.png";
// import { Link } from "react-router-dom";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import CircularProgress from "@mui/material/CircularProgress";
import Feedback from "../components/Feedback";
import { Link } from "react-router-dom";
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Home({ props }) {
    const apiKey= process.env.REACT_APP_OPENAI_API_KEY;
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState(null);
  const [response, setResponse] = useState(null);
  const fileInput = useRef(null);
  const [imageBase64, setImageBase64] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImageBase64(reader.result.split(",")[1]); // Remove the MIME type part
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    // setTimeout(() => {
    //   fetchAIResponse();
    // }, 3000);
  };

  const fetchAIResponse = async () => {
    setIsLoading(true);
    console.log("fetching");
    const data = {
      model: "gpt-4-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "text",
              text: " Identify trash in images, providing cleaning instructions, suggesting disposal methods, and offering alternative uses instead of disposal. Structure the response with clear sections for each task: 1. Product Name :namehere , 2. Cleaning Instruction : instructions here : , 3. Disposal Methods : content here , 4. Alternative Uses : content here, use this symbol to separe each section |||, we should only have 4 sections hence 3 |||the symbol is after a whole section . Enhance the response with relevant emojis for visual appeal and encourage creativity and detailed explanations. This approach ensures the instructions are coherent, easy to follow, and engaging, making the task more user-friendly and effective for CleanITAi. ",
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/jpeg;base64,${imageBase64}`,
              },
            },
          ],
        },
      ],
      max_tokens: 4000,
    };
    try {
      const result = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        data,
        {
          headers: {
            Authorization: `Bearer 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`,
          },
        }
      );
      setIsLoading(false);
      setResponse(result.data.choices[0]);
      console.log(result.data.choices[0]);
    } catch (error) {
      console.error("Error fetching response from OpenAI:", error);
      setIsLoading(false);
    }
  };

  //   useEffect(() => {
  //     fetchAIResponse();
  //   }, []);

  return (
    <Box sx={{ minheight: "100vh" }}>
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar sx={{ height: "10vh", background: "#246b4d" }}>
            <Box sx={{ flexGrow: 1 }}>
              <img src={Logo} alt="Logo" style={{ height: 100 }} />
            </Box>

            <Button variant="outlined" color="inherit">
              Community
            </Button>
            <Button variant="outlined" color="inherit">
              <Link style={{ color: "white" }} to="/">
                Logout
              </Link>
            </Button>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        style={{
          width: "100%", // Fill the width of the parent
          height: "85vh", // Set to the desired height
          backgroundImage: `url(${Upload})`,
          backgroundSize: "cover", // Ensure the image covers the full box
          backgroundPosition: "center bottom", // Center the image
          //   overflow: "hidden",
        }}
      >
        <Box
          onClick={() => fileInput.current.click()}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          alignSelf="end"
        >
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{
              height: "180px",
              width: "180px",
              borderRadius: "999px",
              background: "#246b4d	",
              color: "white",
              marginBottom: "-80px",
              ":hover": {
                cursor: "pointer", // This sets the cursor to a pointer on hover
                background: "#00b33c",
                transition: "0.3s",
                // color: "black",
              },
            }}
          >
            {!isLoading && (
              <CloudUploadIcon fontSize="large" sx={{ margin: 0.5 }} />
            )}
            {!isLoading ? (
              <Typography variant="h4">Upload</Typography>
            ) : (
              <CircularProgress />
            )}
          </Box>
        </Box>
      </Box>
      <input
        type="file"
        ref={fileInput}
        style={{ display: "none" }}
        onChange={handleImageChange}
      />


      <Button size="large" variant="contained" onClick={fetchAIResponse} sx={{
        margin:'10px'
      }}>
        fetch
      </Button>

      {response && <Feedback data={response} />}
    </Box>
  );
}

export default Home;
