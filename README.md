# Ameya Rituals — site

Site officiel d'Ameya Rituals. Un média, pas une boutique : on raconte avant de vendre.
Construit avec **Astro**, pensé pour accueillir plus tard les articles de fond et la boutique
sans repartir de zéro.

Stack : Astro · polices auto-hébergées (Fraunces / Poppins / IBM Plex Mono) · zéro traceur.
Déploiement visé : GitHub → Cloudflare Pages → ameya.fr.

---

## Lancer en local

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # génère le dossier dist/
```

---

## Les 4 choses à finaliser avant la mise en ligne

### 1. Les épisodes — `src/data/episodes.ts`
C'est le seul fichier à toucher pour le contenu des gestes.
- Dépose la vidéo dans `public/videos/` (ex : `ep2.mp4`) et renseigne `video: '/videos/ep2.mp4'`.
- Remplace les aperçus `public/posters/epX.png` par une vraie image de tes films (format 4/5).
- Tant que `video` reste `null`, la carte affiche l'aperçu + une étiquette d'état (jamais un bouton mort).

> Les aperçus fournis sont des cartons de marque générés automatiquement — propres, mais à remplacer par des images issues des films dès que possible.

### 2. L'histoire — `src/components/Pourquoi.astro`
C'est le cœur émotionnel, en registre **[VÉCU]**. La version en place est une **première ébauche**.
Elle doit devenir **vraie** : les « huit mille kilomètres » et le rapport personnel à l'Inde
sont des marqueurs à confirmer ou réécrire. Ne pas publier tel quel sans ta validation.

### 3. Les mentions légales — `src/pages/mentions-legales.astro` et `confidentialite.astro`
Remplace `[Prénom NOM]` par ton identité. Pas de société aujourd'hui : les pages reflètent un
éditeur **personne physique**, sans activité commerciale. Un commentaire dans le fichier indique
le bloc à substituer le jour où la SASU existera.

### 4. La newsletter — `src/components/Transmettre.astro`
En haut du `<script>`, renseigne `BREVO_ACTION` avec l'URL de ton formulaire Brevo (double opt-in :
Brevo → Contacts → Formulaires → Partager). Tant que la valeur est vide, le formulaire valide
l'email et affiche un message de confirmation local, sans rien envoyer.

---

## Mettre en ligne (GitHub → Cloudflare Pages)

1. Crée un dépôt GitHub et pousse ce dossier.
2. Cloudflare → **Workers & Pages** → *Create* → *Pages* → *Connect to Git* → choisis le dépôt.
3. Réglages de build :
   - **Framework preset** : Astro
   - **Build command** : `npm run build`
   - **Output directory** : `dist`
4. Déploie. À chaque `git push`, le site se met à jour tout seul.

## Brancher le domaine ameya.fr

Dans Cloudflare Pages → *Custom domains* → ajoute `ameya.fr` et `www.ameya.fr`.

> ⚠️ **Email — à ne pas rater.** `commande@ameya.fr` est une redirection OVH. Si tu passes les
> serveurs de noms (nameservers) d'ameya.fr sur Cloudflare, **recrée les enregistrements MX** de
> la redirection OVH dans le DNS Cloudflare, sinon la redirection casse le jour même. Vérifie tes
> MX actuels chez OVH avant de basculer.

## Mesure d'audience (sans cookie, sans bandeau)

Cloudflare → **Web Analytics** → active-le sur ameya.fr. Gratuit, sans cookie, RGPD-safe :
aucun bandeau de consentement nécessaire (c'est pour ça qu'on ne met pas Google Analytics).

---

## Notes de direction

- **Polices auto-hébergées** : aucune requête vers Google Fonts (souvent problématique en RGPD
  côté France). Tout est servi depuis ton domaine.
- **Image de partage** : `public/og-image.png` (1200×630). C'est l'aperçu qui s'affiche quand le
  lien circule (Instagram, WhatsApp, stories). Remplaçable, mais déjà à la marque.
- **Décision éditoriale à valider** : sur la carte de l'épisode 2, le site emploie « depuis des
  millénaires » plutôt que le « 3 000 ans » du Reel — parce qu'une page indexée en permanence ne
  devrait pas porter un chiffre daté (Constitution §3). À toi de trancher : cohérence avec le Reel,
  ou intégrité éditoriale sur la surface durable. Modifiable dans `src/data/episodes.ts`.
- **Architecture ouverte** : la section « L'horizon » réserve déjà la place des objets et de
  l'épicerie. La boutique viendra comme une rubrique de plus, sans refonte.
