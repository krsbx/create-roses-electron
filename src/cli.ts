import { getAllPrompts } from 'utils/cli/prompt';
import { checkNodeVersion } from 'utils/cli/helper';
import { createPrompt } from 'utils/cli/program';
import { CREATE_ROSES_ELECTRON } from 'utils/constants';
import { logger } from 'utils/logger';

export const runCli = async () => {
  checkNodeVersion();

  const cliResults = createPrompt();

  if (cliResults.flags.default) return cliResults;

  try {
    await getAllPrompts(cliResults);
  } catch (err) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (err instanceof Error && (err as any).isTTYError) {
      logger.error(`${CREATE_ROSES_ELECTRON} needs an interactive terminal to provide options`);
      logger.error(`Bootstrapping a default CRE app in ./${cliResults.appName}`);
    } else {
      throw err;
    }
  }

  return cliResults;
};
