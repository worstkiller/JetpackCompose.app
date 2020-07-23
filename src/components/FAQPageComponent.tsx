import Accordion from "@material-ui/core/ExpansionPanel";
import AccordionSummary from "@material-ui/core/ExpansionPanelSummary";
import AccordionDetails from "@material-ui/core/ExpansionPanelDetails";
import Container from "@material-ui/core/Container";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IfThisThenThatFooter from "./IfThisThenThatFooter";
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
        <Container maxWidth="md">
            <Typography className={classes.pageHeader} align="center">
                Frequently Asked Questions
            </Typography>
            {props.listOfQnA.map((qna) => (
                <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.question}>{qna.question}</Typography>
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
        <IfThisThenThatFooter/>
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
        marginBottom: "2%"
    },
    question: {
        fontSize: 20,
        fontFamily: "Playfair Display",
    },
    answer: {
        fontSize: 18,
        fontFamily: "Roboto",
        '& a': {
          color: "#33691e"
        }
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