import { DEFAULT_APP_NAME } from 'utils/constants';
import { getAppName } from './appName.prompt';
import { getGitPermissions } from './git.prompt';
import { getInstallPermissions } from './install.prompt';

export const getAllPrompts = async (cliResults: CRE.CliResults) => {
  if (cliResults.appName === DEFAULT_APP_NAME) await getAppName(cliResults);

  await getInstallPermissions(cliResults);
  await getGitPermissions(cliResults);
};
