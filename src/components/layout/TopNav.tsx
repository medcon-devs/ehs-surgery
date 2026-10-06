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
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRouter } from "next/router";
import {
  getAuthChangedEventName,
  isUserLoggedIn,
} from "@/lib/auth-storage";

type NavChild = {
  label: string;
  href: string;
};

type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export default function TopNav() {
  const router = useRouter();

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Desktop dropdown state
  const [menuAnchorEl, setMenuAnchorEl] =
    React.useState<HTMLElement | null>(null);

  const [activeMenu, setActiveMenu] = React.useState<string | null>(
    null
  );

  // Mobile dropdown state
  const [mobileOpenMenu, setMobileOpenMenu] =
    React.useState<string | null>(null);

  const navItems: NavItem[] = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Committee",
      href: "/committee",
      children: [
        {
          label: "Organizing Committee",
          href: "/committee/organizing-committee",
        },
        {
          label: "Scientific Committee",
          href: "/committee/scientific-committee",
        },
        // {
        //   label: "Advisory Board Members",
        //   href: "/committee/advisory-board-members"
        // }
      ],
    },
    {
      label: "Faculty",
      href: "/faculty",
    },
    {
      label: "Agenda",
      href: "/agenda/conference-agenda",
      children: [
        {
          label: "Day 1",
          href: "/agenda/day-1",
        },
        {
          label: "Day 2",
          href: "/agenda/day-2",
        },
        // {
        //   label: "Pre-Conference Workshop",
        //   href: "/agenda/pre-conference-workshop",
        // },
      ],
    },
    {
      label: "CME",
      href: "/cme",
    },
    {
      label: isLoggedIn ? "Profile" : "Register",
      href: "/register",
    },
  ];

  React.useEffect(() => {
    const syncAuthState = () => {
      setIsLoggedIn(isUserLoggedIn());
    };

    syncAuthState();

    window.addEventListener(
      getAuthChangedEventName(),
      syncAuthState
    );
    window.addEventListener("storage", syncAuthState);

    return () => {
      window.removeEventListener(
        getAuthChangedEventName(),
        syncAuthState
      );
      window.removeEventListener("storage", syncAuthState);
    };
  }, []);

  // Close menus after route navigation
  React.useEffect(() => {
    setMenuAnchorEl(null);
    setActiveMenu(null);
    setMobileOpenMenu(null);
    setDrawerOpen(false);
  }, [router.asPath]);

  const isActive = (href: string) => {
    if (href === "/") {
      return router.pathname === "/";
    }

    return router.pathname.startsWith(href);
  };

  const isParentActive = (item: NavItem) => {
    if (!item.children) {
      return isActive(item.href);
    }

    return item.children.some((child) =>
      isActive(child.href)
    );
  };

  const handleDesktopMenuOpen = (
    event: React.MouseEvent<HTMLElement>,
    menuLabel: string
  ) => {
    setMenuAnchorEl(event.currentTarget);
    setActiveMenu(menuLabel);
  };

  const handleDesktopMenuClose = () => {
    setMenuAnchorEl(null);
    setActiveMenu(null);
  };

  const handleMobileMenuToggle = (menuLabel: string) => {
    setMobileOpenMenu((currentMenu) =>
      currentMenu === menuLabel ? null : menuLabel
    );
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setMobileOpenMenu(null);
  };

  return (
    <AppBar
      position="absolute"
      elevation={0}
      sx={{
        bgcolor: "#FFFFFF",
        top: 10,
      }}
    >
      <Container maxWidth={false} sx={{ px: { xs: 2, md: 3, lg: 4 } }}>
        <Toolbar
          sx={{
            minHeight: 56,
            display: { xs: "flex", md: "grid" },
            gridTemplateColumns: { md: "1fr auto 1fr" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 1, md: 2 },
            px: "0 !important",
          }}
        >
          <Box
            component={Link}
            href="/"
            aria-label="EHS Surgery Conference home"
            sx={{
              display: "flex",
              alignItems: "center",
              flexShrink: 0,
              justifySelf: { md: "start" },
              width: { xs: 155, sm: 175, md: 165, lg: 200 },
            }}
          >
            <Box
              component="img"
              src="https://res.cloudinary.com/medcon-dam/image/upload/v1785237008/EHS-surgery-conference/ehs-logo_yurvze.png"
              alt="Emirates Health Services"
              sx={{ display: "block", width: "100%", height: "auto" }}
            />
          </Box>

          <Stack
              direction="row"
              gap={{ md: 0.5, lg: 2.5 }}
              alignItems="center"
              justifyContent="center"
              sx={{
                display: { xs: "none", md: "flex" },
                minWidth: 0,
                gridColumn: 2,
              }}
            >
              {navItems.map((item) => {
                const parentActive = isParentActive(item);

                if (item.children) {
                  const menuOpen =
                    activeMenu === item.label &&
                    Boolean(menuAnchorEl);

                  return (
                    <React.Fragment key={item.label}>
                      <Button
                        id={`${item.label}-menu-button`}
                        aria-controls={
                          menuOpen
                            ? `${item.label}-menu`
                            : undefined
                        }
                        aria-haspopup="true"
                        aria-expanded={
                          menuOpen ? "true" : undefined
                        }
                        onClick={(event) =>
                          handleDesktopMenuOpen(
                            event,
                            item.label
                          )
                        }
                        endIcon={
                          menuOpen ? (
                            <KeyboardArrowUpIcon />
                          ) : (
                            <KeyboardArrowDownIcon />
                          )
                        }
                        sx={{
                          color: "#000000",
                          px: { md: 1, lg: 2 },
                          borderRadius: 999,
                          fontSize: { md: 12.5, lg: 14 },
                          bgcolor: parentActive
                            ? "#F4AF48"
                            : "transparent",
                          "&:hover": {
                            bgcolor: parentActive
                              ? "#E4A13E"
                              : "rgba(244, 175, 72, 0.15)",
                          },
                        }}
                      >
                        {item.label.toUpperCase()}
                      </Button>

                      <Menu
                        id={`${item.label}-menu`}
                        anchorEl={menuAnchorEl}
                        open={menuOpen}
                        onClose={handleDesktopMenuClose}
                        disableScrollLock
                        MenuListProps={{
                          "aria-labelledby": `${item.label}-menu-button`,
                          sx: {
                            
                            p: 0,
                            bgcolor: "#fff",
                            borderRadius: "14px",
                            overflow: "hidden",
                          },
                        }}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                        PaperProps={{
                          sx: {
                            mt: 3,
                            width: 320,
                            maxWidth: "calc(100vw - 32px)",
                            border: "2px solid #E79A25",
                            borderRadius: "15px",
                            overflow: "visible",
                            bgcolor: "#fff",
                            boxShadow: "0 12px 30px rgba(4, 24, 42, 0.22)",
                            "&::before": {
                              content: '""',
                              position: "absolute",
                              top: -9,
                              left: "50%",
                              width: 16,
                              height: 16,
                              bgcolor: "#fff",
                              borderTop: "2px solid #E79A25",
                              borderLeft: "2px solid #E79A25",
                              transform: "translateX(-50%) rotate(45deg)",
                              zIndex: 1,
                            },
                          },
                        }}
                      >
                        {item.children.map((child, childIndex) => (
                          <MenuItem
                            key={child.href}
                            component={Link}
                            href={child.href}
                            onClick={
                              handleDesktopMenuClose
                            }
                            selected={isActive(child.href)}
                            sx={{
                              justifyContent: "center",
                              minHeight: 44,
                              py: 0.9,
                              px: 2,
                              color: "#111",
                              fontSize: 17,
                              fontWeight: 800,
                              textAlign: "center",
                              borderBottom:
                                childIndex < item.children!.length - 1
                                  ? "1px solid #D7D7D7"
                                  : "none",
                              "&:hover": {
                                bgcolor: "rgba(231, 154, 37, 0.10)",
                              },
                              "&.Mui-selected": {
                                bgcolor: "rgba(231, 154, 37, 0.14)",
                              },
                              "&.Mui-selected:hover": {
                                bgcolor: "rgba(231, 154, 37, 0.20)",
                              },
                            }}
                          >
                            {child.label}
                          </MenuItem>
                        ))}
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
                      color: "#000000",
                      px: { md: 1, lg: 2 },
                      borderRadius: 999,
                      fontSize: { md: 12.5, lg: 14 },
                      bgcolor: parentActive
                        ? "#F4AF48"
                        : "transparent",
                      "&:hover": {
                        bgcolor: parentActive
                          ? "#E4A13E"
                          : "rgba(244, 175, 72, 0.15)",
                      },
                    }}
                  >
                    {item.label.toUpperCase()}
                  </Button>
                );
              })}
          </Stack>

          <IconButton
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              sx={{
                display: { xs: "inline-flex", md: "none" },
                color: "#14202B",
              }}
            >
              <MenuIcon style={{fontSize:"28px"}}/>
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={closeDrawer}
        PaperProps={{
          sx: {
            width: 300,
            bgcolor: "#0E2A3E",
            color: "#FFFFFF",
            display: "flex",
            flexDirection: "column",
          },
        }}
      >
        <Box sx={{ p: 2 }}>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography
              sx={{
                fontWeight: 900,
                letterSpacing: 0.5,
              }}
            >
              Menu
            </Typography>

            <IconButton
              onClick={closeDrawer}
              sx={{
                color: "#FFFFFF",
              }}
              aria-label="Close menu"
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </Box>

        <List sx={{ pt: 0 }}>
          {navItems.map((item) => {
            const parentActive = isParentActive(item);

            if (item.children) {
              const submenuOpen =
                mobileOpenMenu === item.label;

              return (
                <Box key={item.label}>
                  <ListItemButton
                    onClick={() =>
                      handleMobileMenuToggle(item.label)
                    }
                    sx={{
                      mx: 1,
                      my: 0.5,
                      borderRadius: 2,
                      bgcolor: parentActive
                        ? "rgba(255,255,255,0.14)"
                        : "transparent",
                      "&:hover": {
                        bgcolor:
                          "rgba(255,255,255,0.10)",
                      },
                    }}
                  >
                    <ListItemText
                      primary={item.label}
                      primaryTypographyProps={{
                        fontWeight: parentActive
                          ? 900
                          : 700,
                      }}
                    />

                    {submenuOpen ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </ListItemButton>

                  <Collapse
                    in={submenuOpen}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List disablePadding>
                      {item.children.map((child) => {
                        const childActive = isActive(
                          child.href
                        );

                        return (
                          <ListItemButton
                            key={child.href}
                            component={Link}
                            href={child.href}
                            onClick={closeDrawer}
                            sx={{
                              ml: 3,
                              mr: 1,
                              my: 0.5,
                              borderRadius: 2,
                              color: "#FFFFFF",
                              bgcolor: childActive
                                ? "rgba(255,255,255,0.14)"
                                : "transparent",
                              "&:hover": {
                                bgcolor:
                                  "rgba(255,255,255,0.10)",
                              },
                            }}
                          >
                            <ListItemText
                              primary={child.label}
                              primaryTypographyProps={{
                                fontWeight: childActive
                                  ? 800
                                  : 600,
                                fontSize: 14,
                              }}
                            />
                          </ListItemButton>
                        );
                      })}
                    </List>
                  </Collapse>
                </Box>
              );
            }

            return (
              <ListItemButton
                key={item.href}
                component={Link}
                href={item.href}
                onClick={closeDrawer}
                sx={{
                  mx: 1,
                  my: 0.5,
                  borderRadius: 2,
                  bgcolor: parentActive
                    ? "rgba(255,255,255,0.14)"
                    : "transparent",
                  "&:hover": {
                    bgcolor: "rgba(255,255,255,0.10)",
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: parentActive ? 900 : 700,
                  }}
                />
              </ListItemButton>
            );
          })}
        </List>

        <Box
          sx={{
            mt: "auto",
            p: 2,
            opacity: 0.75,
            fontSize: 12,
          }}
        >
          © {new Date().getFullYear()} EHS Surgery
        </Box>
      </Drawer>
    </AppBar>
  );
}
