// ─────────────────────────────────────────────────────────────
//  LE SEUL FICHIER À ÉDITER POUR LES ÉPISODES DE LA SÉRIE.
//
//  Pour publier un épisode sur le site :
//   1. Dépose la vidéo dans  public/videos/   (ex : ep4.mp4)
//   2. Dépose une image d'aperçu dans public/posters/ (ex : ep4.png, format 4/5)
//   3. Renseigne  video: '/videos/ep4.mp4'  ci-dessous, state: 'live'.
//
//  Tant que `video` est null, la carte affiche l'aperçu + une étiquette
//  d'état — jamais un bouton mort.
//
//  NB : le film de lancement (le voyage des 8 000 km) N'EST PAS un épisode.
//  Il vit dans sa propre section « Le film » (LeFilm.astro), pas ici.
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
    id: 'ep2',
    geste: 'La flamme',
    // Sur le site (surface permanente, indexée), on préfère la formulation
    // qualitative de la Constitution à un chiffre daté. À valider par Henry.
    title: 'Pourquoi cette flamme brûle-t-elle depuis des millénaires\u00A0?',
    poster: '/posters/ep2.png',
    video: '/videos/ep2.mp4',
    state: 'live',
  },
  {
    id: 'ep3',
    geste: 'La main',
    title: 'Pourquoi les Indiens mangent-ils avec les mains\u00A0?',
    poster: '/posters/ep3.png',
    video: '/videos/ep3.mp4',
    // Passe à 'soon' (et video: null) si le montage n'est pas final.
    state: 'live',
  },
];
