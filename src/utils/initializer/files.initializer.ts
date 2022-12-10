import ora from 'ora';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { PKG_ROOT } from 'utils/constants';

export const initializeFiles = async (projectDir: string, flags: CRE.CliFlags) => {
  const templateDir = path.join(PKG_ROOT, 'template');

  const spinner = ora(`Initializing CRE...`).start();

  try {
    await fs.copy(templateDir, projectDir);
    await fs.copy(path.join(projectDir, '_env'), path.join(projectDir, '.env.example'));
    await fs.rename(path.join(projectDir, '_env'), path.join(projectDir, '.env'));

    if (!flags.noGit) await fs.rm(path.join(projectDir, '_gitignore'));
    else await fs.rename(path.join(projectDir, '_gitignore'), path.join(projectDir, '.gitignore'));

    spinner.succeed(chalk.green.bold('CRE initialized.'));
  } catch {
    spinner.fail(chalk.red.bold('Failed to initialize CRE.'));
  }
};
