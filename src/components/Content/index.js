import { Box, Grid } from "@mui/material";
import { Container } from "@mui/system";
import ContentItemLeft from "./ContentItemLeft";
import ItemImgLeftContentRightTitleSub from "../ItemImgLeftContentRightTitleSub";
import ItemNoImg from "../ItemNoImg";
import HeadingContent from "../HeadingContent";

function Content() {
    return (
        <Container sx={{ mt: 2 }}>
            <Grid container maxWidth={"lg"}>
                <Grid item lg={4} pr={2} sx={{ borderRight: "1px solid #ccc" }}>
                    <ContentItemLeft />
                    <ContentItemLeft />
                    <ContentItemLeft />
                    <ContentItemLeft />
                    <ContentItemLeft />
                    <ContentItemLeft />
                </Grid>
                <Grid item lg={8} pl={2}>
                    <HeadingContent />
                    <Grid
                        container
                        pt={2}
                        pb={2}
                        ml={1}
                        sx={{ borderBottom: "1px solid #ccc" }}
                    >
                        <Grid item lg={7} pr={2}>
                            <ItemImgLeftContentRightTitleSub
                                widthImg={225}
                                heightImg={135}
                            />
                        </Grid>
                        <Grid item lg={5} pl={2} borderLeft={"1px solid #ccc"}>
                            <ItemNoImg />
                        </Grid>
                    </Grid>
                    <Grid container mt={1}>
                        <ul
                            style={{
                                listStyleType: "square",
                                display: "flex",
                                alignItems: "center",
                                fontWeight: 600,
                            }}
                        >
                            <li>
                                Kinh Bắc giảm hơn 2.200 tỷ đồng lãi sau kiểm
                                toán
                            </li>
                            <li>
                                Kinh Bắc giảm hơn 2.200 tỷ đồng lãi sau kiểm
                                toán
                            </li>
                            <li>
                                Kinh Bắc giảm hơn 2.200 tỷ đồng lãi sau kiểm
                                toán
                            </li>
                        </ul>
                    </Grid>
                    <Box borderTop={"1px solid #ccc"} mb={2}>
                        <HeadingContent />
                    </Box>
                    <Grid
                        container
                        pt={2}
                        pb={2}
                        ml={1}
                        sx={{ borderBottom: "1px solid #ccc" }}
                    >
                        <Grid item lg={7} pr={2}>
                            <ItemImgLeftContentRightTitleSub
                                widthImg={225}
                                heightImg={135}
                            />
                        </Grid>
                        <Grid item lg={5} pl={2} borderLeft={"1px solid #ccc"}>
                            <ItemNoImg />
                        </Grid>
                    </Grid>
                    <Grid container mt={1}>
                        <ul
                            style={{
                                listStyleType: "square",
                                display: "flex",
                                alignItems: "center",
                                fontWeight: 600,
                            }}
                        >
                            <li>
                                Kinh Bắc giảm hơn 2.200 tỷ đồng lãi sau kiểm
                                toán
                            </li>
                            <li>
                                Kinh Bắc giảm hơn 2.200 tỷ đồng lãi sau kiểm
                                toán
                            </li>
                            <li>
                                Kinh Bắc giảm hơn 2.200 tỷ đồng lãi sau kiểm
                                toán
                            </li>
                        </ul>
                    </Grid>
                    <Box borderTop={"1px solid #ccc"} mb={2}>
                        <HeadingContent />
                    </Box>
                    <Grid
                        container
                        pt={2}
                        pb={2}
                        ml={1}
                        sx={{ borderBottom: "1px solid #ccc" }}
                    >
                        <Grid item lg={7} pr={2}>
                            <ItemImgLeftContentRightTitleSub
                                widthImg={225}
                                heightImg={135}
                            />
                        </Grid>
                        <Grid item lg={5} pl={2} borderLeft={"1px solid #ccc"}>
                            <ItemNoImg />
                        </Grid>
                    </Grid>
                    <Grid container mt={1}>
                        <ul
                            style={{
                                listStyleType: "square",
                                display: "flex",
                                alignItems: "center",
                                fontWeight: 600,
                            }}
                        >
                            <li>
                                Kinh Bắc giảm hơn 2.200 tỷ đồng lãi sau kiểm
                                toán
                            </li>
                            <li>
                                Kinh Bắc giảm hơn 2.200 tỷ đồng lãi sau kiểm
                                toán
                            </li>
                            <li>
                                Kinh Bắc giảm hơn 2.200 tỷ đồng lãi sau kiểm
                                toán
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Content;
