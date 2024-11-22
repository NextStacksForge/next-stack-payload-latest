// feature.server.ts
import { createServerFeature } from '@payloadcms/richtext-lexical';

export const TextStyleFeature = createServerFeature({
  feature: {
    // Utilisation du chemin au lieu du composant
    ClientFeature: '../fields/feature.client',
    i18n: {
      en: {
        label: 'Text Style',
      },
      fr: {
        label: 'Style de texte',
      },
    },
  },
  key: 'textStyles',
});