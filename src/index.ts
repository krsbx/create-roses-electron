#!/usr/bin/env node

import { renderTitle } from 'utils/cli/helper';
import { runCli } from 'cli';
import { parseNameAndPath } from 'utils/common';
import { createProject } from 'utils/initializer/project.initializer';
import { logger } from 'utils/logger';
import { modifyPackageJson } from 'utils/helper/json.helper';
import { initializeGit } from 'utils/initializer/git.initializer';
import { commitChanges } from 'utils/helper/git.helper';
import { nextStep } from 'utils/nextStep';

const main = async () => {
  renderTitle();

  const { appName, flags } = await runCli();
  const [scopedAppName, projectPath] = parseNameAndPath(appName);

  const projectDir = await createProject(appName, flags);

  await modifyPackageJson(projectDir, scopedAppName);

  if (!flags.noGit) {
    await initializeGit(projectDir);
    await commitChanges(projectDir);
  }

  logger.success(`\nElectron project created at ${projectDir}\n`);

  nextStep(scopedAppName ?? projectPath, flags);
};

main();
