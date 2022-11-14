import { installPackages } from './initializer/packages.initializer';
import { getPackageManager } from './common';
import { logger } from './logger';

export const nextStep = async (projectDir: string, flags: CRE.CliFlags) => {
  const packageManager = getPackageManager();

  try {
    await installPackages(projectDir, packageManager, flags);
  } catch {
    flags.noInstall = true;
  } finally {
    logger.info('Next steps:');
    logger.info(`- cd ${projectDir}`);

    if (flags.noInstall) {
      logger.info(`- ${packageManager} install`);
    }

    logger.info(`- ${packageManager === 'npm' ? 'npm run' : `${packageManager}`} dev`);
  }
};
