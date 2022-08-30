import {
    AppBar,
    Toolbar,
    Container,
    Box,
    Divider,
    Typography,
    Button,
    InputBase,
    IconButton,
} from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import { NavbarWrapper, SearchWrapper } from "../../styles/AppBarHeader";
import Menu from "./Menu";
import MENUS_LIST from "../../data/menu";
function AppBarHeader() {
    return (
        <AppBar sx={{ backgroundColor: "#fff" }}>
            <Toolbar
                variant="dense"
                sx={{ padding: "8.5px 0", borderBottom: "1px solid #e5e5e5" }}
            >
                <Container
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Box display={"flex"} alignItems={"center"}>
                        <Box pt={"6px"} mr={1}>
                            <img
                                src="https://s1.vnecdn.net/vnexpress/restruct/i/v641/v2_2019/pc/graphics/logo.svg"
                                alt="logo"
                                width={"150px"}
                                height={"28px"}
                            />
                        </Box>
                        <Divider orientation="vertical" flexItem />
                        <Typography
                            variant={"body1"}
                            fontSize={"14px"}
                            lineHeight={"32px"}
                            color={"#757575"}
                            ml={1}
                        >
                            Thứ hai, 29/8/2022
                        </Typography>
                    </Box>
                    <Box display={"flex"} alignItems={"center"}>
                        <Button
                            variant={"outlined"}
                            size={"small"}
                            startIcon={<AccessTimeIcon />}
                        >
                            Mới nhất
                        </Button>
                        <Button
                            variant={"outlined"}
                            size={"small"}
                            startIcon={<AccessTimeIcon />}
                            sx={{ marginLeft: 2 }}
                        >
                            International
                        </Button>
                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ marginLeft: 2, marginRight: 2 }}
                        />
                        <SearchWrapper component={"form"} noValidate>
                            <InputBase placeholder="Tìm kiếm" />
                            <IconButton
                                size="small"
                                children={<SearchIcon />}
                            />
                        </SearchWrapper>
                        <Button
                            variant={"text"}
                            size={"small"}
                            startIcon={<PersonIcon />}
                            sx={{ marginLeft: 2 }}
                        >
                            Đăng nhập
                        </Button>
                    </Box>
                </Container>
            </Toolbar>
            <Toolbar variant="dense">
                <NavbarWrapper>
                    <IconButton children={<HomeIcon />} />
                    {/* <Menu /> */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            overflowX: "hidden",
                        }}
                    >
                        {MENUS_LIST.map((menu, index) => (
                            <Menu key={index} menu={menu} />
                        ))}
                    </Box>

                    <Button sx={{ width: "150px" }} endIcon={<MenuIcon />}>
                        Tất cả
                    </Button>
                </NavbarWrapper>
            </Toolbar>
        </AppBar>
    );
}

export default AppBarHeader;
