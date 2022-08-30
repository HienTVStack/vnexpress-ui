import {
    Box,
    Button,
    Container,
    Grid,
    IconButton,
    Stack,
    Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";

import EmailIcon from "@mui/icons-material/Email";

const MENUS_LIST = [
    {
        title: "Thời sự",
        slug: "thoi-su",
        children: [
            { title: "Chính trị", slug: "chinh-tri" },
            { title: "Dân sinh", slug: "dan-sinh" },
        ],
    },

    {
        title: "Góc nhìn",
        slug: "thoi-su",
        children: [
            { title: "Chính trị", slug: "chinh-tri" },
            { title: "Dân sinh", slug: "dan-sinh" },
        ],
    },
    {
        title: "Thế giới",
        slug: "thoi-su",
        children: [
            { title: "Chính trị", slug: "chinh-tri" },
            { title: "Dân sinh", slug: "dan-sinh" },
        ],
    },
    {
        title: "Video",
        slug: "thoi-su",
        children: [
            { title: "Chính trị", slug: "chinh-tri" },
            { title: "Dân sinh", slug: "dan-sinh" },
        ],
    },
    {
        title: "Video",
        slug: "thoi-su",
        children: [
            { title: "Chính trị", slug: "chinh-tri" },
            { title: "Dân sinh", slug: "dan-sinh" },
        ],
    },
    {
        title: "Video",
        slug: "thoi-su",
        children: [
            { title: "Chính trị", slug: "chinh-tri" },
            { title: "Dân sinh", slug: "dan-sinh" },
        ],
    },
];

function Footer() {
    return (
        <Container
            sx={{
                marginTop: "20px",
                marginBottom: "20px",
                padding: "20px 0",
            }}
        >
            <Grid
                container
                maxWidth={"lg"}
                sx={{
                    borderBottom: "1px solid #ccc",
                    borderTop: "2px solid #ccc",
                    padding: "20px 0",
                }}
            >
                <Grid item lg={3}>
                    <Stack>
                        {MENUS_LIST.map((item, index) => (
                            <Typography
                                component={Link}
                                to={"/"}
                                sx={{
                                    fontWeight: 600,
                                    color: "#000",
                                    textDecoration: "none",
                                    "&:hover": { textDecoration: "underline" },
                                }}
                                p={1}
                            >
                                {item.title}
                            </Typography>
                        ))}
                    </Stack>
                </Grid>
                <Grid item lg={2}>
                    <Stack>
                        {MENUS_LIST.map((item, index) => (
                            <Typography
                                component={Link}
                                to={"/"}
                                sx={{
                                    color: "#000",
                                    textDecoration: "none",
                                    "&:hover": { textDecoration: "underline" },
                                }}
                                p={1}
                            >
                                {item.title}
                            </Typography>
                        ))}
                    </Stack>
                </Grid>

                <Grid item lg={2}>
                    <Stack>
                        {MENUS_LIST.map((item, index) => (
                            <Typography
                                component={Link}
                                to={"/"}
                                sx={{
                                    color: "#000",
                                    textDecoration: "none",
                                    "&:hover": { textDecoration: "underline" },
                                }}
                                p={1}
                            >
                                {item.title}
                            </Typography>
                        ))}
                    </Stack>
                </Grid>
                <Grid item lg={2} sx={{ borderLeft: "1px solid #ccc" }} pl={2}>
                    <Stack>
                        {MENUS_LIST.map((item, index) => (
                            <Typography
                                component={Link}
                                to={"/"}
                                sx={{
                                    color: "#000",
                                    textDecoration: "none",
                                    "&:hover": { textDecoration: "underline" },
                                }}
                                p={1}
                            >
                                {item.title}
                            </Typography>
                        ))}
                    </Stack>
                </Grid>
                <Grid item lg={3} sx={{ borderLeft: "1px solid #ccc" }} pl={2}>
                    <Box>
                        <Typography>Tải ứng dụng</Typography>
                        <Box display={"flex"} alignItems={"center"}>
                            <Button
                                sx={{ mr: 2 }}
                                size="small"
                                variant="outlined"
                                children={
                                    <img
                                        src="https://s1.vnecdn.net/vnexpress/restruct/i/v641/v2_2019/pc/graphics/logo.svg"
                                        alt=""
                                        width="100%"
                                    />
                                }
                            />
                            <Button
                                size="small"
                                variant="outlined"
                                children={
                                    <img
                                        src="https://s1.vnecdn.net/vnexpress/restruct/i/v641/v2_2019/pc/graphics/logo.svg"
                                        alt=""
                                        width={"100%"}
                                    />
                                }
                            />
                        </Box>
                    </Box>
                    <Box mt={2}>
                        <Typography>Tải ứng dụng</Typography>
                        <Box display={"flex"} alignItems={"center"}>
                            <Button
                                size="small"
                                sx={{ mr: 2 }}
                                startIcon={<EmailIcon />}
                            >
                                Tòa soạn
                            </Button>
                            <Button
                                size="small"
                                sx={{ mr: 2 }}
                                startIcon={<EmailIcon />}
                            >
                                Quảng cáo
                            </Button>
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                            <Button size="small" startIcon={<EmailIcon />}>
                                Hợp tác bản quyền
                            </Button>
                        </Box>
                    </Box>
                    <Box mt={2}>
                        <Typography>Đường dây nóng</Typography>
                        <Box display={"flex"} justifyContent={"space-between"}>
                            <Typography fontWeight={600}>
                                083.888.0123
                            </Typography>
                            <Typography fontWeight={600}>
                                083.888.0123
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item lg={12}>
                    <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        pt={2}
                        pb={4}
                        // sx={{ borderTop: "1px solid #ccc" }}
                    >
                        <Box display={"flex"} alignItems={"center"}>
                            <Typography variant="body2">Báo điện tử</Typography>
                            <img
                                src="https://s1.vnecdn.net/vnexpress/restruct/i/v641/v2_2019/pc/graphics/logo.svg"
                                alt=""
                            />
                        </Box>
                        <Box display={"flex"} alignItems={"center"}>
                            <Typography variant="body2">RSS</Typography>
                            <Typography variant="body2">
                                Theo dõi VnExpress trên
                            </Typography>

                            <IconButton children={<FacebookIcon />} />
                            <IconButton children={<FacebookIcon />} />
                            <IconButton children={<FacebookIcon />} />
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
            <Grid
                container
                maxWidth={"lg"}
                spacing={2}
                pt={2}
                sx={{ borderTop: "1px solid #ccc" }}
            >
                <Grid item lg={4}>
                    <Typography variant="body2" fontWeight={600}>
                        Báo tiếng Việt nhiều người xem nhất
                    </Typography>
                    <Typography variant="body2">
                        Thuộc Bộ Khoa học Công nghệ
                    </Typography>
                    <Typography variant="body2">
                        Số giấy phép: 548/GP-BTTTT ngày 24/08/2021
                    </Typography>
                </Grid>
                <Grid item lg={4}>
                    <Typography variant="body2">
                        Tổng biên tập: Phạm Hiếu
                    </Typography>
                    <Typography variant="body2">
                        Địa chỉ: Tầng 5, Tòa nhà FPT, 17 phố Duy Tân, Cầu Giấy,
                        Hà Nội
                    </Typography>
                    <Typography variant="body2">
                        Điện thoại: 024 7300 8899 - máy lẻ 4500
                    </Typography>
                </Grid>
                <Grid item lg={4}>
                    <Typography variant="body2">
                        © 1997-2022. Toàn bộ bản quyền thuộc VnExpress
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Footer;
