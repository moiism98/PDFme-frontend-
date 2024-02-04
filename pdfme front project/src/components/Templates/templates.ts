import type { Template } from '@pdfme/ui';
import { BLANK_PDF } from '@pdfme/ui';

export const emptyTemplate: Template = {
  basePdf: BLANK_PDF,
  schemas: [{}],
};
