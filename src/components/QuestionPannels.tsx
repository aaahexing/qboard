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

const sampleQuestionData = [
  {
    title: "Markdown Example",
    category: ["Engineering"],
    description: `# This is Markdown
#### You can edit me!
[Markdown](http://daringfireball.net/projects/markdown/) lets you write content in a really natural way.

* You can have lists, like this one
* Make things **bold** or *italic*
* Embed snippets of \`code\`
* Create [links](/)
* ...

<small>Sample content borrowed with thanks from [elm-markdown](http://elm-lang.org/examples/markdown) ❤️</small>

You can even include custom React components if you declare them in the "overrides" option.
`,
    solution: `##Sample solution
\`\`\`
#include <cstdio>
int main() {
  printf("Hello, markdown!\\n");
}\`\`\``
  },
  {
    title: "General settings",
    category: ["Data Structure", "Math"],
    description: `Donec placerat, lectus sed mattis semper, neque lectus feugiat
    lectus, varius pulvinar diam eros in elit. Pellentesque convallis
    laoreet laoreet.`,
    solution: `Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
    Aliquam eget maximus est, id dignissim quam Sample solution`
  },
  {
    title: "Users",
    category: ["Algorithm", "Math"],
    description: `Donec placerat, lectus sed mattis semper, neque lectus feugiat
    lectus, varius pulvinar diam eros in elit. Pellentesque convallis
    laoreet laoreet.`,
    solution: "Sample solution"
  },
  {
    title: "Advanced settings",
    category: ["Math"],
    description: `Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
    sit amet egestas eros, vitae egestas augue. Duis vel est augue.`,
    solution: "Sample solution"
  },
  {
    title: "Personal data",
    category: ["Trick"],
    description: `Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
    sit amet egestas eros, vitae egestas augue. Duis vel est augue.`,
    solution: "Sample solution"
  }
];

export default function QuestionPannels() {
  const classes = useStyles();
  const questionPannelsItems = sampleQuestionData.map(question => (
    <QuestionPannel
      title={question.title}
      category={question.category}
      description={question.description}
      solution={question.solution}
    />
  ));
  return <div className={classes.root}>{questionPannelsItems}</div>;
}
