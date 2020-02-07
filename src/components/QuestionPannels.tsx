import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import QuestionPannel from "./QuestionPannel";
import { useAsync } from "react-use";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%"
    }
  })
);

interface FetchedQuestion {
  title: string;
  author: string;
  categories: string;
  level: number;
  description: string;
  solution: string;
}

const sampleQuestionData = [
  {
    title: "Markdown Example",
    author: "engineer@pony.ai",
    categories: "Engineering",
    level: 3,
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
  }
];

export default function QuestionPannels() {
  const classes = useStyles();

  const state = useAsync(async () => {
    const response = await fetch(
      "http://10.0.0.10:8000/api/questions/?format=json"
    );
    const result = await response.text();
    return result;
  }, []);

  return (
    <div className={classes.root}>
      {state.loading ? (
        <div>Loading...</div>
      ) : state.error ? (
        <div>Error: {state.error.message}</div>
      ) : state.value ? (
        JSON.parse(state.value).map((question: FetchedQuestion) => (
          <QuestionPannel
            key={question.title}
            title={question.title}
            author={question.author}
            categories={question.categories}
            level={question.level}
            description={question.description}
            solution={question.solution}
          />
        ))
      ) : (
        sampleQuestionData.map(question => (
          <QuestionPannel
            key={question.title}
            title={question.title}
            author={question.author}
            categories={question.categories}
            level={question.level}
            description={question.description}
            solution={question.solution}
          />
        ))
      )}
    </div>
  );
}
