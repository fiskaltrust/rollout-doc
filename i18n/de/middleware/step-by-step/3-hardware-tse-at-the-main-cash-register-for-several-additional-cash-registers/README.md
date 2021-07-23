---
slug: /posdealers/rollout-doc/middleware/step-by-step/3-hardware-tse-at-the-main-cash-register-for-several-additional-cash-registers
title: Leitfaden für "Hardware TSE an der Hauptkassa für mehrere zusätzliche Kassen"
---

# Hardware TSE an der Hauptkassa für mehrere zusätzliche Kassen

Dieser Leitfaden führt Sie durch ein geteiltes Szenario wo ein traditionelles Queue/SCU Setup seine fiskaltrust.SCU  mit anderen Queues teilt.



![](../../images/cash-register-as-sever-hw-tse.png)



Diese Konfiguration beinhaltet ein traditionelles Queue/SCU Setup. Dazu gibt es auch noch eine Anzahl von zusätzlichen *Queue-only* CashBoxen (für alle anderen Kassen) welche die fiskaltrust.SCU  von der Master CashBox verwenden.

In diesem Tutorial werden wir folgendes aufsetzen

1. eine SCU
2. eine Queue
3. eine Master CashBox, welche die SCU und Queue aus den vorigen Schritten kombiniert
4. zusätzliche Queue-only CashBoxen, welche die SCU der Master CashBox aus Schritt 3 verwenden



## 0 - Voraussetzungen
Als Händler stellen Sie bitte sicher, dass Sie zuerst die **Surrogate Funktion** benutzt haben, um in das **Konto Ihres Kunden zu wechseln und Änderungen in diesem Kontext auszuführen**.

Dazu klicken Sie bitte linkerhand `PosOperator` - `Übersicht`, suchen das Konto Ihres Kunden und klicken auf den dazugehörigen Namen.

*Sollte es nicht möglich sein den Namen anzuklicken, überprüfen Sie bitte das Statusicon und stellen sicher, dass Ihr Kunde bereits aktiv geschalten ist (ansonsten hätte er möglicherweise sein Kontoerstellung noch nicht abgeschlossen).*

![](../images/surrogate.png)



Sobald Sie in das Konto Ihres Kunden eingestiegen sind, erhalten Sie rechts oben einen roten Knopf mit der Aufschrift `Zu Ihrem Account wechseln`. Dies zeigt einerseits an, dass Sie erfolgreich in das Konto Ihres Kunden gewechselt haben, andererseits können Sie damit zu Ihrem eigenen Konto zurückwechseln.

![](../images/switch-back.png)





## 1 - Erstellung der SCU
### Schritt 1 - Navigation im Menü
Wählen Sie linkerhand im Menü `Konfiguration` - `TSE / Signatur-Erstellungs-Einheit`.

![menu_scu](../images/menu-scu.png)

### Schritt 2 - Hinzufügen

Klicken Sie den `Hinzufügen` Knopf.

![scu_add](../images/scu-add.png)

### Schritt 3 - Eingabe der Details
Geben Sie einen aussagekräftigen Namen für Ihre neue SCU im Feld Beschreibung an, wählen Sie das korrekte Paket und die neueste Version für Ihre konkrete TSE und wählen Sie das Outlet, in welchem diese SCU aktiv sein soll. Nach Auswahl vom Paket wird das fiskaltrust.Portal automatisch die aktuellste Paketversion als Standard auswählen.

![main](../images/main-scu.png)



Klicken Sie `Speichern` sobald Sie alle Informationen eingegeben habe. Danach werden Sie zu einem Schirm umgeleitet, wo Sie zusätzliche technische Details konfigurieren können. Die Mehrheit dieser Einstellungen ist TSE-spezifisch (*im folgenden Beispiel haben wireine fiskaly cloudbasierende TSE * ausgewählt) und erfordert die korrekten Werte für diese TSE (z.B. den richtigen Laufwerksbuchstaben oder den korrekten API Schlüssel).
*Eine vollständige Liste aller möglichen Optionen für jeden TSE Typ kann [hier](https://docs.fiskaltrust.cloud/de/docs/posdealers/rollout-doc/middleware#templating-zum-anlegen-von-cashboxen) im Abschnitt `SCU` gefunden werden.*

Ein weiterer wichtiger Punkt hier ist die URL, unter welcher die SCU für die Queue verfügbar sein soll. Diese besteht aus drei Elementen

1. dem **Kommunikationsprotokoll**. Sie können zwischen gRPC, REST, SOAP und net.pipe wählen
2. dem **Hostname**. Stellen Sie sicher hier eine Adresse zu verwenden, welche von all Ihren Queues erreichbar ist
3. dem für die SCU spezifischen **URL Pfad**

Klicken Sie auf einen der verfügbaren Protokolltypen um automatische eine passende URL dafür zu generieren.



> **Es ist wichtig, dass Ihre SCU URL nicht den gleichen Netzwerk-Port verwendet wie die URL, welche Sie später für Ihre Queue verwenden möchten.**



![](../images/scu-config.png)

Sobald Sie die Konfiguration abgeschlossen haben scrollen Sie zum Seitenende, klicken `Speichern und schliessen` und die neue SCU sollte auf dem folgenden Schirm unter den SCUs Ihres Kunden aufgeführt sein.



## 2 - Erstellung der Queue

### Schritt 1 - Navigation im Menü

Wählen Sie linkerhand im Menü `Konfiguration` - `Queue`.

![menu_queue](../images/menu-queue.png)

### Schritt 2 - Hinzufügen

Klicken Sie den `Hinzufügen` Knopf.

![](../images/queue-add.png)

### Schritt 3 - Eingabe der Details

Geben Sie einen aussagekräftigen Namen für Ihre neue Queue im Feld Beschreibung an, wählen Sie das korrekte Paket für den gewünschten Datenbanktyp, sowie die neueste Version (*wenn Sie SQLite wählen, wird die Middleware die Datenbank automatisch erstellen*), wählen Sie den gewünschten Timeout Wert aus (Standard sind 15.000 Millisekunden), geben Sie die Serien- oder Identifikationsnummer Ihrer Kasse an (*oder wählen Sie `Generieren der Identifikation` aus um das fiskaltrust.Portal eine eindeutige Nummer generieren zu lassen*) und wählen Sie das Outlet, in welchem diese Queue aktiv ist aus.

![main_queue](../images/main-queue.png)

Sobald Sie alle Informationen eingetragen haben, scrollen Sie ans untere Ende der Seite und klicken `Speichern`, worauf Sie auf einen Schirm umgeleitet werden, wo Sie zusätzliche technische Details konfigurieren können. Der wichtigste Teil hier, ist die URL unter welcher die Queue IPOS Anfragen von Ihrer Kasse entgegennehmen soll. Diese URL besteht aus drei Elementen

1. dem **Kommunikationsprotokoll**. Sie können zwischen gRPC, REST, SOAP und net.pipe wählen
2. dem **Hostname** (wählen Sie `localhost` falls die Queue auf derselben Maschine läuft wie Ihr Kassasystem)
3. dem für die Queue spezifischen **URL Pfad**

Klicken Sie auf einen der verfügbaren Protokolltypen um automatische eine passende URL dafür zu generieren. Sie können die Standardwerte beibelassen, ausser Sie benötigen hier spezifische Werte.



> **Es ist wichtig, dass Ihre Queue URL nicht den gleichen Netzwerk-Port verwendet wie die URL welche Sie im vorigen Schritt für die SCU verwendet haben.**



![](../images/queue-config.png)

Klicken Sie `Speichern und schliessen` sobald Sie die Konfiguration abgeschlossen haben. Die neue Queue sollte dann auf dem folgenden Schirm unter den Queues Ihres Kunden aufgeführt sein.



## 3 - Erstellung der CashBox

### Schritt 1 - Navigation im Menü

Wählen Sie linkerhand im Menü `Konfiguration` - `CashBox`.

![](../images/menu-cashbox.png)



### Schritt 2 - Hinzufügen

Klicken Sie den `Hinzufügen` Knopf.

![](../images/cashbox-add.png)



### Schritt 3 - Eingabe der Details

Geben Sie einen aussagekräftigen Namen für Ihre neue CashBox im Feld Beschreibung an und wählen Sie das Outlet, in welchem diese CashBox aktiv sein soll aus.

![](../images/main-cashbox.png)

Klicken Sie auf `Speichern` sobald Sie alle Informationen eingegeben haben und die neue CashBox sollte auf dem folgenden Schirm unter den CashBoxen Ihres Kunden aufgeführt sein.



### Schritt 4 - Verbindung der Komponenten

Zurück bei der Liste der CashBox, klicken Sie den `Bearbeiten per Liste` Knopf.

![](../images/edit-cashbox.png)



Auf dem folgenden Schirm müssen Sie die vorher erstellte Queue für diese CashBox auswählen, indem Sie die richtige Zeile anwählen.

![](../images/select-queue.png)

Zusätzlich müssen Sie die **Queue mit der SCU verbinden**, indem Sie das Pop-Out Icon auf der rechten Seite anklicken. Dies öffnet folgenden Schirm, wo Sie die vorher erstellte SCU auswählen und `Speichern und schliessen` anklicken.

Wir haben jetzt die Queue für die CashBox konfiguriert und sie mit der SCU verbunden, müssen jedoch noch die SCU selbst der CashBox hinzufügen, indem wir die richtige Zeile anwählen.

![](../images/select-scu.png)


Scrollen Sie zum unteren Ende der Seite und klicken `Speichern`.





## 4 - Erstellung von zusätzlichen Queue-only CashBoxen

Wiederholen Sie diese Schritte für jeder Ihrer zusätzlichen Kassen, welche Sie mit Ihrer Master CashBox/Kassa verbinden möchten.



### Step 1 - Erstellung der Queue

Erstellen Sie eine weitere Queue, genau so wie unter Punkt 2 erwähnt.



### Step 2 - Erstellung der CashBox und Verbindung mit der Queue

Erstellen Sie eine weitere CashBox, genau so wie unter Punkt 3 erwähnt, fügen dort jedoch ausschliesslich die eben im vorigen Schritt 1 erstellte Queue hinzu und verbinden diese mit der SCU aus der Master CashBox. **Fügen Sie nicht die SCU der neuen CashBox hinzu**.



### Step 3 - Wiederholung für alle weiteren Kassen

Wiederholen Sie die Schritte 1 und 2 für alle weiteren Kassen. **Bitte stellen Sie erneut sicher, dass Sie NICHT die Master SCU denn CashBoxen hinzufügen, sondern ausschliessliche die Queues verbinden.**



## 5 - CashBox Build

Dies ist ein **wichtiger Schritt**, welchen Sie immer durchführen müssen nachdem Sie eine CashBox erstellt, **oder geändert**, haben.

Um ein Build, oder Rebuild, einer CashBox durchzuführen, öffnen Sie die Liste aller Ihrer CashBoxen und klicken den `Rebuild configuration` Knopf bei der entsprechenden CashBox, sofern dieser in Orange markiert ist.

![](../images/build-cashbox.png)

Der Build Prozess ist relativ schnell und innerhalb weniger Sekunden fertig. Sobald der Rebuild Knopf grau ist haben Sie eine aktuelle Konfiguration.



## Zusammenfassung

An diesem Punkt sollten Sie folgende Komponenten haben

* **eine Master CashBox mit einer Queue (und integrierter Datenbank, falls Sie SQLite gewählt haben) und einer SCU**, verbunden mit Ihrer TSE
* **eine Anzahl von CashBoxen, jeweils mit einer Queue**, welche Ihre Master SCU verwenden

Sie können nur den Launcher Ihrer Wahl für Ihre Master CashBox herunterladen und auf Ihrer Master Kasse installiere (wo die TSE verbunden ist). Sobald dieses Setup läuft laden Sie die Launcher Ihrer weiteren CashBoxen herunter und installieren sie auf den weiteren Kassen.
