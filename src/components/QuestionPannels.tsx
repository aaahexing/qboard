import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import QuestionPannel from "./QuestionPannel";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    }
  })
);

export default function QuestionPannels() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <QuestionPannel
        title={"General settings"}
        category={["Data Structure", "Math"]}
        description={`Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam.`}
        solution={`Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
        Aliquam eget maximus est, id dignissim quam Sample solution`}
      />
      <QuestionPannel
        title={"Users"}
        category={["Algorithm", "Math"]}
        description={`Donec placerat, lectus sed mattis semper, neque lectus feugiat
        lectus, varius pulvinar diam eros in elit. Pellentesque convallis
        laoreet laoreet.`}
        solution={"Sample solution"}
      />
      <QuestionPannel
        title={"Advanced settings"}
        category={["Math"]}
        description={`Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
        sit amet egestas eros, vitae egestas augue. Duis vel est augue.`}
        solution={"Sample solution"}
      />
      <QuestionPannel
        title={"Personal data"}
        category={["Trick"]}
        description={`Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
        sit amet egestas eros, vitae egestas augue. Duis vel est augue.`}
        solution={"Sample solution"}
      />
    </div>
  );
}
