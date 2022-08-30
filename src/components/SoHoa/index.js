import { Container, Grid } from "@mui/material";
import HeadingContent from "../HeadingContent";
import ItemImgRightTitle from "../ItemImgRightTitle";
import ItemImgTitle from "../ItemImgTitle";
import ItemImgTopTitleSub from "../ItemImgTopTitleSub";

function SoHoa() {
    return (
        <Container>
            <Grid container>
                <HeadingContent />
            </Grid>
            <Grid container maxWidth={"lg"} mt={2} spacing={2}>
                <Grid item lg={6} pr={2} borderRight={"1px solid #ccc"}>
                    <ItemImgTopTitleSub widthImg={500} heightImg={300} />
                </Grid>
                <Grid item lg={6}>
                    <Grid container spacing={3}>
                        <Grid item lg={6} pr={2} borderRight={"1px solid #ccc"}>
                            <ItemImgTitle widthImg={240} heightImg={144} />
                            <ItemImgTitle widthImg={240} heightImg={144} />
                        </Grid>
                        <Grid item lg={6}>
                            <ItemImgRightTitle />
                            <ItemImgRightTitle />
                            <ItemImgRightTitle />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default SoHoa;
