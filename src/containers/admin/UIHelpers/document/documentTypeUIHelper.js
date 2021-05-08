export const DOCUMENTS = {
  1: "FOLDER.DOCUMENT.EXTRAIT_NAISSANCE",
  2: "FOLDER.DOCUMENT.CIN",
  3: "FOLDER.DOCUMENT.CERTIFICAT_SCOLAIRE",
  4: "FOLDER.DOCUMENT.DERNIER_RELEVE_NOTE",
  5: "FOLDER.DOCUMENT.PHOTO_IDENTITE",
  6: "FOLDER.DOCUMENT.OTHER"
}


export const documentTypeUIHelper = (intl) =>
  Object.keys(DOCUMENTS).map((value) => ({
    value: parseInt(value),
    label: intl.formatMessage({ id: DOCUMENTS[value] }),
  }))
