import ora from 'ora';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { PKG_ROOT } from 'utils/constants';

export const initializeFiles = async (projectDir: string, flags: CRE.CliFlags) => {
  const templateDir = path.join(PKG_ROOT, 'template');

  // Just rename the constant names to make it more readable
  const destDir = projectDir;

  const spinner = ora(`Initializing CRE...`).start();

  try {
    await fs.copy(templateDir, destDir);
    await fs.copy(path.join(destDir, '_env'), path.join(projectDir, '.env'));
    await fs.copy(path.join(destDir, '_env'), path.join(projectDir, '.env.example'));

    if (!flags.noGit) await fs.rm(path.join(destDir, '_gitignore'));

    spinner.succeed(chalk.green.bold('CRE initialized.'));
  } catch {
    spinner.fail(chalk.red.bold('Failed to initialize CRE.'));
  }
};
