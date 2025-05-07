function formatString(input: string, toUpper?: boolean): string {
  return toUpper ?? true ? input.toUpperCase() : input.toLowerCase();
}
