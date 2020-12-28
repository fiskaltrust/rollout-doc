<div align="center">
<img alt="fiskaltrust" src="../../images/fiskaltrust-icon.png" width="450" />
<br/>
<strong>Compliance-As-A-Service für Kassensysteme</strong>
<br/>
<br/>
<h1>Rollout Dokumentation für Deutschland</h1>
<br/>
</div>
<p align="center">
<a href="./de/README.md"><img alt="Docs: CAPs" src="https://img.shields.io/badge/docs-DE-blue" /></a>
<a href="../en/README.md"><img alt="Docs: SEPs" src="https://img.shields.io/badge/docs-EN-blue" /></a>
</p>
<br/>


## Einladungsmanagement



Wie in der [Einleitung](../README.md) beschrieben, werden von fiskaltrust beim Rollout der fiskaltrust.Middleware drei Partnerrollen unterschieden: 

- KassenHersteller (POSCreator)
- KassenHändler (POSDealer)
- und KassenBetreiber (POSOperator)



Grundvoraussetzung für die Verwendung des fiskaltrust.Portal als Rolloutmanagement-Tool ist die Registrierung und Zuordnung der oben genannten Partner im fiskaltrust.Portal. Hierzu registriert sich als erster der KassenHersteller selbständig und erfasst sein(e) KassenSystem(e) im Portal. Danach lädt er pro KassenSystem seine dazugehörigen KassenHändler zur Registrierung ein. Für die Einladung verwendet er die Einladungsfunktion im Portal. Die registrierten KassenHändler laden dann als nächstes ihre KassenBetreiber ebenfalls über das Portal ein. Dadurch entsteht die eindeutige, systemweite Zuordnung der KassenBetreiber zu ihren KassenHändler und der KassenHändler zum KassenSystem des KassenHersteller:




![Partner-Rollen](images/Partner-Rollen.png "Rollen der fiskaltrust Partner")



Der Registrierungs- und Einladungs-Prozess sieht wie folgt aus:

1. Der KassenHersteller registriert sich im fiskaltrust.Portal, aktiviert die Rolle "KassenHersteller" und unterzeichnet digital den dazugehörigen Kooperationsvertrag mit fiskaltrust. Dann erfasst er seine KassenSysteme im Portal und sendet mit Hilfe des Portals pro KassenSystem Einladungen zur Zuordnung an seine KassenHändler. Dabei sendet das fisklatrust.Portal automatisiert die Einladungs-Emails an die KassenHändler.
2. Der KassenHändler erhält die Einladungen-Email und klickt auf den Link zur Registrierung. Als erstes setzt er sein Passwort, wählt die Partnerrolle: "KassenHändler" und unterzeichnet digital den dazugehörigen Kooperationsvertrag mit fiskaltrust.
3. Nun kann der KassenHändler seine KassenBetreiber über das Portal einladen und sich zuordnen lassen. Das ist wichtig, denn er muss später den Massenrollout der fiskaltrust.Middleware über das Portal vornehmen.
4. Der eingeladenen KassenBetreiber erhält daraufhin die Einladung-Email von fiskaltrust, drückt den Link zur Registrierung, setzt sein Passwort und unterschreibt die Nutzungsvereinbarung damit die fiskaltrust.Middleware auf seiner Kasse installiert werden darf.

![Einladungsprozess](images/Einladungsprozess.png "Einladungsprozess")

Im Folgenden wird im Detail beschrieben wie die einzelnen Schritte im Einladungsprozess vorzunehmen werden und auf welche Aspekte dabei besonders zu 8ten ist. Wir teilen dabei die Beschreibung in folgende zwei Kapitel auf:

-  [KassenHersteller laden KassenHändler ein](README.md#kassenhersteller-laden-kassenhändler-ein)

- [KassenHändler laden KassenBetreiber ein](README.md#kassenhändler-laden-kassenbetreiber-ein)



### KassenHersteller laden KassenHändler ein

Die KassenHersteller integrieren die fiskaltrust.Middleware in ihr Kassensystem (POSSystem). Sie müssen sich dafür im fiskaltrust.Portal selbständig registrieren. Des Weiteren müssen KassenHersteller bei der Registrierung im fiskaltrust.Portal, die Rolle "KassenHersteller" (POSCreator) wählen, den Kooperationsvertrag mit fiskaltrust digital unterzeichnen und Ihr Kassensystem (POSSystem) im fiskaltrust.Portal eintragen. Die Registrierung des KassenSystems ist die Voraussetzung zur Einladung der KassenHändler. Bitte laden Sie so früh wie möglich Ihre KassenHändler ein, denn die KassenHändler benötigen genügend Zeit zum Einladen der KassenBetreiber und zum Vorbereiten und Testen des Massenrollout. 

Als erstes müssen Sie dazu Ihr(e) KassenSystem(e) im fiskaltrust.Portal eintragen/registrieren.  Danach können Sie über das eingetragene KassenSystem die dazugehörigen KassenHändler einladen und somit dem KassenSystem zuordnen.



#### KassenSystem (POSSystem) eintragen

Als KassenHändler können Sie wie folgt Ihr KassenSystem (POSSystem) im fiskaltrust.Portal registrieren:

1. Klicken Sie den Menüpunkt "POSSystems" an. Sie gelangen zur Übersicht Ihrer registrieren KassenSysteme:

   

![Übersicht KassenSysteme](images/Menu-Kassensysteme.png "Übersicht der Kassensysteme")



2. Klicken den "Hinzufügen" Button um Ihr KassenSystem anzulegen. Die Erfassung erfolgt über ein Formular:

   

![Kassensystem erfassen](images/Kassensystem-erfassen.png "Kassensystem erfassen")



3. Nach Eingabe der Daten, können Sie den Button "Erstellen" zum Anlegen des KassenSystems drücken. Daraufhin erscheint erneut die Übersicht, in der nun das erfasste KassenSystem angezeigt wird:



![Kassensystem in Übersicht](images/Kassensystem-in-Ueberischt.png "Kassensystem in Übersicht")



#### KassenHändler einladen

4. Wie im oberen Bild sichtbar, sind dem neu erfassten KassenSystem noch keine KassenHändler zugewiesen. Drücken Sie auf "Händler" um zur Übersicht der Händler zu gelangen und mit den Einladungen zu beginnen.



![Übersicht der Händler](images/Uebersicht-Haendler.png "Übersicht der Händler")



5. Drücken Sie nun den "Hinzufügen" Button um einen Händler zu erfassen, einzuladen und somit dem KassenSystem zuzuordnen. Geben Sie als nächstes die Email-Adresse des Händlers ein (Email-Adresse des Ansprechpartners - diese wird später zum Login vom Händler verwendet):



![Ansprechpartner beim Händler](images/Haendler-Ansprechpartner.png "Ansprechpartner beim Händler angeben")



6. Drücken Sie nun den "Suchen" Button. Das Portal wird den Händler im fiskaltrust System suchen. Falls dieser bereits registriert ist, kann er sofort zugeordnet werden. Ansonsten kommt ein Formular zur Erfassung der Händlerdaten:



![Händler erfassen](images/Haendler-erfassen.png "Händler erfassen")



7. Drücken Sie nach der Erfassung der Daten im Formular den "Hinzufügen/Einladen" Button. Das Portal wird daraufhin eine Einladung-Email an den KassenHersteller (an den angegebenen Ansprechpartner) senden. In der Übersicht ist nun der Händler als zugeordnet zu sehen:

![Händler wurde erfasst](images/Haendler-ist-drin.png "Händler wurde erfasst")


   Zudem erhält der KassenHändler zwei Emails (eine Einladungs-Email und eine Zuordnung-Email):

**Einladungs-Email an den KassenHändler:**

![Händler bekommt eine Einladungs-Email](images/Haendler-Einladungsmail.png "Händler bekommt eine Einladungs-Email")

**Zuordnungs-Email an den KassenHändler:**

![Händler bekommt eine Zuordnungs-Email](images/Haendler-Zuordnungsemail.png "Händler bekommt eine Zuordnungs-Email")



8. Als Nächstes drückt der eingeladene Händler den "Link zur Aktivierung", den er in der Einladung-Email erhalten hat. Er gelangt zum fiskaltrust.Portal und muss hier sein Passwort setzen um die Registrierung abzuschließen:

   

![Händler setzt Passwort](images/Haendler-setzt-Passwort.png "Händler setzt Passwort um die Registrierung abzuschließen")



9. Der Händler wird zur "Übersichtseite" seines Accounts im Portal weitergeleitet und MUSS hier die Rolle "KassenHändler" aktivieren:

   

![Händler aktiviert Rolle](images/Haendler-aktiviert-Rolle.png "Händler aktiviert Rolle")



10. Durch das Aktivieren der Rolle "KassenHändler" erscheint der Kooperationsvertrag mit fiskaltrust, den der KassenHändler digital unterschrieben muss:

    

![Händler unterschreibt Vertrag](images/Haendler-unterschreibt-Vertrag.png "Händler unterschreibt den Kooperationsvertrag mit fiskaltrust")





11. Sobald der Händler den Kooperationsvertrag mit fiskaltrust digital unterschrieben hat wird er zurück zur Übersicht geführt. Hier kann er sehen, dass die Rolle "KassenHändler" aktiviert wurde:

    


![Händler Rolle wurde aktiviert](images/Haendler-hat-unterschrieben.png "Rolle KassenHändler wurde nach Unterschrift aktiviert")



12. Dies bekommt der Händler auch per Email mitgeteilt:

    

![Händler bekommt Aktivierungsmail](images/Haendler-bekommt-Aktivierungs-Email.png "Aktivierung der Rolle KassenHändler wird dem Händler auch per Email mitgeteilt")



Damit ist der KassenHändler eingeladen und dem KassenSystem zugeordnet. Er kann nun mit der Einladung seiner KassenBetreiber beginnen.

### KassenHändler laden KassenBetreiber ein
Als KassenHändler müssen Sie Ihre KassenBetreiber (POSOperator) im fiskaltrust.Portal einladen um das Portal als Rolloutmanagement-Tool für die fiskaltrust.Middleware und für andere fiskaltrust Produkte nutzen zu können. 

Sie können einzelne KassenBetreiber aber auch viele KassenBetreiber gleichzeitig einladen (CSV-Import).

Unter dem Menüpunkt "PosOperator -> Überisicht" können Sie sich die Liste der bereits Ihnen zugeordneten KassenBetreiber anzeigen lassen. Diese Liste ist Anfangs leer:

![Übersicht der Betreiber](images/Uebersicht-Betreiber.png "Bereits zugeordnete Betreiber")



Um KassenBetreiber einzuladen, gehen Sie wie folgt vor:

1. Screen "Einladungen" aufrufen. Klicken Sie dazu den Menüpunkt "PosOperator->Einladungen". Hier können Sie die Einladungen vorbereiten und sobald fertig, an Ihre KassenBetreiber mit Hilfe des Portals versenden:


![Einladungen der Betreiber](images/Betreiber-Einladungen-Screen.png "Übersicht der Einladungen")



2. Konfigurieren Sie als nächstes die Einladungs-Email die später an die eingeladenen Betreiber gesendet wird. Sie können hierzu eine PDF Datei anhängen und einen Zusatztext schreiben. Diese werden in die automatisch von fiskaltrust erstellte Einladung-Email übernommen.

![Einladungen der Betreiber](images/Betreiber-Einladungen-vorbereiten.png "Überischt der Einladungen")

3. Geben Sie zudem an, welche Rechte **Sie** auf den Account des Betreibers haben möchten. Dazu haben Sie folgende Möglichkeiten:

- "Nur lesen": Sie können sich später in den Account des Betreibers einloggen, können dort aber nichts ändern
- "Lesen und Schreiben": Sie können sich später in den Account des Betreibers einloggen, können dort alles lesen und schreiben, also zum Beispiel die Konfiguration der fiskaltrust.Middelware anlegen, die sie beim Rollout benötigen werden.
- "Voll": Sie können sich später in den Account des Betreibers einloggen, können dort alles lesen und schreiben, zudem können Sie im Namen des Betreibers Produkte von fiskaltrust einkaufen und Verträge unterzeichnen.
- "keine Zugriffsrechte": Sie können sich später nicht in den Account des Betreibers einloggen.



4. Nun können Sie eine Einladungsliste mit KassenBetreiber anlegen. Dazu können Sie sowohl einzeln KassenBetreiber erfassen als auch viele geleichzeitig über ein CSV-Datei-Import anlegen.   

![Anlegen der Betreiber](images/Betreibereinladung-anlegen.png "Anlegen der Betreiber-Einladungen")



4.1 Einzeln erfassen

Drücken Sie den "Hinzufügen" Button oberhalb der Einladungsliste. Es erscheint ein Formular zum Erfassen der Daten des KassenBetreibers. 

Dieses Formular ist in zwei Bereiche unterteilt: 

- 1. Firmendaten
- 2. Benutzerdaten bzw. Accountdaten

Geben Sie zuerst die Firmendaten des KassenBetreibers an. Wichtig: Achten Sie darauf hier die Firmen-Emailadresse anzugeben (z.B. info@...), und nicht die Email-Adresse des Benutzers (z.B. josef.mayer@...). Falls der KassenBetreiber nur eine Email-Adresse besitzt, können Sie sie hier natürlich ebenfalls verwenden.

![Betreiber einzeln erfassen](images/Betreiber-einzeln-erfassen-Firmendaten.png "Betreiber einzeln erfassen - Firmendaten")


Geben Sie danach die Beutzerdaten für den Account an. D.h. die Daten der Person, die den Account auf Seite des KassenBetreibers verwalten wird. Wichtig: die hier angegebene Email-Adresse wird später zum Einloggen verwendet, es sollte also nicht die Firmen-Email-Adresse sein, sondern die des Benutzers der den Account verwalten wird. Falls der KassenBetreiber nur eine Email-Adresse besitzt, können Sie sie hier natürlich ebenfalls verwenden.

![Betreiber einzeln erfassen](images/Betreiber-einzeln-erfassen-Benutzerdaten.png "Betreiber einzeln erfassen - Benutzerdaten")

Drücken Sie "Speichern" im Formular um den Listeneintrag anzulegen. Der neue Eintrag erscheint in der Einladungsliste:

![Eintrag in Einladungsliste](images/Eintrag-in-Einladungsliste.png "Eintrag in Einladungsliste")



4.2. Viele Einträge gleichzeitig anlegen

Alternativ zu Einzelerfassung können Sie eine CSV-Datei mit mehreren Einträgen importieren. Laden Sie dazu zuerst die Vorlage herunter (Button: "Demo CSV-Datei herunterladen"). Füllen Sie diese analog zur Einzelerfassung für mehrere Betreiber aus (siehe oben):

![CSV-Einladungsliste](images/CSV-Einladungsliste.png "CSV-Einladungsliste")

Wählen Sie die ausgefüllte Datei von Ihrem Rechner aus (Button: "Datei auswählen") und importieren Sie die Einträge, indem Sie den Button "Importieren" drücken: 

![Mehrere Betreiber einladen](images/Mehrere-Betreiber-einladen.png "Mehrere Betreiber einladen")

Die eingelesenen Einträge erscheinen daraufhin in der Einladungsliste.

5. Nachdem Sie Einträge in Einladungsliste hinzugefügt haben (siehe oben), sind die dazugehörigen KassenBetreiber noch nicht eingeladen. Sie können nun alle hier erfassten KassenBetreiber auf einmal einladen und Ihnen zuordnen (Button: "Alle KassenBetreiber zuordnen") oder einzelne KassenBetreiber aus der Liste einladen und Ihnen zuordnen (Briefumschalg Button im Listeneintrag):


![Alle oder einzeln aus der Liste einladen und zuordnen](images/Alle-oder-einzeln-aus-der-Liste-einladen.png "Alle oder einzeln aus der Liste einladen und zuordnen")



Der KassenBetreiber bekommt daraufhin die Einladungs-Email, in der er über weitere Schritte informiert wird. Die Email beinhaltet auch den von Ihnen in der Konfiguration angegebenen Zusatztext und angehängte PDF-Datei (falls angegeben - siehe oben, Pkt. 2):



![Betreiber bekommt Email](images/Betreiber-bekommt-Email.png "Betreiber bekommt Email")



Der KassenBetreiber wird in der Email aufgefordert einen Link zu drücken um die Registrierung abzuschließen. Er wird dadurch zum fiskaltrust.Portal weiter geleitet und muss hier als erstes sein Passwort setzen:

![Betreiber setzt Passwort](images/Betreiber-setzt-Passwort.png "Betreiber setzt Passwort")



Als nächstes wird dem KassenBetreiber die Nutzungsvereinbarung angezeigt. Diese MUSS er digital unterschreiben sonst kann die fiskaltrust.Middleware nicht ausgerollt werden. 

![Betreiber unterzeichnet Nutzungsvereinbarung](images/Nutzungsvereinbarung-unterschreiben.png "Betreiber unterzeichnet Nutzungsvereinbarung")



Der Betreiber gilt erst mit Unterschrift der Nutzungsvereinbarung als vollständig Ihnen zugeordnet und hat dann im fiskaltrust.Portal den Status "aktiv". Er erscheint in der Übersicht Ihrer KassenBetreiber unter PosOperator->Übersicht. Die Liste ist bei Aufruf leer. Sie müssen die Einträge über die Suche anzeigen lassen:

![Betreiber zugeordnet und aktiv](images/Betreiber-zugeordnet-und-aktiv.png "Betreiber zugeordnet und aktiv")

Der Firmenname des KassenBetreibers wird in der Liste als Link dargestellt (nur bei Status "aktiv"). Drücken Sie den Link um in den Account des KassenBetreibers zu wechseln. Diese Funktion nennen wir "Surrogate-Funktion". Sie loggen sich dadurch in den Account des KassenBetreibers ein. Sie könne später diese Funktion nutzen um die Konfiguration der auszurollenden fiskaltrust.Middleware Instanz im Account des KassenBetreibers vorzunehmen.

Sollte der Eintrag den Status "inaktiv" besitzen, so hat der KassenBetreiber die Nutzungsvereinbarung noch nicht unterschrieben. 

![Betreiber inaktiv](images/Betreiber-inaktiv.png "Betreiber zugeordnet aber inaktiv")

Fordern Sie den KassenBetreiber auf, die Nutzungsvereinbarung digital zu unterschreiben. Sollte der KassenBetreiber die Einladung-Email nicht erhalten haben, so können Sie diese mit Hilfe des Portals erneut senden. Gehen Sie dazu in den Bereich POSOperator->Einladungen und drücken Sie hier auf den "Protokoll" Button. 

![Einladungsprotokoll aufrufen](images/Einladungsprotokol-aufrufen.png "Einladungsprotokoll aufrufen")

Die Historie (Protokoll) Ihrer in der Vergangenheit versendeten Einladungen wird angezeigt. Hier können Sie nun im dazugehörigen Listeneintrag mit Hilfe eines Buttons die Einladung-Email erneut senden lassen:

![Einladungs-Email erneut senden lassen](images/Einladungs-Email-erneut-senden-lassen.png "Einladungs-Email erneut senden lassen")


#####  Outlets für KassenBetreiber anlegen


### Schlusswort

Wir hoffen, dass Ihnen der oben beschriebene Leitfaden bezüglich des Einladungsmanagement weitergeholfen hat. Sollten Sie Fragen dazu haben, bitten wir Sie unsere [FAQ Liste](https://docs.fiskaltrust.cloud/doc/faq/qna/market-de.html) aufzusuchen. Sollten Sie hier nicht fündig werden, so können Sie uns jederzeit gerne unter info@fiskaltrust.de kontaktieren.
