import chalk from 'chalk';
import { Command } from 'commander';
import { COLOR_SCHEME, CREATE_ROSES_ELECTRON, DEFAULT_CLI_OPTIONS } from 'utils/constants';
import packageJson from '../../../package.json';

export const createPrompt = () => {
  const cliResults = DEFAULT_CLI_OPTIONS;
  const program = new Command().name(CREATE_ROSES_ELECTRON);

  program
    .description('A CLI for creating a new Roses Electron')
    .argument('[dir]', 'The directory to create the new Roses Electron')
    .option('--noGit', 'Explicitly tell to not init a git repository', false)
    .option('--noInstall', 'Explicitly tell to not install all dependencies', false)
    .option('-y, --default', 'Use default values for all prompts', false)
    .version(packageJson.version, '-v, --version', 'Display the current version of CRE')
    .addHelpText(
      'afterAll',
      `\n\nThis electron is used in most of ${chalk
        .hex(COLOR_SCHEME.BRIGHT_ORANGE)
        .bold('KRSBX')} desktop app`
    )
    .parse(process.argv);

  const cliProjectName = program.args[0];
  if (cliProjectName && typeof cliProjectName === 'string' && cliProjectName.trim() !== '')
    cliResults.appName = cliProjectName;

  cliResults.flags = program.opts<CRE.CliFlags>();

  return cliResults;
};
