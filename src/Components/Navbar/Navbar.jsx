import React from 'react'
import {  Container, makeStyles, Typography } from '@material-ui/core'
import ImageSrc from '../../Assets/Images/logo.png'

const useStyles = makeStyles((theme)=>({
    root:{
        height:80,
    },
    grid:{
        height:"100%",
        display: "grid",
        gridTemplateColumns: "4fr repeat(4,1fr)",
        "& div":{
            marginRight:5,
            marginLeft:5,
        }
    },
    link:{
        height: "100%",
    },
    linkText:{
        color: "white",
        textDecoration: "none !important",
        fontSize:14,
        fontWeight:600,
        letterSpacing: 3,
        textTransform: "uppercase",
        "&:hover":{
            textDecoration: "underline !important"
        }
    }
}))

const Navbar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Container maxWidth="lg" className={classes.grid}>
            <div className={`flex ${classes.link}`} style={{justifyContent:"flex-start"}}>
                <img src={ImageSrc} width="40px" alt="" />
            </div>
                <div className={`flex ${classes.link}`}>
                    <a href="#root">
                    <Typography variant="h3" align="center" className={classes.linkText}>
                        Home
                    </Typography>
                    </a>
                </div>
                <div className={`flex ${classes.link}`}>
                    <a href="#roadmap">
                    <Typography variant="h3" align="center" className={classes.linkText}>
                        Roadmap
                    </Typography>
                    </a>
                </div>
                <div className={`flex ${classes.link}`}>
                    <a href="#tokenomics">
                    <Typography variant="h3" align="center" className={classes.linkText}>
                        Tokenomics
                    </Typography>
                    </a>
                </div>
                <div className={`flex ${classes.link}`}>
                    <a href="#features">
                    <Typography variant="h3" align="center" className={classes.linkText}>
                        Features
                    </Typography>
                    </a>
                </div>
            </Container>    
        </div>
    )
}

export default Navbar
