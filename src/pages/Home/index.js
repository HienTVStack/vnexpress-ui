import { Box } from "@mui/material";
import Content from "../../components/Content";
import Footer from "../../components/Footer";
import SoHoa from "../../components/SoHoa";
import TopStory from "../../components/TopStory";
import Video from "../../components/Video";

function Home() {
    return (
        <Box mt={"130px"}>
            <TopStory />
            <Content />
            <Video />
            <Content />
            <SoHoa />
            <SoHoa />
            <Footer />
        </Box>
    );
}

export default Home;
