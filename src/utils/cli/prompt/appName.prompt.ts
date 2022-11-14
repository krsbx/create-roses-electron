import inquirer from 'inquirer';
import { validateAppName } from 'utils/validator';

export const getAppName = async (cliResults: CRE.CliResults) => {
  const { appName } = await inquirer.prompt<Pick<CRE.CliResults, 'appName'>>({
    name: 'appName',
    type: 'input',
    default: cliResults.appName,
    message: 'What will your project be called? (can be changed later)',
    validate: validateAppName,
    transformer: (input: string) => input.toLowerCase().trim(),
  });

  cliResults.appName = appName;
};
