export type CliFlags = {
  noInstall: boolean;
  noGit: boolean;
  default: boolean;
};

export type CliResults = {
  appName: string;
  flags: CliFlags;
};

export as namespace CRE;
