// ─────────────────────────────────────────────────────────────
//  LE SEUL FICHIER À ÉDITER POUR LES ÉPISODES.
//
//  Pour publier un épisode sur le site :
//   1. Dépose la vidéo dans  public/videos/   (ex : ep2.mp4)
//   2. Dépose une image d'aperçu dans public/posters/ (ex : ep2.jpg, format 4/5)
//   3. Renseigne  video: '/videos/ep2.mp4'  ci-dessous.
//
//  Tant que `video` est null, la carte affiche une image d'aperçu
//  et une étiquette d'état — jamais un bouton mort.
// ─────────────────────────────────────────────────────────────

export interface Episode {
  id: string;
  geste: string;      // l'étiquette « Le geste » (mono)
  title: string;      // titre affiché sur la carte
  poster: string;     // image d'aperçu 4/5
  video: string | null;
  state: 'live' | 'soon';  // 'live' = disponible / 'soon' = en production
}

export const episodes: Episode[] = [
  {
    id: 'ep1',
    geste: 'Manifeste',
    title: 'Le film de lancement',
    poster: '/posters/ep1.png',
    video: null,
    state: 'live',
  },
  {
    id: 'ep2',
    geste: 'La flamme',
    // Sur le site (surface permanente, indexée), on préfère la formulation
    // qualitative de la Constitution à un chiffre daté. À valider par Henry.
    title: 'Pourquoi cette flamme brûle-t-elle depuis des millénaires\u00A0?',
    poster: '/posters/ep2.png',
    video: null,
    state: 'live',
  },
  {
    id: 'ep3',
    geste: 'La main',
    title: 'Pourquoi les Indiens mangent-ils avec les mains\u00A0?',
    poster: '/posters/ep3.png',
    video: null,
    state: 'soon',
  },
];
