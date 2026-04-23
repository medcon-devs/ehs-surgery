import * as React from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Container,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import {
  getAuthChangedEventName,
  isUserLoggedIn,
} from "@/lib/auth-storage";

export default function TopNav() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [open, setOpen] = React.useState(false);
  const [agendaAnchorEl, setAgendaAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileAgendaOpen, setMobileAgendaOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const router = useRouter();

  const toggleDrawer = (next: boolean) => () => setOpen(next);

  React.useEffect(() => {
    const syncAuthState = () => {
      setIsLoggedIn(isUserLoggedIn());
    };

    syncAuthState();

    window.addEventListener(getAuthChangedEventName(), syncAuthState);
    window.addEventListener("storage", syncAuthState);

    return () => {
      window.removeEventListener(getAuthChangedEventName(), syncAuthState);
      window.removeEventListener("storage", syncAuthState);
    };
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Scientific Committee", href: "/scientific-committee" },
    { label: "Faculty", href: "/faculty" },
    {label: "Agenda", href: "/agenda/conference-agenda"},
      // children: [
      //   { label: "Conference Agenda", href: "/agenda/conference-agenda" },
      //   // { label: "Pre-Conference Workshop", href: "/agenda/pre-conference-workshop" },
      // ],
    // },
    { label: "CME", href: "/cme" },
    { label: isLoggedIn ? "Profile" : "Register", href: "/register" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return router.pathname === "/";
    return router.pathname.startsWith(href);
  };

  const isAgendaActive =
    router.pathname.startsWith("/agenda/conference-agenda") ||
    router.pathname.startsWith("/agenda/pre-conference-workshop");

  const handleAgendaClick = (event: React.MouseEvent<HTMLElement>) => {
    setAgendaAnchorEl(event.currentTarget);
  };

  const handleAgendaClose = () => {
    setAgendaAnchorEl(null);
  };

  return (
    <AppBar position="sticky" elevation={0} sx={{ bgcolor: "#2F5E7A" }}>
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            minHeight: 56,
            display: "flex",
            alignItems: "center",
            justifyContent: isMobile ? "space-between" : "center",
            gap: 1,
          }}
        >
          {isMobile && (
            <Typography sx={{ color: "white", fontWeight: 800, fontSize: 14 }}>
              EHS
            </Typography>
          )}

          {!isMobile && (
            <Stack direction="row" gap={5} alignItems="center" justifyContent="center">
              {navItems.map((item) => {
                if ("children" in item) {
                  return (
                    <React.Fragment key={item.label}>
                      <Button
                        onClick={handleAgendaClick}
                        endIcon={<KeyboardArrowDownIcon />}
                        sx={{
                          color: isAgendaActive ? "#315A7B" : "white",
                          px: 2,
                          borderRadius: 999,
                          fontSize: 14,
                          bgcolor: isAgendaActive ? "#D8CCC7" : "transparent",
                          "&:hover": {
                            bgcolor: isAgendaActive ? "#D8CCC7" : "rgba(255,255,255,0.12)",
                          },
                        }}
                      >
                        {item.label.toUpperCase()}
                      </Button>

                      <Menu
                        anchorEl={agendaAnchorEl}
                        open={Boolean(agendaAnchorEl)}
                        onClose={handleAgendaClose}
                        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
                        transformOrigin={{ vertical: "top", horizontal: "center" }}
                        PaperProps={{
                          sx: {
                            mt: 1,
                            minWidth: 240,
                            borderRadius: 1,
                            overflow: "hidden",
                          },
                        }}
                      >
                        {/* {item.children!.map((child) => (
                          <MenuItem
                            key={child.href}
                            component={Link}
                            href={child.href}
                            onClick={handleAgendaClose}
                            selected={isActive(child.href)}
                            sx={{ fontWeight: 600, py: 1.2 }}
                          >
                            {child.label}
                          </MenuItem>
                        ))} */}
                      </Menu>
                    </React.Fragment>
                  );
                }

                return (
                  <Button
                    key={item.href}
                    component={Link}
                    href={item.href}
                    sx={{
                      color: isActive(item.href) ? "#315A7B" : "white",
                      px: 2,
                      borderRadius: 999,
                      fontSize: 14,
                      bgcolor: isActive(item.href) ? "#D8CCC7" : "transparent",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.12)" },
                    }}
                  >
                    {item.label.toUpperCase()}
                  </Button>
                );
              })}
            </Stack>
          )}

          {isMobile && (
            <IconButton
              onClick={toggleDrawer(true)}
              aria-label="Open menu"
              sx={{ color: "white" }}
            >
              <MenuIcon />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: 300,
            bgcolor: "#0E2A3E",
            color: "white",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography sx={{ fontWeight: 900, letterSpacing: 0.5 }}>Menu</Typography>
            <IconButton
              onClick={toggleDrawer(false)}
              sx={{ color: "white" }}
              aria-label="Close menu"
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </Box>

        <List sx={{ pt: 0 }}>
          {navItems.map((item) => {
            if ("children" in item) {
              return (
                <Box key={item.label}>
                  <ListItemButton
                    onClick={() => setMobileAgendaOpen((prev) => !prev)}
                    sx={{
                      mx: 1,
                      my: 0.5,
                      borderRadius: 2,
                      bgcolor: isAgendaActive ? "rgba(255,255,255,0.14)" : "transparent",
                      "&:hover": { bgcolor: "rgba(255,255,255,0.10)" },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{ fontWeight: isAgendaActive ? 900 : 700 }}
                    />
                    {mobileAgendaOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </ListItemButton>

                  {/* <Collapse in={mobileAgendaOpen} timeout="auto" unmountOnExit>
                    <List disablePadding>
                      {item.children!.map((child) => (
                        <ListItemButton
                          key={child.href}
                          component={Link}
                          href={child.href}
                          onClick={() => {
                            setOpen(false);
                            setMobileAgendaOpen(false);
                          }}
                          sx={{
                            ml: 3,
                            mr: 1,
                            my: 0.5,
                            borderRadius: 2,
                            bgcolor: isActive(child.href)
                              ? "rgba(255,255,255,0.14)"
                              : "transparent",
                            "&:hover": { bgcolor: "rgba(255,255,255,0.10)" },
                          }}
                        >
                          <ListItemText
                            primary={child.label}
                            primaryTypographyProps={{
                              fontWeight: isActive(child.href) ? 800 : 600,
                              fontSize: 14,
                            }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse> */}
                </Box>
              );
            }

            const active = isActive(item.href);

            return (
              <ListItemButton
                key={item.href}
                component={Link}
                href={item.href}
                onClick={() => setOpen(false)}
                sx={{
                  mx: 1,
                  my: 0.5,
                  borderRadius: 2,
                  bgcolor: active ? "rgba(255,255,255,0.14)" : "transparent",
                  "&:hover": { bgcolor: "rgba(255,255,255,0.10)" },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontWeight: active ? 900 : 700 }}
                />
              </ListItemButton>
            );
          })}
        </List>

        <Box sx={{ mt: "auto", p: 2, opacity: 0.75, fontSize: 12 }}>
          © {new Date().getFullYear()} EHS Cardiorenal
        </Box>
      </Drawer>
    </AppBar>
  );
}