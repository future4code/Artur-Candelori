function isOneEdit(edit: string, reference: string): boolean {
  if (edit === reference) {
    return false;
  }

  if (
    edit.length > reference.length + 1 ||
    edit.length < reference.length - 1
  ) {
    return false;
  }

  return false;
}
