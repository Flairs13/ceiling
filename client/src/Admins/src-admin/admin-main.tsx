import React from 'react';
import clsx from 'clsx';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import PanToolIcon from '@material-ui/icons/PanTool';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import GavelIcon from '@material-ui/icons/Gavel';
import {NavLink, Route} from "react-router-dom";
import EcoIcon from '@material-ui/icons/Eco';
import PowerIcon from '@material-ui/icons/Power';
import ItemContainer from "./item/item-container";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CategoryIcon from '@material-ui/icons/Category';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import BuildIcon from '@material-ui/icons/Build';
import DockIcon from '@material-ui/icons/Dock'
import StarIcon from '@material-ui/icons/Star';
import Cloth from './item/cloth';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function AdminMain() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const arr = [
        {name: 'Профили', route: 'profile', icon: <GavelIcon/>},
        {name: 'Вставки', route: 'tape', icon: <PanToolIcon/>},
        {name: 'Комплектующие', route: 'accessories', icon: <AttachFileIcon/>},
        {name: 'Светильники', route: 'light', icon: <PowerIcon/>},
    ]

    const arr2 = [
        {name: 'Конструкции', route: 'constructions', icon: <CategoryIcon/>,},
        {name: 'Ленты и пульты', route: 'led', icon: <DockIcon/>,},
        {name: 'Расходники', route: 'consumables', icon: <BusinessCenterIcon/>,},
        {name: 'Инструменты', route: 'tools', icon: <BuildIcon/>,},
        {name: 'Дополнительное', route: 'additional', icon: <StarIcon/>,},
    ]


    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                            [classes.hide]: open,
                        })}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Админка для потолков
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <NavLink style={{color: "rgba(0, 0, 0, 0.8)"}} to={`/admin/main/polotna`}>
                        <ListItem button>
                            <ListItemIcon>
                                <EcoIcon/>
                            </ListItemIcon>
                            <ListItemText primary={'Полотна'}/>
                        </ListItem>
                    </NavLink>
                    {arr.map((i) => (
                        <NavLink style={{color: "rgba(0, 0, 0, 0.8)"}} to={`/admin/main/${i.route}`}>
                            <ListItem button key={i.name}>
                                <ListItemIcon>
                                    {i.icon}
                                </ListItemIcon>
                                <ListItemText primary={i.name}/>
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
                <Divider/>
                <List>
                    {arr2.map((i, index) => (
                        <NavLink style={{color: "rgba(0, 0, 0, 0.8)"}} to={`/admin/main/${i.route}`}>
                            <ListItem button key={index}>
                                <ListItemIcon>
                                    {i.icon}
                                </ListItemIcon>
                                <ListItemText primary={i.name}/>
                            </ListItem>
                        </NavLink>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Route exact path='/admin/main/:type' render={({match}) => {
                    if (match.params.type === 'polotna') return <Cloth/>
                    return <ItemContainer type={match.params.type}/>
                }}/>
            </main>
        </div>
    );
}
