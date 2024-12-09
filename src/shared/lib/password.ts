export const removePassword = <T extends { passwordHash: string }>({
  passwordHash: _,
  ...rest
}: T): Omit<T, "passwordHash"> => {
  return rest;
};
