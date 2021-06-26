export const checkEnv = (ENV: string) => {
  const envList: string[] = ['prod', 'production', 'dev', 'development'];
  const isInEnvList = envList.includes(String(ENV).trim());
  if (typeof ENV !== "string") throw new Error(`${ENV} should be a string`);
  if (!isInEnvList) throw new Error(`${ENV} should either be a dev or prod`);
}