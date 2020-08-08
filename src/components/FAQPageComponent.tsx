import Accordion from "@material-ui/core/ExpansionPanel";
import AccordionSummary from "@material-ui/core/ExpansionPanelSummary";
import AccordionDetails from "@material-ui/core/ExpansionPanelDetails";
import Container from "@material-ui/core/Container";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Helmet } from "react-helmet";
import JetpackComposeAppFooter from "./JetpackComposeAppFooter";
import { makeStyles } from "@material-ui/core/styles";
import parse from 'html-react-parser';
import QnA from "../models/QnA"
import React, { FunctionComponent } from "react";
import Typography from "@material-ui/core/Typography";

interface FAQPageComponentProps {
    listOfQnA: Array<QnA>
}

export const FAQPageComponent: FunctionComponent<FAQPageComponentProps> = (
    props
  ) => {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <Helmet>
          <title>
          Frequently Asked Questions about Jetpack Compose
          </title>
          <meta
            name="description"
            content="Find answers to frequently asked questions about Jetpack Compose!"
          />
          <meta
            name="description"
            content="Find answers to frequently asked questions about Jetpack Compose!"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://jetpackcompose.app/faq" />
          <meta
            property="twitter:title"
            content="Frequently Asked Questions about Jetpack Compose"
          />
          <meta
            property="twitter:description"
            content="Find answers to frequently asked questions about Jetpack Compose!"
          />
          <meta
            property="twitter:image"
            content="https://jetpackcompose.app/faq_poster.png"
          />
        </Helmet>
        <Container maxWidth="md">
            <Typography className={classes.pageHeader} align="center">
                Frequently Asked Questions
            </Typography>
            <Typography className={classes.pageSubheader} align="center">
                 Find answers to frequently asked questions about Jetpack Compose! 
            </Typography>
            <Typography className={classes.lastUpdated} align="center">
                 Last updated: 7th August, 2020
            </Typography>
            {props.listOfQnA.map((qna) => (
                <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.question}>{parse(qna.question)}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.answer}>
                  {parse(qna.answer)}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
        </Container>

        <div className={classes.footer}>
        <JetpackComposeAppFooter/>
        </div>
    </div>
    )
};

const useStyles = makeStyles({
    root: {
      width: "100%",
      marginTop: "5%"
    },
    pageHeader: {
        fontSize: 30,
        fontFamily: "Playfair Display",
        marginBottom: "2%",
        color: "#78C257"
    },
    pageSubheader: {
      fontSize: 20,
      fontWeight: "lighter",
      fontFamily: "Roboto",
    },
    lastUpdated: {
      fontSize: 15,
      fontFamily: "Playfair Display",
      marginBottom: "2%"
    },
    question: {
        fontSize: 20,
        fontFamily: "Playfair Display",
        '& span': {
          fontSize: 16,
        },
        '& a': {
          color: "#81c1eb"
        },
    },
    answer: {
        fontSize: 18,
        fontFamily: "Roboto",
        '& a': {
          color: "#FFFFFF",
          background: "#81c1eb",
          padding: "5px",
          textDecoration: "none"
        },
    },
    footer: {
        marginTop:"2%",
        height:"20vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#000000",
        marginBottom:"0px",
        bottom: "0px"
    }
  });