import React from "react";
import Markdown from "markdown-to-jsx";
import {
  makeStyles,
  withStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";

import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Chip from "@material-ui/core/Chip";

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56
    }
  },
  content: {
    "&$expanded": {
      margin: "12px 0"
    }
  },
  expanded: {}
})(MuiExpansionPanelSummary);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    },
    title: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "50%",
      flexGrow: 1
    },
    category: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary
    },
    description: {
      flexBasis: "60%",
      padding: theme.spacing(1, 2)
    },
    solution: {
      flexBasis: "40%",
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2)
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: "none",
      "&:hover": {
        textDecoration: "underline"
      }
    }
  })
);

interface QuestionPannelProps {
  title: string;
  category: string[];
  description: string;
  solution: string;
}

export default function QuestionPannel(props: QuestionPannelProps) {
  const classes = useStyles();
  const categoryTag = props.category.map(c => {
    return <Chip key={c} label={c} size="small" />;
  });

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography className={classes.title}>{props.title}</Typography>
        {categoryTag}
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.description}>
          <Typography>
            <Markdown>{props.description}</Markdown>
          </Typography>
        </div>
        <div className={classes.solution}>
          <Typography variant="caption">
            <Markdown>{props.solution}</Markdown>
          </Typography>
        </div>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}
