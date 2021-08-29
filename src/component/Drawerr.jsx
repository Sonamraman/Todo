import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import {
  Avatar,Toolbar,
  IconButton,Divider,
  CssBaseline,CardHeader,
  Drawer,ListItem,ListItemIcon,ListItemText,
  AppBar,Link,Badge,
} from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import VideocamIcon from "@material-ui/icons/Videocam";
import LanguageIcon from "@material-ui/icons/Language";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import PersonIcon from "@material-ui/icons/Person";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import ShareIcon from "@material-ui/icons/Share";
import avatar from "../assest/avatar.png";
import Share from "../pages/Share";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    backgroundColor: "#fff",
    maxWidth: "0",
    left:'0',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    left:"0",
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  menuButton: {
    marginRight: 36,
    color: "black",
  },
  menuButtonHidden: {
    display: "none",
  },
  avatar: {
    backgroundColor: "#3f51b5",
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
}));

const Drawerr = () => {
  const classes = useStyles();

  //for Drawer

  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  //for Share dialog box

  const [opendialog, setOpendialog] = React.useState(false);

  const handleClickOpen = () => {
    setOpendialog(true);
  };

  const [invisible] = React.useState(false);

  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <Avatar aria-label="recipe" style={{marginLeft:"-0.8vw",marginTop:"0.9vh"}}>
                <img alt="avatar" src={avatar}/>
              </Avatar>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
          }}
          open={open}
        >
          <div className={classes.toolbarIcon}>
            <CardHeader
              avatar={<Avatar aria-label="recipe">
                <img alt="avatar" src={avatar}/>
              </Avatar>}
              title="Tomas Wilson"
              subheader="luckytom@rach"
            />
            <IconButton onClick={handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider/>
          <div style={{marginLeft:"1vh"}}>
            <Link href="/home" style={{color:"black",textDecoration:"none"}}>
            <ListItem button>
              <ListItemIcon>
                <VideocamIcon />
              </ListItemIcon>
              <ListItemText primary="Home" style={{marginLeft:"-1.2vh"}}/>
            </ListItem>
            </Link>
            <Link href="/device" style={{color:"black",textDecoration:"none"}}>
            <ListItem button>
              <ListItemIcon>
                <LanguageIcon />
              </ListItemIcon>
              <ListItemText primary="Device's" style={{marginLeft:"-1.2vh"}}/>
            </ListItem>
            </Link>
            <Link href="/activity" style={{color:"black",textDecoration:"none"}}>
            <ListItem button>
              <ListItemIcon>
                <Badge color="secondary" variant="dot" invisible={invisible}>
                  <NotificationsIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText primary="Last Activity" style={{marginLeft:"-1.2vh"}}/>
            </ListItem>
            </Link>
            <Link href="/viewall" style={{color:"black",textDecoration:"none"}}>
            <ListItem button>
              <ListItemIcon>
                <ViewComfyIcon />
              </ListItemIcon>
              <ListItemText primary="View All" style={{marginLeft:"-1.2vh"}}/>
            </ListItem>
            </Link>
            <Link href="/account" style={{color:"black",textDecoration:"none"}}>
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Account" style={{marginLeft:"-1.2vh"}}/>
            </ListItem>
            </Link>
            <Link href="/subscription" style={{color:"black",textDecoration:"none"}}>
            <ListItem button>
              <ListItemIcon>
                <SubscriptionsIcon />
              </ListItemIcon>
              <ListItemText primary="Subscription" style={{marginLeft:"-1.2vh"}}/>
            </ListItem>
            </Link>
            <Link onClick={handleClickOpen} style={{color:"black",textDecoration:"none"}}>
            <ListItem button>
              <ListItemIcon>
                <ShareIcon />
              </ListItemIcon>
              <ListItemText primary="Share" style={{marginLeft:"-1.2vh"}}/>
            </ListItem>
            </Link>
            <Share opendialog={opendialog} setOpendialog={setOpendialog}/>
          </div>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
        </main>
      </div>
    </>
  );
};

export default Drawerr;
