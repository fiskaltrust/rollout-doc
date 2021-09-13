---
slug: /posdealers/rollout-doc/how-to/DATEV-MeinFiskal
title: 'How-To: DATEV MeinFiskal'
---

# DATEV MeinFiskal

KassenBetreiber können als Kunden der fiskaltrust auch **MeinFiskal** (https://www.datev.de/meinfiskal/) von der **DATEV** nutzen. Deren Services können mit dem fiskaltrust.Portal verbunden und damit die Bestandteile des fiskaltrust.Sorglos-Pakets kostenlos erweitert werden. Für KassenBetreiber ohne fiskaltrust.Sorglos-Paket ist ein Einzelprodukt erhältlich.

fiskaltrust übernimmt die Erzeugung und den Export der gesetzlich vorgeschriebenen Datenformate. Mit der Übermittlung dieser Daten (DSFinV-K, DFKA-Taxonomie) sowie auf Wunsch auch weiterer Dokumente wie ~.tar-Files, Verfahrensdokumentationen, Speisekarten etc. an das **DATEV Kassenarchiv online** ist die Archivierung gesichert. Zusätzlich kann auch die Anbindung **DATEV Kassenbuch online** genutzt und so die Führung eines Kassenbuchs ermöglicht werden.
Eine spezifische Anbindung an DATEV MeinFiskal je nach KassenHersteller entfällt sowohl für KassenHändler als auch für KassenBetreiber.

![middleware-->DATEV Kassenarchiv-->Anbindung DATEV Kassenbuch](images/DATA-Flow-process.png "middleware-->DATEV Kassenarchiv-->Anbindung DATEV Kassenbuch")

Diese Anleitung beschreibt Schritt für Schritt die Vorgänge, wie ein KassenHändler im Account des KassenBetreibers die Verbindung zwischen dem fiskaltrust.Portal und dem DATEV MeinFiskal Benutzerkonto vorbereiten und anlegen kann. 
Alternativ kann der KassenBetreiber diesen Vorgang selbst entsprechend der Anleitung durchführen. In der Regel wird er aber die Anbindung dem KassenHändler überlassen und auf die übermittelten Daten bei DATEV MeinFiskal zugreifen.

## Voraussetzungen:

* aktueller Browser in Nutzung
* Benutzerdaten für fiskaltrust.Portal vorhanden
* KassenHändler hat Berechtigung auf Vertragsabschluss für KassenBetreiber
* Stammdaten beim KassenBetreiber komplett und korrekt eingetragen

## Rechtliche Hinweise:

* Bei der Nutzung der automatisierten Schnittstelle vom fiskaltrust.Portal zu DATEV MeinFiskal dürfen keine personenbezogenen Daten weitergegeben werden.
* Die KassenHersteller sind verpflichtet die Schnittstelle gemäß den DATEV Schnittstellenvorgaben zu konfigurieren. 
Diese stehen unter https://www.datev.de/web/de/media/datev_de/pdf/export-importschnittstelle_datev_factoring.pdf zum Download zur Verfügung.

## Grunddaten im fiskaltrust.Portal prüfen

- [ ] Melden Sie als KassenHändler sich an im fiskaltrust.Portal.
- [ ] Wechseln Sie zu <kbd>PosOperator</kbd>  &rarr; <kbd>Übersicht</kbd> (https://portal.fiskaltrust.de/PosOperator).
- [ ] Geben Sie ggf. Filterkriterien ein, um die Suchergebnisse einzugrenzen und wählen Sie <kbd>Suchen</kbd>.
- [ ] Prüfen Sie mit dem Symbol bei `Berechtigungen`, ob der Eintrag  `Vertragsabschluss` aktiv ist. <br />Falls nicht, setzen Sie sich mit dem KassenBetreiber in Verbindung und lassen diese aktivieren. Beachten Sie dazu den Hilfetext bei [Troubleshooting](#Troubleshooting)  
- [ ] Mit <kbd>OK</kbd> schließen Sie das Dialogfenster.
- [ ] Wählen Sie bei <kbd>Name*</kbd>  den Link und wechseln Sie den Account des Kassenbetreibers.
- [ ] Wählen Sie <kbd>Firma</kbd> &rarr; <kbd>Stammdaten</kbd>.
- [ ] Kontrollieren Sie, ob jedes Pflichtfeld wie `Name*`,  `Adresse*` ausgefüllt ist.
- [ ] Prüfen Sie auch, ob **keine Leerstellen** in den Feldern eingegeben wurden, zum Beispiel vor oder nach den Werten oder in scheinbar leeren Feldern.
- [ ] Kontrollieren Sie, dass bei `St.-IdNr.` oder bei `USt-IdNr.` ein gültiger Eintrag vorhanden ist.
![vollständige Stammdaten im Portal des PosOperators](images/fiskaltrust.portal-Stammdaten.png "vollständige Stammdaten im Portal des PosOperators")
- [ ] Sichern Sie Ihre Eingaben mit <kbd>Speichern</kbd>.

## meinFiskal Benutzerkonto bereitstellen

- [ ] Wechseln Sie im Account des Kassenbetreibers zu <kbd>Firma</kbd>  &rarr; <kbd>Übersicht</kbd> (https://portal.fiskaltrust.de/AccountProfile).
![Firma-->Übersicht-->Verbindungen zu Drittpartnern](images/meinFiskal-uebersicht.png "Firma-->Übersicht-->Verbindungen zu Drittpartnern")
- [ ] Aktivieren Sie den Schieberegler bei `Hier können Sie Verbindungen zu Drittpartnern aktivieren:`
- [ ] Aktivieren Sie das Kästchen bei `Ich habe die AGB und die Datenschutzerklärung gelesen und akzeptiere diese.`
- [ ] Unterschreiben Sie den **Nutzungsvertrag** durch eine beliebige Eingabe.
- [ ] Der Durchführende (also im Fall dieser Anleitung der KassenHändler) erhält eine E-Mail mit der Kopie des gezeichneten Nutzungsvertrages als Anhang. <br />Weiter enthält diese E-Mail auch einen Link zum Download des Nutzungsvertrages.
![E-Mail mit der Kopie des gezeichneten Nutzungsvertrages als Anhang](images/meinFiskal-Vertragsmail.png "E-Mail mit der Kopie des gezeichneten Nutzungsvertrages als Anhang")

## meinFiskal Benutzerkonto aktivieren

- [ ] Im fiskaltrust.Portal wechselt bei <kbd>DATEV MeinFiskal</kbd> die Statusmeldung:
![Firma-->Übersicht-->Verbindungen zu Drittpartnern](images/meinFiskal-uebersicht-neu.png "Firma-->Übersicht-->Verbindungen zu Drittpartnern")
- [ ] Wählen Sie <kbd>Durchführen von MeinFiskal-Onboarding-Vorgängen</kbd>.
- [ ] Folgen Sie den Anweisungen. 
- [ ] Je nach Browsereinstellungen wird das `Fenster zum Passwort setzen` (https://meinfiskal.de/registrierung/passwort-setzen...) **nicht im Vordergrund** angezeigt. <br />Wechseln Sie dann mit <kbd>Alt</kbd> & <kbd>Tab</kbd> zum gewünschten Fenster.
![meinFiskal Passwort setzen](images/meinFiskal-Anmelden-Passwort.png "meinFiskal Passwort setzen")
- [ ] Geben Sie ein Passwort ein und wiederholen Sie dieses im zweiten Feld.
- [ ] Damit Ihr Passwort sicher genug ist, muss es aus mindestens acht Zeichen bestehen und Elemente aus drei von vier dieser Zeichengruppen enthalten:
    - [ ] Großbuchstaben
    - [ ] Kleinbuchstaben
    - [ ] Zahlen
    - [ ] Sonderzeichen
- [ ] Nach der Meldung namens `Vielen Dank, Passwort erfolgreich geändert!` wechseln Sie zum **Anmelden**.
- [ ] Bei der Einwilligung in elektronische Werbung (Kundenbefragungen) nach § 7 UWG können Sie <kbd>Zustimmen</kbd> oder <kbd>Überspringen</kbd> wählen.
![Einwilligung in elektronische Kundenbefragungen](images/meinFiskal-Anmelden-kundenbefragung.png "Einwilligung in elektronische Kundenbefragungen")
- [ ] Im Portal von DATEV MeinFiskal werden Sie nach der Erstanmeldung zur `Berechtigung der Anwendung` befragt.
![Einwilligung in Berechtigungen](images/meinFiskal-Berechtigungen_de.png "Einwilligung in Berechtigungen")

- [ ] Aktivieren Sie `Zukünftig ohne Rückfrage automatisch zustimmen` und wählen Sie <kbd>Ich stimme zu</kbd>.
- [ ] Zurück im fiskaltrust.Portal änderte sich bei DATEV MeinFiskal die Statusmeldung, und zeigt `Das MeinFiskal-Konto ist mit fiskaltrust verbunden.`

## Kassensystem aktivieren

- [ ] Der Durchführende, also in diesem Fall der KassenHändler erhält eine E-Mail an die im fiskaltrust.Portal hinterlegte E-Mailadresse. Diese E-Mail enthält einen Link auf den Passwort-Änderungsdialog und die Kundenstammdaten (Name, Adresse, E-Mail, Kundennummer). <br />**Der Link zum Passwort-Setzen ist 4 Tage gültig**. 
- [ ] Das Zurücksetzen des Passwortes kann später auch über die Portalseite (https://meinfiskal.de/registrierung/passwort-vergessen) erfolgen.

- [ ] Zur Aktivierung oder Nutzung von <kbd>DATEV MeinFiskal</kbd> melden Sie sich an unter https://meinfiskal.de/ 
- [ ] Im Portal von <kbd>DATEV MeinFiskal</kbd> zeigt die Übersicht die Option, eine Kasse mit dem Kassenarchiv zu verbinden.
- [ ] Für weitere Arbeitsschritte im DATEV MeinFiskal Benutzerkonto erkundigen Sie sich bei der DATEV.

## Nutzung für KassenBetreiber oder Berater

- [ ] KassenBetreiber erhalten nach der Aktivierung des DATEV MeinFiskal Benutzerkontos eine E-Mail an die im fiskaltrust.Portal hinterlegte E-Mailadresse.<br /> Diese E-Mail enthält die Kundenstammdaten (Name, Adresse, E-Mail): 
![meinFiskal Account eingerichtet](images/meinFiskal-Accountsmail.png "meinFiskal Account eingerichtet")
- [ ] Darin ist ein Link zur Vergabe eines neuen Passwortes enthalten. Mit diesem Passwort können KassenBetreiber oder deren Berater auf das Portal von DATEV MeinFiskal zugreifen.<br /> Die Datenübermittlung vom fiskaltrust.Portal zur KassenBuch-Schnittstelle wird damit nicht beeinflusst.
- [ ] Der Link zur Vergabe eines neuen Passwortes ist 4 Tage gültig. 

## Troubleshooting

 * Einem KassenHändler fehlt im fiskaltrust.Portal die Berechtigung zum `Vertragsabschluss` (siehe Screenshot). 
 * Bei <kbd>[PosOperator](https://portal.fiskaltrust.de/PosOperator)</kbd>  &rarr; <kbd>Übersicht</kbd> ist das Recht auf `Vertragsabschluss` bei <kbd>Berechtigungen</kbd> nicht aktiv.
 * Die Schaltfläche bei <kbd>[Firma](https://portal.fiskaltrust.de/AccountProfile)</kbd>  &rarr; <kbd>Übersicht</kbd> &rarr; <kbd>DATEV MeinFiskal</kbd> ist für den KassenHändler inaktiv.

 ![Berechtigungen im fiskaltrust.Portal](images/meinFiskal-Berechtigungen-1.png "Berechtigungen im fiskaltrust.Portal ergänzen um Vertragsabschlusss") 

 Die genannten Probleme liegen eventuell daran, dass der KassenBetreiber dem KassenHändler kein Recht auf `Vertragsabschluss` gewährt hat. 
    - [ ] Das Recht auf `Vertragsabschluss` kann der KassenBetreiber, nicht der KassenHändler aktivieren.
    - [ ] KassenBetreiber melden sich zur Rechtevergabe im fiskaltrust.Portal an und wählen <kbd>PosOperator</kbd> &rarr; <kbd>Übersicht</kbd> (https://portal.fiskaltrust.de/PosOperator).
    - [ ] Dort den Schieberegler bei `Vertragsabschluss` nach rechts schieben und mit <kbd>OK</kbd> die Rechtevergabe aktivieren.


* Im Account des KassenBetreibers konnte unter <kbd>Firma</kbd>  &rarr; <kbd>Übersicht</kbd> &rarr; <kbd>DATEV MeinFiskal</kbd> (https://portal.fiskaltrust.de/AccountProfile) der Vertrag gezeichnet werden. Aber beim Durchführen von MeinFiskal-Onboarding-Vorgängen erscheinen ständig Fehlermeldungen
    - [ ] Wechseln Sie zu Firma  &rarr; Stammdaten. 
    - [ ] Kontrollieren Sie, ob jedes Pflichtfeld ausgefüllt wurde. 
    - [ ] Kontrollieren Sie weiter, ob **Leeerstellen** vor oder nach den Werten eingesetzt wurden.
    - [ ] Lassen Sie die <kbd>St.-ldNr.</kbd> oder <kbd>USt-ldNr.</kbd> mit der **Gültigkeitsprüfung** prüfen
    - [ ] Wechseln Sie anschließend zu Firma &rarr; Übersicht &rarr; DATEV MeinFiskal und testen den Verbindungsvorgang erneut.


* Das Fenster (https://meinfiskal.de/registrierung/passwort-setzen...) erscheint nicht und ist auch nicht mit <kbd>Alt</kbd> & <kbd>Tab</kbd> nicht zu finden.
 Im <kbd>fiskaltrust.Portal</kbd> erscheint ein Warnhinweis: `Fehler: Looks like you have closed the password set dialog without setting a password. Please try again and make sure to set the password accordingly.`
     - [ ] Aktualisieren Sie das Browserfenster vom fiskaltrust.Portal
     - [ ] Verwenden Sie dazu die Schaltfläche <kbd>Diese Seite neu laden</kbd> in der Adresszeile des Browsers oder die Funktionstaste <kbd>F5</kbd>.

* Das Mail an KassenBetreiber mit dem Link zum Passwort setzen wurde länger als vier Tage nicht beachtet. Der Link steht nicht mehr zur Verfügung.
    - [ ] Wählen Sie im Browser Ihrer Wahl https://meinfiskal.de/registrierung/passwort-vergessen.
    - [ ] Wenn das DATEV meinFiskal Benutzerkonto bereit gestellt wurde, kann ein Passwort an die im fiskaltrust.Portal hinterlegte E-Mailadresse des KassenBetreibers versandt werden.