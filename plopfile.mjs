export default function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator("feature", {
    description: "Create a new feature component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the feature component?",
      },
    ],
    actions: [
      {
        type: "add",
        path: "src/features/{{pascalCase name}}/index.tsx",
        templateFile: "plop-templates/feature/feature.tsx.hbs",
      },
      {
        type: "add",
        path: "src/features/{{pascalCase name}}/index.stories.tsx",
        templateFile: "plop-templates/feature/feature.stories.tsx.hbs",
      },
      {
        type: "add",
        path: "src/features/{{pascalCase name}}/tests/index.test.tsx",
        templateFile: "plop-templates/feature/tests/feature.test.tsx.hbs",
      },
      {
        type: "add",
        path: "src/features/{{pascalCase name}}/presentations/index.tsx",
        templateFile: "plop-templates/feature/presentations/feature.tsx.hbs",
      },
      {
        type: "add",
        path: "src/features/{{pascalCase name}}/hooks/index.ts",
        templateFile: "plop-templates/feature/hooks/feature.ts.hbs",
      },
    ],
  });
}
