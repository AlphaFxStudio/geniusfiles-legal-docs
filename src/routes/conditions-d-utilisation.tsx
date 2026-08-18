import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/conditions-d-utilisation")({
  head: () => ({
    meta: [
      { title: "Conditions d'utilisation — GeniusFiles" },
      { name: "description", content: "Conditions d'utilisation de l'application mobile GeniusFiles." },
      { property: "og:title", content: "Conditions d'utilisation — GeniusFiles" },
      { property: "og:description", content: "Conditions d'utilisation de l'application mobile GeniusFiles." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/conditions-d-utilisation" },
    ],
    links: [{ rel: "canonical", href: "/conditions-d-utilisation" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 pb-16 pt-8 sm:pt-12">
      <header className="rounded-2xl border border-border/60 bg-card px-5 py-5 sm:px-6 sm:py-6">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
          Conditions d'utilisation
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
          Les présentes conditions d'utilisation régissent l'accès et
          l'utilisation de l'application mobile GeniusFiles (« GeniusFiles », «
          l'Application », « nous » ou « notre »).
        </p>
        <p>
          GeniusFiles est une application de gestion et de traitement de fichiers
          destinée aux appareils Android. Elle propose notamment des
          fonctionnalités de gestion de fichiers, de recherche, d'organisation, de
          nettoyage, d'édition et de consultation de documents et de médias,
          ainsi que des automatisations locales, un coffre-fort et un assistant
          intelligent appelé Genius AI.
        </p>
        <p>
          En installant, en ouvrant ou en utilisant GeniusFiles, vous reconnaissez
          avoir pris connaissance des présentes conditions et acceptez de les
          respecter. Si vous ne les acceptez pas, vous devez cesser d'utiliser
          l'Application et la désinstaller.
        </p>

        <h2>1. Objet du service</h2>
        <p>GeniusFiles permet notamment de :</p>
        <ul>
          <li>parcourir et gérer des fichiers et dossiers ;</li>
          <li>rechercher, copier, déplacer, renommer et supprimer des fichiers ;</li>
          <li>organiser et analyser le stockage ;</li>
          <li>consulter et modifier certains documents ;</li>
          <li>traiter des fichiers PDF ;</li>
          <li>consulter des images, vidéos et fichiers audio ;</li>
          <li>créer et gérer des archives ;</li>
          <li>gérer certaines applications installées ;</li>
          <li>créer des automatisations locales ;</li>
          <li>utiliser une corbeille ;</li>
          <li>utiliser un coffre-fort destiné à protéger certains fichiers ;</li>
          <li>
            utiliser Genius AI pour interagir avec certaines fonctionnalités de
            l'Application en langage naturel.
          </li>
        </ul>
        <p>
          Les fonctionnalités disponibles peuvent évoluer au fil des versions et
          peuvent dépendre de la version d'Android, des autorisations accordées à
          GeniusFiles et des capacités de l'appareil.
        </p>

        <h2>2. Acceptation des conditions</h2>
        <p>
          Le téléchargement, l'installation, l'ouverture ou l'utilisation de
          GeniusFiles implique l'acceptation des présentes conditions
          d'utilisation.
        </p>
        <p>
          Si vous n'acceptez pas ces conditions, vous devez cesser d'utiliser
          GeniusFiles et désinstaller l'Application.
        </p>

        <h2>3. Compte utilisateur</h2>
        <p>
          GeniusFiles ne nécessite pas actuellement la création d'un compte
          utilisateur pour son utilisation normale.
        </p>
        <p>
          L'Application ne fournit pas de système d'authentification permettant
          d'associer les données locales à un profil utilisateur en ligne ou de
          synchroniser automatiquement ces données entre plusieurs appareils.
        </p>
        <p>
          Les données et fonctionnalités locales sont donc principalement liées à
          l'appareil sur lequel GeniusFiles est installé.
        </p>

        <h2>4. Autorisations Android</h2>
        <p>
          Certaines fonctionnalités nécessitent des autorisations Android,
          notamment pour accéder aux fichiers, aux médias, à certaines informations
          relatives aux applications installées, aux notifications, aux fonctions
          nécessaires aux automatisations ou aux fonctions biométriques.
        </p>
        <p>
          Ces autorisations sont utilisées pour permettre les fonctionnalités
          correspondantes de GeniusFiles.
        </p>
        <p>
          Vous pouvez généralement gérer ou révoquer certaines autorisations depuis
          les paramètres Android. La révocation d'une autorisation peut empêcher
          certaines fonctionnalités de fonctionner correctement.
        </p>

        <h2>5. Propriété intellectuelle</h2>
        <p>
          GeniusFiles, son nom, son logo, son identité visuelle, son interface, ses
          éléments graphiques, ses textes, ses fonctionnalités, ses créations
          originales et les éléments logiciels qui la composent sont protégés par
          les lois applicables en matière de propriété intellectuelle.
        </p>
        <p>Sauf autorisation expresse, vous ne pouvez notamment pas :</p>
        <ul>
          <li>reproduire ou revendre GeniusFiles ;</li>
          <li>copier substantiellement son interface ou ses éléments propriétaires ;</li>
          <li>distribuer une version modifiée non autorisée ;</li>
          <li>tenter d'extraire ou de reproduire ses éléments propriétaires ;</li>
          <li>
            utiliser la marque GeniusFiles d'une manière susceptible de créer une
            confusion.
          </li>
        </ul>
        <p>
          Vous conservez vos droits sur les fichiers personnels que vous utilisez
          avec l'Application.
        </p>
        <p>
          Les droits appartenant à des tiers restent la propriété de leurs
          détenteurs respectifs.
        </p>

        <h2>6. Utilisation acceptable</h2>
        <p>Vous vous engagez à utiliser GeniusFiles :</p>
        <ul>
          <li>conformément aux lois et réglementations applicables ;</li>
          <li>conformément aux présentes conditions ;</li>
          <li>uniquement à des fins légales ;</li>
          <li>
            sans tenter de contourner les mécanismes de sécurité ou les limitations
            de l'Application ;
          </li>
          <li>sans accéder sans autorisation aux données appartenant à autrui ;</li>
          <li>sans perturber volontairement le fonctionnement de l'Application ;</li>
          <li>sans exploiter intentionnellement une faille de sécurité ;</li>
          <li>
            sans utiliser l'Application pour porter atteinte aux droits d'autrui.
          </li>
        </ul>
        <p>
          Il est également interdit de frauder ou de manipuler les systèmes de
          quotas et de récompenses publicitaires, notamment en utilisant des
          mécanismes destinés à falsifier le visionnage des annonces.
        </p>
        <p>
          Toute tentative d'abus ou de fraude peut entraîner la limitation ou la
          suspension de certaines fonctionnalités.
        </p>

        <h2>7. Gestion des fichiers et responsabilité de l'utilisateur</h2>
        <p>
          GeniusFiles peut effectuer des opérations telles que copier, déplacer,
          renommer, supprimer, compresser, décompresser, modifier, organiser,
          analyser ou traiter certains fichiers.
        </p>
        <p>Vous restez responsable des opérations que vous demandez à l'Application.</p>
        <p>
          Certaines opérations peuvent être irréversibles et entraîner une perte de
          données. Vous devez donc vérifier les opérations importantes et conserver
          des sauvegardes indépendantes de vos fichiers importants.
        </p>
        <p>
          GeniusFiles ne revendique aucun droit de propriété sur vos fichiers. Vous
          devez disposer des droits nécessaires pour stocker, modifier, copier,
          déplacer, partager ou traiter les fichiers que vous utilisez avec
          l'Application.
        </p>

        <h2>8. Perte et récupération des données</h2>
        <p>
          GeniusFiles ne garantit pas la récupération des fichiers supprimés ou
          endommagés.
        </p>
        <p>
          Une perte de données peut notamment résulter d'une suppression volontaire
          ou accidentelle, d'une mauvaise utilisation, d'une défaillance du
          stockage, du système Android, du matériel, d'une application tierce ou
          d'un autre événement indépendant du contrôle raisonnable de GeniusFiles.
        </p>
        <p>Vous êtes responsable de la sauvegarde de vos données importantes.</p>

        <h2>9. Coffre-fort et biométrie</h2>
        <p>
          GeniusFiles peut proposer un coffre-fort permettant de protéger certains
          fichiers à l'aide de mécanismes de sécurité et, lorsque la fonctionnalité
          concernée le prévoit, de chiffrement.
        </p>
        <p>
          Vous êtes responsable de la conservation de votre code, mot de passe ou
          autre moyen d'accès au coffre-fort.
        </p>
        <p>
          GeniusFiles ne garantit pas la récupération d'un coffre-fort si vous perdez
          définitivement votre moyen d'accès et qu'aucun mécanisme de récupération
          disponible ne permet de le restaurer.
        </p>
        <p>
          Lorsque la biométrie est activée, GeniusFiles utilise les mécanismes
          biométriques fournis par Android. L'Application ne reçoit pas et ne stocke
          pas votre empreinte biométrique.
        </p>
        <p>Aucun système informatique ne peut être garanti comme totalement inviolable.</p>

        <h2>10. Automatisations</h2>
        <p>
          GeniusFiles peut permettre la création de règles d'automatisation
          permettant d'effectuer certaines opérations localement sur l'appareil.
        </p>
        <p>Vous êtes responsable :</p>
        <ul>
          <li>des règles que vous créez ;</li>
          <li>des conditions que vous définissez ;</li>
          <li>des fichiers concernés ;</li>
          <li>des conséquences potentielles de leur exécution.</li>
        </ul>
        <p>
          Une automatisation peut notamment modifier, déplacer, organiser ou supprimer
          des fichiers selon les paramètres définis.
        </p>
        <p>
          Son fonctionnement peut être affecté par Android, les autorisations, les
          paramètres d'économie d'énergie, les redémarrages, les restrictions du
          fabricant ou d'autres facteurs indépendants de GeniusFiles.
        </p>
        <p>
          GeniusFiles ne garantit pas qu'une automatisation s'exécutera dans toutes
          les circonstances ou exactement à l'heure prévue.
        </p>

        <h2>11. Genius AI</h2>
        <p>
          GeniusFiles propose une fonctionnalité d'assistance intelligente appelée
          Genius AI, utilisant Google Gemini comme fournisseur de modèle
          d'intelligence artificielle.
        </p>
        <p>
          Genius AI peut interpréter vos demandes et, lorsque cela est nécessaire,
          demander au moteur local de GeniusFiles d'effectuer certaines opérations
          autorisées sur l'appareil.
        </p>
        <p>
          Le modèle Gemini n'a pas un accès direct au stockage de votre appareil.
          Les opérations sur les fichiers sont effectuées localement par
          GeniusFiles.
        </p>
        <p>
          Certaines informations nécessaires au traitement d'une demande peuvent
          être transmises au service d'intelligence artificielle. Les informations
          détaillées concernant ces traitements sont présentées dans la{" "}
          <Link
            to="/politique-de-confidentialite"
            className="text-primary underline-offset-2 hover:underline"
          >
            Politique de confidentialité
          </Link>{" "}
          de GeniusFiles.
        </p>

        <h2>12. Limites de Genius AI</h2>
        <p>
          Genius AI est un outil d'assistance et ne constitue pas une garantie de
          résultat.
        </p>
        <p>
          Les réponses générées peuvent être incomplètes, imprécises, incorrectes ou
          inadaptées à une situation particulière.
        </p>
        <p>Vous devez vérifier les informations importantes avant d'agir sur leur base.</p>
        <p>
          Genius AI ne doit pas être considéré comme un conseiller juridique,
          médical, financier ou comme une source infaillible d'information.
        </p>
        <p>
          Vous restez responsable des décisions prises à partir des réponses fournies
          par Genius AI.
        </p>

        <h2>13. Publicités et annonces récompensées</h2>
        <p>
          GeniusFiles peut afficher des publicités, notamment par l'intermédiaire de
          Google AdMob, afin de contribuer au financement de l'Application.
        </p>
        <p>
          Certaines fonctionnalités peuvent proposer des annonces récompensées
          permettant d'obtenir une utilisation supplémentaire après confirmation du
          visionnage par le système publicitaire.
        </p>
        <p>
          La disponibilité d'une annonce dépend notamment du réseau publicitaire, de
          la région, de l'appareil et de l'inventaire disponible.
        </p>
        <p>
          GeniusFiles ne garantit donc pas qu'une annonce récompensée sera disponible
          à chaque demande.
        </p>
        <p>
          Les quotas, limites d'utilisation et conditions des récompenses peuvent
          évoluer avec les versions de l'Application.
        </p>
        <p>
          Les informations relatives au traitement des données publicitaires sont
          détaillées dans la{" "}
          <Link
            to="/politique-de-confidentialite"
            className="text-primary underline-offset-2 hover:underline"
          >
            Politique de confidentialité
          </Link>
          .
        </p>

        <h2>14. Services tiers</h2>
        <p>
          Certaines fonctionnalités de GeniusFiles utilisent des services fournis
          par des tiers, notamment :
        </p>
        <ul>
          <li>Google Gemini ;</li>
          <li>Google Firebase Analytics ;</li>
          <li>Google Firebase Crashlytics ;</li>
          <li>Google AdMob ;</li>
          <li>certains services Android.</li>
        </ul>
        <p>
          Ces services peuvent être soumis à leurs propres conditions et politiques.
        </p>
        <p>
          GeniusFiles ne contrôle pas entièrement les services externes et ne peut
          garantir leur disponibilité permanente.
        </p>

        <h2>15. Données personnelles</h2>
        <p>
          Le traitement des données personnelles est décrit dans la{" "}
          <Link
            to="/politique-de-confidentialite"
            className="text-primary underline-offset-2 hover:underline"
          >
            Politique de confidentialité
          </Link>{" "}
          de GeniusFiles, qui fait partie intégrante des présentes conditions.
        </p>
        <p>
          La Politique de confidentialité explique notamment quelles données peuvent
          être traitées, quelles données restent localement sur l'appareil, quelles
          données peuvent être transmises à des services tiers et pourquoi elles sont
          utilisées.
        </p>

        <h2>16. Fonctionnement local et sauvegarde</h2>
        <p>
          GeniusFiles est conçue pour effectuer localement la majorité de ses
          opérations.
        </p>
        <p>
          GeniusFiles ne fournit pas actuellement de service de stockage cloud
          destiné à sauvegarder automatiquement vos fichiers personnels.
        </p>
        <p>Vous êtes responsable de la réalisation de vos propres sauvegardes.</p>
        <p>
          La désinstallation de l'Application peut entraîner la perte de certaines
          données locales de GeniusFiles. Les fichiers personnels stockés dans des
          emplacements externes au stockage privé de l'Application peuvent toutefois
          rester présents après la désinstallation.
        </p>

        <h2>17. Disponibilité et mises à jour</h2>
        <p>
          Nous nous efforçons de maintenir GeniusFiles fonctionnelle, stable et
          compatible avec les appareils pris en charge.
        </p>
        <p>
          Cependant, l'Application peut être temporairement indisponible en raison
          notamment d'une maintenance, d'une mise à jour, d'un problème technique,
          d'une défaillance d'Android, d'un problème matériel, d'un problème réseau ou
          d'une indisponibilité d'un service tiers.
        </p>
        <p>
          GeniusFiles peut recevoir des mises à jour destinées notamment à améliorer
          la sécurité, les performances, la stabilité, la compatibilité et
          l'expérience utilisateur.
        </p>
        <p>
          Certaines mises à jour peuvent modifier, remplacer ou supprimer certaines
          fonctionnalités.
        </p>

        <h2>18. Modification des fonctionnalités</h2>
        <p>GeniusFiles peut évoluer au fil du temps.</p>
        <p>Nous pouvons notamment :</p>
        <ul>
          <li>ajouter ou supprimer une fonctionnalité ;</li>
          <li>modifier l'interface ;</li>
          <li>modifier les quotas ;</li>
          <li>modifier les règles des annonces récompensées ;</li>
          <li>modifier certaines conditions techniques d'utilisation.</li>
        </ul>
        <p>
          Lorsque la loi l'exige, les utilisateurs seront informés des modifications
          importantes.
        </p>

        <h2>19. Limitation de responsabilité</h2>
        <p>
          Dans la mesure permise par la loi applicable, GeniusFiles ne pourra être
          tenue responsable des dommages résultant notamment :
        </p>
        <ul>
          <li>d'une perte ou suppression de fichiers ;</li>
          <li>d'une mauvaise configuration d'une automatisation ;</li>
          <li>d'une erreur de l'utilisateur ;</li>
          <li>d'une défaillance matérielle ou du système Android ;</li>
          <li>de l'indisponibilité d'un service tiers ;</li>
          <li>d'une réponse incorrecte de Genius AI ;</li>
          <li>d'une interruption de connexion ;</li>
          <li>d'une incompatibilité avec un appareil ;</li>
          <li>d'une utilisation non conforme aux présentes conditions ;</li>
          <li>
            d'un événement échappant raisonnablement au contrôle de GeniusFiles.
          </li>
        </ul>
        <p>
          Cette limitation ne s'applique pas lorsqu'une telle limitation est interdite
          par la loi applicable.
        </p>

        <h2>20. Modification des conditions</h2>
        <p>
          Nous pouvons mettre à jour les présentes conditions afin de tenir compte
          notamment :
        </p>
        <ul>
          <li>de l'évolution de GeniusFiles ;</li>
          <li>de nouvelles fonctionnalités ;</li>
          <li>de modifications techniques ;</li>
          <li>de changements concernant les services tiers ;</li>
          <li>de nouvelles obligations légales ou réglementaires.</li>
        </ul>
        <p>
          La date de dernière mise à jour sera indiquée au début du document.
        </p>
        <p>
          Lorsque la loi l'exige, les modifications importantes seront communiquées
          de manière appropriée.
        </p>

        <h2>21. Résiliation et cessation d'utilisation</h2>
        <p>
          Vous pouvez cesser d'utiliser GeniusFiles à tout moment en désinstallant
          l'Application.
        </p>
        <p>
          GeniusFiles peut également limiter ou suspendre certaines fonctionnalités en
          cas d'utilisation abusive, frauduleuse, illégale ou contraire aux présentes
          conditions, dans la mesure permise par la loi applicable.
        </p>
        <p>
          La cessation d'utilisation de l'Application ne supprime pas nécessairement
          les fichiers personnels que vous avez stockés dans des emplacements
          externes à l'Application.
        </p>

        <h2>22. Droit applicable et résolution des litiges</h2>
        <p>
          Les présentes conditions sont interprétées conformément au droit
          applicable, sous réserve des dispositions impératives de protection des
          consommateurs pouvant s'appliquer dans le pays de résidence de l'utilisateur.
        </p>
        <p>
          En cas de problème concernant GeniusFiles, nous vous invitons à nous
          contacter en premier lieu afin de rechercher une solution amiable.
        </p>
        <p>
          Aucune disposition des présentes conditions n'a pour objet de supprimer ou
          de limiter un droit légal dont l'utilisateur ne peut valablement renoncer en
          vertu de la législation applicable.
        </p>

        <h2>23. Contact</h2>
        <p>
          Pour toute question concernant GeniusFiles ou les présentes conditions
          d'utilisation :
        </p>
        <ul>
          <li>Application : GeniusFiles</li>
          <li>
            E-mail :{" "}
            <a
              href="mailto:geniusfiles.contact@gmail.com"
              className="text-primary underline-offset-2 hover:underline"
            >
              geniusfiles.contact@gmail.com
            </a>
          </li>
        </ul>
        <p>
          Pour les questions relatives au traitement des données personnelles,
          veuillez également utiliser cette adresse e-mail et consulter la{" "}
          <Link
            to="/politique-de-confidentialite"
            className="text-primary underline-offset-2 hover:underline"
          >
            Politique de confidentialité
          </Link>{" "}
          de GeniusFiles.
        </p>

        <h2>24. Acceptation</h2>
        <p>
          En installant, en ouvrant ou en utilisant GeniusFiles, vous reconnaissez avoir
          lu et compris les présentes Conditions d'utilisation et acceptez de vous y
          conformer.
        </p>
        <p>
          Si vous n'acceptez pas ces conditions, vous devez cesser d'utiliser
          GeniusFiles et désinstaller l'Application.
        </p>
      </article>
    </div>
  );
}
