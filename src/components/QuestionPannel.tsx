import React from "react";
import Markdown from "markdown-to-jsx";
import StarIcon from "@material-ui/icons/Star";
import CopyToClipboard from "react-copy-to-clipboard";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import EditIcon from "@material-ui/icons/Edit";
import {
  makeStyles,
  withStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import MuiExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

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
      paddingLeft: 10,
      alignSelf: "center",
      flexBasis: "50%",
      flexGrow: 1
    },
    category: {
      alignSelf: "center",
      color: theme.palette.text.secondary
    },
    level: {
      alignSelf: "center",
      paddingLeft: 6
    },
    description: {
      flexBasis: "50%",
      padding: theme.spacing(1, 2)
    },
    solution: {
      flexBasis: "50%",
      borderLeft: `1px solid ${theme.palette.divider}`,
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
  author: string;
  categories: string;
  level: number;
  description: string;
  solution: string;
}

export default function QuestionPannel(props: QuestionPannelProps) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const categoryTag = props.categories.split(",").map(c => {
    return <Chip key={c} label={c} size="small" />;
  });
  const levelTag = [<StarBorderIcon />, <StarHalfIcon />, <StarIcon />];
  const normalizedLevel = Math.round(Math.max(1, Math.min(3, props.level)));
  const levelIcon = levelTag[normalizedLevel - 1];

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Tooltip title="Copy">
          <CopyToClipboard text={props.title}>
            <IconButton
              size="small"
              onClick={event => {
                handleClick();
                event.stopPropagation();
              }}
            >
              <FileCopyIcon />
            </IconButton>
          </CopyToClipboard>
        </Tooltip>
        <Snackbar open={open} autoHideDuration={1000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success">
            '{props.title}' copied.
          </Alert>
        </Snackbar>
        <Typography className={classes.title}>{props.title}</Typography>
        {categoryTag}
        <div className={classes.level}>{levelIcon}</div>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <div className={classes.description}>
          <Markdown>
            {props.description +
              "\n\n#### Author: [" +
              props.author +
              "](" +
              props.author +
              ")\n"}
          </Markdown>
        </div>
        <div className={classes.solution}>
          <Markdown>{props.solution}</Markdown>
        </div>
      </ExpansionPanelDetails>
      <Divider />
      <ExpansionPanelActions>
        <EditIcon />
      </ExpansionPanelActions>
    </ExpansionPanel>
  );
}
