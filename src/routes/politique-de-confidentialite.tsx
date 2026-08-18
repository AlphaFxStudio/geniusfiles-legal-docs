import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/politique-de-confidentialite")({
  head: () => ({
    meta: [
      { title: "Politique de confidentialité — GeniusFiles" },
      { name: "description", content: "Politique de confidentialité de l'application mobile GeniusFiles." },
      { property: "og:title", content: "Politique de confidentialité — GeniusFiles" },
      { property: "og:description", content: "Politique de confidentialité de l'application mobile GeniusFiles." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/politique-de-confidentialite" },
    ],
    links: [{ rel: "canonical", href: "/politique-de-confidentialite" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-16 pt-8 sm:pt-12">
      <header className="rounded-2xl border border-border/60 bg-card px-5 py-5 sm:px-6 sm:py-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Dernière mise à jour : 18/08/2026
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Contact :{" "}
          <a
            href="mailto:geniusfiles.contact@gmail.com"
            className="font-medium text-primary underline decoration-1 underline-offset-2 hover:decoration-2"
          >
            geniusfiles.contact@gmail.com
          </a>
        </p>
      </header>

      <article className="prose-legal mt-8 [content-visibility:auto] [contain-intrinsic-size:auto_1200px]">
        <p>
          La présente Politique de confidentialité explique comment GeniusFiles (« GeniusFiles », « nous », « notre » ou « l'Application ») traite les informations lorsque vous utilisez l'application mobile GeniusFiles.
        </p>

        <p>
          GeniusFiles est conçu selon une approche locale par conception. La majorité des opérations et des données de l'application restent sur votre appareil. GeniusFiles ne nécessite pas de création de compte, ne possède pas de système d'authentification et ne fournit pas de stockage cloud personnel pour vos fichiers.
        </p>

        <h2>1. Données collectées</h2>
        <p>
          Selon les fonctionnalités utilisées et les autorisations accordées, GeniusFiles peut accéder à différentes informations présentes sur votre appareil.
        </p>

        <h3>Fichiers et dossiers</h3>
        <p>
          Pour fournir ses fonctionnalités de gestion de fichiers, GeniusFiles peut accéder notamment aux :
        </p>
        <ul>
          <li>noms de fichiers et de dossiers ;</li>
          <li>chemins locaux ;</li>
          <li>tailles ;</li>
          <li>dates de modification ;</li>
          <li>types et extensions ;</li>
          <li>catégories de fichiers.</li>
        </ul>
        <p>
          Le contenu des fichiers peut également être lu localement lorsque vous utilisez certaines fonctionnalités telles que les visionneuses, éditeurs PDF, images, audio, vidéo ou documents.
        </p>
        <p>
          Ces informations sont principalement traitées et conservées sur votre appareil.
        </p>
        <p>
          GeniusFiles ne téléverse pas automatiquement vos fichiers vers ses propres serveurs et ne fournit pas de stockage cloud personnel.
        </p>

        <h3>Données créées localement</h3>
        <p>
          GeniusFiles peut conserver sur votre appareil :
        </p>
        <ul>
          <li>préférences et paramètres de l'application ;</li>
          <li>langue, thème et paramètres d'affichage ;</li>
          <li>historique de recherche ;</li>
          <li>fichiers récents et récemment ajoutés ;</li>
          <li>index de recherche ;</li>
          <li>historiques de certaines opérations ;</li>
          <li>règles et historiques d'automatisation ;</li>
          <li>progression de lecture ;</li>
          <li>historiques liés à certaines fonctionnalités PDF ;</li>
          <li>brouillons locaux ;</li>
          <li>miniatures et fichiers temporaires ;</li>
          <li>résultats d'analyse ;</li>
          <li>conversations Genius AI ;</li>
          <li>paramètres et index du coffre-fort ;</li>
          <li>informations relatives aux quotas d'utilisation.</li>
        </ul>

        <h3>Coffre-fort</h3>
        <p>
          Les fichiers placés dans le coffre-fort sont protégés localement par chiffrement.
        </p>
        <p>
          Le code d'accès du coffre-fort n'est pas conservé en clair. GeniusFiles utilise également des mécanismes destinés à limiter les tentatives répétées de déverrouillage.
        </p>
        <p>
          Lorsque la biométrie est activée, GeniusFiles utilise le système biométrique fourni par Android. L'application ne reçoit ni ne stocke votre empreinte digitale, votre visage ou vos caractéristiques biométriques.
        </p>

        <h3>Genius AI</h3>
        <p>
          Genius AI utilise Google Gemini comme fournisseur du modèle d'intelligence artificielle.
        </p>
        <p>
          Lorsque vous envoyez une demande à Genius AI, peuvent être transmis au service nécessaire au fonctionnement de l'assistant :
        </p>
        <ul>
          <li>votre message ;</li>
          <li>l'historique de la conversation en cours ;</li>
          <li>certaines informations nécessaires au contexte ;</li>
          <li>les libellés des espaces de stockage disponibles ;</li>
          <li>certains résultats résumés du moteur local de GeniusFiles.</li>
        </ul>
        <p>
          Ces résultats peuvent notamment contenir, lorsque cela est nécessaire à votre demande :
        </p>
        <ul>
          <li>noms de fichiers ou de dossiers ;</li>
          <li>types et extensions ;</li>
          <li>tailles ;</li>
          <li>dates de modification ;</li>
          <li>catégories ;</li>
          <li>certains comptages ;</li>
          <li>libellés des espaces de stockage.</li>
        </ul>
        <p>
          Le modèle Gemini ne dispose pas d'un accès direct au stockage de votre appareil. Les opérations sur vos fichiers sont exécutées par le moteur local de GeniusFiles.
        </p>
        <p>
          Le contenu complet de vos fichiers, les chemins absolus, l'arborescence complète du stockage, le contenu du coffre-fort, les fichiers du coffre-fort et son code d'accès ne sont pas transmis à Gemini par GeniusFiles.
        </p>
        <p>
          Toutefois, si vous saisissez vous-même des informations personnelles ou confidentielles dans Genius AI, celles-ci peuvent être transmises dans le cadre de votre demande.
        </p>

        <h3>Données techniques et statistiques</h3>
        <p>
          GeniusFiles utilise également certains services Google pour les statistiques d'utilisation, le diagnostic des erreurs et la publicité. Ces services peuvent traiter certaines informations techniques relatives à l'appareil et à l'utilisation de l'application.
        </p>
        <p>
          GeniusFiles ne demande pas directement l'accès aux contacts, à la localisation, au microphone ou au calendrier.
        </p>

        <h2>2. Finalités du traitement</h2>
        <p>
          Les données accessibles par GeniusFiles sont utilisées uniquement dans le cadre des fonctionnalités de l'application et des services associés.
        </p>
        <p>
          Elles peuvent notamment servir à :
        </p>
        <ul>
          <li>parcourir, rechercher, trier et organiser les fichiers ;</li>
          <li>copier, déplacer, renommer ou supprimer des fichiers ;</li>
          <li>analyser le stockage ;</li>
          <li>afficher des informations et statistiques sur les fichiers ;</li>
          <li>ouvrir et traiter les formats pris en charge ;</li>
          <li>effectuer des opérations sur les PDF, images, fichiers audio et documents ;</li>
          <li>gérer les applications installées lorsque les autorisations correspondantes sont accordées ;</li>
          <li>exécuter les automatisations configurées par l'utilisateur ;</li>
          <li>conserver les préférences et l'historique nécessaires au fonctionnement de l'application ;</li>
          <li>conserver localement les conversations Genius AI ;</li>
          <li>permettre le fonctionnement de Genius AI ;</li>
          <li>protéger les fichiers placés dans le coffre-fort ;</li>
          <li>détecter et corriger les erreurs techniques ;</li>
          <li>comprendre l'utilisation générale de l'application et améliorer son fonctionnement ;</li>
          <li>afficher des publicités ;</li>
          <li>fournir des annonces récompensées permettant, lorsque cela est applicable, d'obtenir des utilisations supplémentaires de certaines fonctionnalités freemium ;</li>
          <li>assurer le fonctionnement des quotas d'utilisation et empêcher certaines manipulations de l'horloge de l'appareil.</li>
        </ul>

        <h3>Genius AI</h3>
        <p>
          Genius AI utilise Google Gemini pour comprendre les demandes de l'utilisateur et formuler les réponses.
        </p>
        <p>
          Lorsque la demande nécessite une action sur les fichiers, Gemini peut demander une commande autorisée au moteur local de GeniusFiles. Le moteur local effectue alors l'opération sur l'appareil et renvoie un résultat résumé.
        </p>
        <p>
          Le modèle d'intelligence artificielle n'a pas d'accès direct aux fichiers de l'appareil.
        </p>

        <h3>Analytics et diagnostic</h3>
        <p>
          Firebase Analytics est utilisé pour obtenir des statistiques générales sur l'utilisation de GeniusFiles.
        </p>
        <p>
          GeniusFiles applique des mécanismes de minimisation des données : liste limitée d'événements et d'écrans, paramètres normalisés et remplacement de certaines valeurs libres par des catégories ou jetons génériques.
        </p>
        <p>
          Firebase Crashlytics est utilisé pour détecter, analyser et corriger les erreurs et plantages techniques.
        </p>
        <p>
          Les informations envoyées à Crashlytics sont assainies afin de limiter notamment la transmission de chemins de fichiers, d'URI de fichiers et d'adresses e-mail.
        </p>

        <h3>Publicité</h3>
        <p>
          Google AdMob est utilisé pour afficher des publicités dans certaines parties de GeniusFiles.
        </p>
        <p>
          Certaines fonctionnalités freemium peuvent également utiliser des annonces récompensées. Une récompense n'est accordée que lorsque le système publicitaire confirme que les conditions nécessaires à l'obtention de cette récompense ont été satisfaites.
        </p>

        <h2>3. Partage des données</h2>
        <p>
          GeniusFiles ne vend pas vos fichiers personnels et ne fournit pas de service permettant de stocker vos fichiers personnels sur ses propres serveurs.
        </p>
        <p>
          Certaines informations peuvent toutefois être traitées par des services tiers nécessaires au fonctionnement de certaines fonctionnalités.
        </p>

        <h3>Google Gemini</h3>
        <p>
          Lorsque vous utilisez Genius AI, les informations nécessaires à votre demande peuvent être transmises à Google Gemini, notamment votre message, l'historique de la conversation en cours et certains résultats résumés provenant du moteur local.
        </p>
        <p>
          GeniusFiles ne transmet pas volontairement à Gemini :
        </p>
        <ul>
          <li>le contenu complet de vos fichiers ;</li>
          <li>les chemins absolus ;</li>
          <li>l'arborescence complète du stockage ;</li>
          <li>le contenu du coffre-fort ;</li>
          <li>les fichiers du coffre-fort ;</li>
          <li>le code du coffre-fort ;</li>
          <li>l'index complet du coffre-fort ;</li>
          <li>l'index complet de recherche ;</li>
          <li>la liste complète des applications installées.</li>
        </ul>

        <h3>Firebase Analytics</h3>
        <p>
          Certaines informations statistiques et techniques peuvent être transmises à Firebase Analytics afin de comprendre l'utilisation générale de l'application.
        </p>
        <p>
          GeniusFiles ne transmet pas volontairement à Analytics les noms de fichiers, les chemins de fichiers, le contenu des fichiers, les prompts Genius AI, les conversations Genius AI ou le contenu du coffre-fort.
        </p>

        <h3>Firebase Crashlytics</h3>
        <p>
          Certaines informations techniques peuvent être transmises à Firebase Crashlytics lors de crashes ou de certaines erreurs non fatales.
        </p>
        <p>
          Ces informations peuvent comprendre notamment le type d'erreur, un message d'erreur assaini, une pile technique, la version de l'application, la version d'Android, le modèle de l'appareil et certaines informations techniques nécessaires au diagnostic.
        </p>
        <p>
          GeniusFiles n'utilise pas volontairement Crashlytics pour associer les rapports à un identifiant personnel d'utilisateur.
        </p>

        <h3>Google AdMob</h3>
        <p>
          Lorsqu'une publicité est affichée, Google AdMob peut traiter les informations nécessaires au fonctionnement et à la mesure de la publicité, notamment certaines informations techniques, l'adresse IP et, selon la configuration applicable et les paramètres de l'appareil, l'identifiant publicitaire ou d'autres informations liées à la publicité.
        </p>
        <p>
          GeniusFiles ne transmet pas volontairement à AdMob le contenu de vos fichiers, vos conversations Genius AI, le contenu du coffre-fort, votre code de coffre-fort ou votre historique de recherche.
        </p>
        <p>
          Les services tiers sont également soumis à leurs propres politiques et conditions applicables.
        </p>

        <h3>Horloge de confiance</h3>
        <p>
          GeniusFiles peut utiliser un service distant fournissant uniquement une information d'heure afin de vérifier le passage du temps pour certaines fonctionnalités de quota.
        </p>
        <p>
          Cet appel ne nécessite pas la transmission du contenu des fichiers ou des conversations de l'utilisateur.
        </p>

        <h2>4. Conservation des données</h2>

        <h3>Données conservées localement</h3>
        <p>
          Les données stockées localement restent généralement sur votre appareil jusqu'à ce que vous les supprimiez, que vous supprimiez les données concernées ou que vous désinstalliez l'application.
        </p>
        <p>
          Certaines données temporaires peuvent être supprimées automatiquement par l'application ou le système Android.
        </p>
        <p>
          Les conversations Genius AI sont conservées localement afin de permettre leur consultation et la reprise des conversations.
        </p>
        <p>
          GeniusFiles ne conserve pas une copie serveur personnelle de vos conversations comme le ferait un service de messagerie ou un service cloud personnel.
        </p>

        <h3>Données du coffre-fort</h3>
        <p>
          Les données du coffre-fort restent sur l'appareil et sont protégées localement par chiffrement.
        </p>
        <p>
          GeniusFiles ne transmet pas le contenu du coffre-fort à Gemini, Firebase ou AdMob.
        </p>

        <h3>Données Analytics et Crashlytics</h3>
        <p>
          Les données Analytics et les rapports Crashlytics sont conservés par Google conformément aux paramètres et politiques applicables à leurs services.
        </p>

        <h3>Données publicitaires</h3>
        <p>
          Les données traitées dans le cadre de la publicité sont conservées conformément aux règles et politiques applicables aux services publicitaires de Google.
        </p>

        <h3>Données transmises à Google Gemini</h3>
        <p>
          Les données nécessaires au traitement d'une demande Genius AI sont transmises au fournisseur d'intelligence artificielle conformément aux conditions applicables à ce service.
        </p>
        <p>
          GeniusFiles ne conserve pas de copie serveur personnelle des conversations de l'utilisateur.
        </p>

        <h3>Sauvegarde</h3>
        <p>
          GeniusFiles désactive les mécanismes de sauvegarde et d'extraction Android configurés pour les données privées de l'application.
        </p>
        <p>
          Ainsi, certaines données locales peuvent être perdues en cas de désinstallation de l'application ou de perte de l'appareil.
        </p>
        <p>
          GeniusFiles ne doit donc pas être considéré comme un service de sauvegarde cloud.
        </p>

        <h2>5. Vos droits</h2>
        <p>
          Selon votre pays ou votre région, vous pouvez disposer de différents droits concernant vos données personnelles, conformément à la législation applicable.
        </p>
        <p>
          Ces droits peuvent notamment comprendre :
        </p>
        <ul>
          <li>le droit d'accès ;</li>
          <li>le droit de rectification ;</li>
          <li>le droit à l'effacement ;</li>
          <li>le droit à la limitation du traitement ;</li>
          <li>le droit d'opposition ;</li>
          <li>le droit à la portabilité ;</li>
          <li>le droit de retirer un consentement lorsque le traitement repose sur celui-ci ;</li>
          <li>le droit de déposer une réclamation auprès de l'autorité compétente.</li>
        </ul>
        <p>
          Pour les données conservées uniquement sur votre appareil, GeniusFiles vous permet notamment, selon la donnée concernée, de :
        </p>
        <ul>
          <li>supprimer vos conversations Genius AI ;</li>
          <li>supprimer votre historique de recherche ;</li>
          <li>supprimer les données du coffre-fort ;</li>
          <li>effacer le coffre-fort ;</li>
          <li>vider le cache ;</li>
          <li>supprimer certaines données ou historiques depuis les fonctionnalités concernées ;</li>
          <li>supprimer vos fichiers ;</li>
          <li>désinstaller l'application.</li>
        </ul>
        <p>
          Les autorisations Android peuvent également être modifiées ou révoquées à tout moment depuis les paramètres de votre appareil.
        </p>
        <p>
          Pour les données traitées par des fournisseurs tiers tels que Google, certains droits peuvent devoir être exercés directement auprès du fournisseur concerné lorsque celui-ci agit sous sa propre responsabilité.
        </p>
        <p>
          Pour toute demande relative aux données ou à cette politique, vous pouvez contacter GeniusFiles à l'adresse : <a href="mailto:geniusfiles.contact@gmail.com">geniusfiles.contact@gmail.com</a>
        </p>

        <h2>6. Sécurité</h2>
        <p>
          GeniusFiles met en œuvre différentes mesures destinées à protéger les informations et à réduire les risques d'accès non autorisé ou de divulgation accidentelle.
        </p>
        <p>
          Ces mesures comprennent notamment :
        </p>
        <ul>
          <li>traitement local de la majorité des fonctionnalités ;</li>
          <li>absence de compte utilisateur obligatoire ;</li>
          <li>absence de stockage cloud personnel GeniusFiles ;</li>
          <li>chiffrement local du coffre-fort ;</li>
          <li>protection du code du coffre-fort ;</li>
          <li>limitation des tentatives répétées de déverrouillage ;</li>
          <li>verrouillage automatique du coffre-fort ;</li>
          <li>utilisation de la biométrie Android lorsque cette fonctionnalité est activée ;</li>
          <li>séparation du coffre-fort des fonctions Genius AI ;</li>
          <li>absence d'accès direct de Gemini au stockage de l'appareil ;</li>
          <li>absence de transmission du contenu du coffre-fort à Genius AI ;</li>
          <li>limitation des informations transmises à Analytics ;</li>
          <li>assainissement des informations techniques transmises à Crashlytics ;</li>
          <li>absence d'identifiant personnel volontairement défini dans Crashlytics ;</li>
          <li>exclusion des données privées de GeniusFiles des mécanismes de sauvegarde Android configurés pour l'application.</li>
        </ul>
        <p>
          Toutefois, aucun système informatique ne peut garantir une sécurité absolue.
        </p>
        <p>
          La sécurité des données dépend également de la sécurité de votre appareil, de votre système Android, de vos mises à jour de sécurité, des autres applications installées sur votre appareil et de la manière dont vous protégez votre appareil et vos codes d'accès.
        </p>
        <p>
          Nous vous recommandons notamment de :
        </p>
        <ul>
          <li>maintenir Android à jour ;</li>
          <li>utiliser le verrouillage sécurisé de votre appareil ;</li>
          <li>conserver votre code de coffre-fort confidentiel ;</li>
          <li>ne pas communiquer votre code de coffre-fort ;</li>
          <li>éviter de transmettre volontairement des informations sensibles à Genius AI lorsque cela n'est pas nécessaire.</li>
        </ul>

        <h2>7. Contact</h2>
        <p>
          Pour toute question concernant cette Politique de confidentialité, le traitement de vos données ou les pratiques de confidentialité de GeniusFiles, vous pouvez nous contacter à l'adresse suivante :
        </p>
        <p>
          <strong>GeniusFiles</strong><br />
          E-mail : <a href="mailto:geniusfiles.contact@gmail.com">geniusfiles.contact@gmail.com</a>
        </p>
        <p>
          Nous pouvons mettre à jour cette Politique de confidentialité afin de tenir compte de l'évolution de l'application, de nouvelles fonctionnalités, de nouveaux services tiers, de changements réglementaires ou d'améliorations de sécurité.
        </p>
        <p>
          La date de dernière mise à jour sera modifiée lors de toute révision importante de cette politique.
        </p>
        <p>
          <strong>Dernière mise à jour : 18/08/2026</strong>
        </p>
      </article>
    </div>
  );
}
