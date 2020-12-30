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
<a href="../README.md"><img alt="Docs: DE" src="https://img.shields.io/badge/docs-DE-blue" /></a>
<a href="../../en/README.md"><img alt="Docs: EN" src="https://img.shields.io/badge/docs-EN-blue" /></a>
</p>
<br/>

## Rollout der fiskaltrust.Middleware

Die fiskaltrust.Middleware ist das lizenzkostenfreie Basisprodukt von fiskaltrust, dass von KassenHersteller in das KassenSystem integriert wird, um Konformität mit den neuen Fiskalisierungsgesetzen zu implementieren. Die fiskaltrust.Middleware läuft als eigenständiger Service in der Kasse des KassenBetreibers und wird vom KassenSystem über eine Schnittstelle angesprochen. Da die fiskaltrust.Middleware als eigenständiger Service läuft, muss sie auf die Kasse des KassenBetreibers ausgerollt werden. Je nach Gegebenheit muss die jeweilige fiskaltrust.Middleware Instanz vor der Inbetriebnahme entsprechend konfiguriert werden. So muss zum Beispiel angegeben werden, wo das KassenSystem den Service erreichbar kann, in welche Datenbank die verarbeiteten Daten vom Service gespeichert werden sollen, welche TSE für die Signaturen verwendet werden soll und wie die TSE für den Service erreichbar ist. 

In den folgenden Kapitel werden wir erläutern wie die Konfiguration der fiskaltrust.Middleware für den Rollout vorgenommen wird. Zudem zeigen wir Ihnen wie der Service installiert wird und gehen auf diverse Rolloutszenarien ein. Zum Schuss zeigen wir Ihnen welche Automatisierungsmöglichkeiten Ihnen fiskaltrust für einen Massenrollout zur Verfügung stellt.

### Konfiguration der fiskaltrust.Middleware

Die Konfiguration der fiskaltrust.Middleware kann manuell über das fiskaltrust.Portal oder automatisiert über eine API vorgenommen werden. Doch bevor wir uns ansehen wie die Konfiguration vorgenommen wird, gehen wir zuerst auf den Aufbau der fiskaltrust.Middleware ein, um besser verstehen zu können, was genau konfiguriert werden muss.

#### Aufbau der fiskaltrust.Middleware

Die fiskaltrust.Middleware ist modular aufgebaut und besteht aus mehreren Komponenten. Die wichtigsten Komponenten sind die **Queue** und die **SCU** (Signaturerstellungseinheit). Des Weiteren können auch sogenannte Helper zum Einsatz kommen, wie zum Beispiel der Helipad-Helper, der für den regelmäßigen Upload der Daten in die fiskaltrust.Cloud verantwortlich ist. Folgende Illustration zeigt wie die Queue und die SCU zum Einsatz kommen:




![Aufbau der Middleware](images/middleware.png "Aufbau der Middleware")



Die Queue ist die Komponente der fiskaltrust.Middleware, mit der das KassenSystem kommuniziert. Dafür stellt die Queue eine länderübergreifend gleiche Schnittstelle zur Verfügung, die sogenannte IPOS Schnittstelle (IPOS Interface). Die Art der Kommunikation mit der Queue wird vom KassenHersteller bei der Implementierung des KassenSystems gewählt. So kann z.B. grpc oder WCF zum Einsatz kommen. Die IPOS Schnittstelle stellt dem KassenSystem drei Funktionen zur Verfügung:

- `echo` - zur Prüfung der Verfügbarkeit der Queue
- `sign` - zum Signieren von Belegdaten, sowie zum Ausführen von Funktionalität über Sonderbelege (z.B. Initialisierung-Beleg, Tages-Abschluss-Beleg oder Nullbeleg)
- `journal` - zum Exportieren der Daten in den gesetzlich vorgeschriebenen Formaten

Die Queue erhält also Anfragen vom KassenSystem und verarbeitet diese. Sie ist verantwortlich für die Erstellung der Belegnummer, für die Verkettung der Anfragen und für die Persistenz der Daten.

Für die Signierung der Daten ist die fiskaltrust.Middleware-Komponente "SCU" (Signaturerstellungseinheit) verantwortlich. Dabei werden die zu signierenden Daten von der Queue an die SCU gesendet, die wiederum, in der deutschen Variante, mit einer TSE kommuniziert. Die TSE nimmt schlussendlich die Signierung der Daten vor. Die signierten Daten und alle dazugehörigen Informationen werden dann von der SCU zurück an die Queue gesendet. Die Queue persistiert die Daten und baut die Antwort auf, die an das KassenSystem gesendet wird. In dieser Antwort befinden sich wichtige Angaben, die vom KassenSystem auf den Beleg gedruckt werden müssen.

#### Die CashBox als Konfigurationscontainer

Die Konfiguration einer fiskaltrust.Middleware Instanz wird über eine sogenannte **CashBox** vorgenommen. Die CashBox ist ein Konfigurationscontainer, der wiederum die Konfigurationen der zum Einsatz kommenden fiskaltrust.Middleware Komponenten (z.B. Queue, SCU)  beinhaltet und miteinander verbindet. Im folgenden Beispiel wird eine CashBox dargestellt, die die Konfiguration einer Queue und die Konfiguration einer SCU beinhaltet:




![CashBox](images/cashbox.png "CashBox mit Queue und SCU")



für das obere Beispiel müssen wir also die Konfiguration der Queue und der SCU vornehmen und danach diese beiden Konfigurationen in einen Konfigurationscontainer (CashBox) ablegen und miteinander verbinden. Aber was genau müssen wir für die Queue und für die SCU konfigurieren?

##### Konfiguration der Queue

Wei bereits vorhin erwähnt, ist die Queue die Komponente der fiskaltrust.Middleware die über die IPOS Schnittstelle dem KassenSystem für Anfragen zur Verfügung steht. Zudem ist die Queue für die Persistenz der verarbeiteten Daten verantwortlich. Und genau das sind die zwei Punkte, die wir hier konfigurieren müssen:

- 1. wie und wo genau soll die Queue für das KassenSystem erreichbar sein? (also z.B. per `grpc` auf `localhost:1234`)
- 2. wo genau soll die Queue die Daten speichern? (also z.B. in eine MySql Datenbank mit dem connectionstring: "xyz")

Wie die Kommunikation stattfinden soll, also z.B. per `grpc`, entscheidet der KassenHersteller, der die KassenSoftware entsprechend implementiert. Wo die Queue und somit der Service genau erreichbar sein wird, also z.B. `localhost:1234` entscheidet meist der KassenHändler, je nach Gegebenheit beim KassenBetreiber. 

##### Konfiguration der SCU

Die SCU ist für die Erstellung der Signaturen verantwortlich. Sie bekommt dabei die zu Signierenden Daten von der Queue und übernimmt die Kommunikation mit einer TSE und die Daten signieren zu lassen. Auch bei der SCU sind also zwei Konfigurationsangaben vorzunehmen:

- 1. zum einen muss die Queue wissen, wie und wo sie die SCU erreichen kann (also z.B. über `grpc` auf `localhost:5678`).
- 2. und zum zweiten muss die SCU wissen auf welche TSE sie zugreifen soll und wo sich diese befindet (z.B. Swissbit - USB - TSE im Laufwerk "E:").

Sie werden sich nun sicherlich fragen, warum wir hier konfigurieren müssen, wie die SCU von der Queue erreichbar sein soll, wenn die Queue und SCU doch Komponenten der fiskaltrust.Middleware sind. Ist der Queue nicht schon bekannt, wie sie die SCU erreichen kann? Nun, die Antwort liegt in der Flexibilität des fiskaltrust.Middleware, denn eine Instanz der fiskaltrust.Middleware betreibt nur genau die Komponenten, die in ihrer CashBox angegeben werden. So kann zum Beispiel erreicht werden dass sich drei Kassen eine Hardware-TSE teilen können:

![Flexibilität der Middleware](images/kasse-als-server-mit-hw-tse.png "Flexibilität der Middleware")

Auf jeder Kasse läuft eine Instanz der fiskaltrust.Middleware, die durch ihre eigene CashBox konfiguriert wird. Die CashBox der ersten Kasse beinhaltet nur die Konfiguration einer Queue. Die CashBox der mittleren Kasse beinhaltet die Konfiguration einer Queue und einer SCU. Die CashBox der unteren Kasse, so wie die obere, beinhaltet nur eine Queue. Damit die SCU aus der mittleren Kasse (z.B. Hauptkasse) für die anderen beiden Kassen bzw. Queues erreichbar ist, müssen wir in der SCU Konfiguration angeben wie und wo die SCU erreichbar ist (und natürlich den entsprechenden Port freigeben). Um sicherzustellen, dass eine Queue sich mit der richtigen SCU verbindet, müssen wir diese Verbindungangabe beim Erstellen der CashBox für die Queue konfigurieren. 

#### CashBox manuell über das fiskaltrust.Portal anlegen

Jede Instanz der fiskaltrust.Middleware muss mit Hilfe einer CashBox (Konfigurationscontainer) konfiguriert werden. Eine solche CashBox kann manuell über das fiskaltrust.Portal angelegt werden oder automatisiert über eine API. In diesem Kapitel zeigen wir Ihnen wie eine CashBox über das fiskaltrust.Portal angelegt wird. Dazu gehen wir von folgenden Szenario aus:

![Szenario-Cashbox-Queue-SCU](images/kasse-queue-scu-tse.png "Szenario CashBox mit Queue und SCU")

Unsere CashBox soll eine Queue und eine SCU beinhalten. Die SCU greift auf eine USB TSE zu. Konkret werden wir eine Queue konfigurieren, mit der das KassenSystem über `REST` kommuniziert und unter `localhost:1200/fiskaltrust` für das KassenSystem erreichbar ist. Sie legt die verarbeiteten Daten in einer `SQLite` Datenbank ab. Des Weiteren eine SCU die über `grpc` und unter `localhost:1400` für die Queue erreichbar ist und die zum Signieren der Daten auf eine Cryptovision USB-TSE zugreift. Die TSE ist im Laufwerk `E:` eingesteckt.

**Schritt 1: Anlegen der SCU Konfiguration**

Gehen Sie im fiskaltrust.Portal auf "Konfiguration ->  TSE/Signatur-Erstellungs-Einheit". Sie gelangen zur Liste der bereits angelegten SCUs. 

![SCU Anlegen 1](images/SCU-Anlegen-1.png "Liste der SCUs")

Drücken Sie nun auf den Button "+ Erstellen". Es erscheint ein Formular zum Erfassen der Konfiguration.

![SCU Anlegen 2](images/SCU-Anlegen-2.png "SCU Anlegen")

1. Geben Sie hier den Namen der SCU an (z.B. TEST SCU)
2. Wählen Sie je nach TSE das Package (Modul) aus, das die SCU verwenden soll (in unserem Beispiel verwenden wir eine CryptoVision TSE)
3. Bei der Package-Version wird automatisch die neueste gewählt
4. Geben Sie den Standort an, es wird standardmäßig automatisch der Hauptstandort vorselektiert
5. Drücken Sie "Speichern"

Die SCU wurde angelegt und wir werden nun zur zweiten Konfigurationsmaske weitergeleitet. Diese richtet sich nach dem zuvor ausgewählten Package. In unserem Beispiel müssen wir für die Cryptovision TSE den Gerätepfad angeben. Für ein anderes Package kann hier auch was anderes verlangt werden (z.B. Com-Port für eine Diebold-TSE). 

![SCU Anlegen 3](images/SCU-Anlegen-3.png "SCU Konfigurieren")

1. Tragen Sie den Gerätepfad ein (also E: in unserem Fall)
2. Geben Sie nun an, wie und wo die SCU für eine Queue erreichbar sein soll. Drücken Sie dazu zuerst den entsprechenden Button für die Art der Kommunikation (z.B. grpc) und tragen Sie danach den Pfad ein (z.B. localhost:1401).
3. Drücken Sie auf "Speichern und schließen" um die Angaben zu Speichern und zurück zur Liste zu gelangen.

In der Liste können wir nun sehen, dass unsere SCU Konfiguration erfolgreich angelegt wurde:

![SCU Anlegen 4](images/SCU-Anlegen-4.png "Liste mit angelegter SCU")





**Schritt 2: Anlegen der Queue Konfiguration**

**Schritt 3: Anlegen der Cashbox**

**Schritt 4: Cashbox füllen**

**Schritt 5: Queue mit SCU verbinden**

**Schritt 6: Cashbox publizieren (rebuild configuration)**


### Service testen

### Rollout Szenarien

### Automatisierung des Rollout

#### Templates für die Konfiguration

#### Auslieferung der Middleware
