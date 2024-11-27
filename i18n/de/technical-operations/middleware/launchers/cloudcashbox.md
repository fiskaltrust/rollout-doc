---
slug: /posdealers/technical-operations/middleware/launchers/cloudcashbox
title: CloudCashbox
---

# CloudCashbox

:::info Zusammenfassung

Nach dem Lesen dieses Abschnitts können Sie erklären, was die CloudCashbox-Lösung ist und wie sie verwendet wird, um die Middleware zu hosten.

:::

## Einführung
Die CloudCashbox ist eine vollständig gehostete SaaS-Version der fiskaltrust-Middleware, die eine zentrale und zuverlässige Fiskalisierungslösung bietet.
Gehostet auf Microsoft Azure im jeweiligen Marktland vereinfacht sie die Komplexität der fiskalischen Compliance, da keine lokale Softwarekonfiguration und -installation erforderlich ist.
Benutzer können einfach über ein Zugriffstoken und eine URL auf die Middleware zugreifen, ohne SCUs verwalten zu müssen.

### Zu den Hauptmerkmalen gehören:

- **Unterstützung für PosAPI und klassische Middleware-API:** Gewährleistet Kompatibilität mit verschiedenen Kassensystemen.
- **Zentrales Management:** Fiskaltrust verwaltet die gesamte Einrichtung und bietet so mehr Kontrolle und Flexibilität.
- **Einfache Einführung:** Das Produkt kann über das Portal ausgerollt werden, und die Migration von bestehenden Cashboxes wird durch einen speziellen Prozess erleichtert.

### Bestellung und Erstellung neuer CloudCashboxes

Bevor Sie eine _CloudCashbox_ erstellen, müssen Sie ein Produkt bestellen, das eine _CloudCashbox_ enthält.
Die **Cashbox** und die **Queue** werden dann automatisch erstellt – ein weiterer Unterschied zur klassischen Middleware.

Um ein _CloudCashbox_-Produkt zu bestellen, gehen Sie zum fiskaltrust.Portal und melden Sie sich an.
Nachdem Sie eingeloggt sind, klicken Sie auf den Reiter `Rollout-Management` und dann auf `Produkte einführen`.

![20241016-1-rollout-cloud-cashbox](https://github.com/user-attachments/assets/9ae51df5-bfc5-4fca-a93f-5d12d6f7c65e)

Wählen Sie im nächsten Bildschirm das `Business Rollout`.

![20241016-2-rollout-cloud-cashbox](https://github.com/user-attachments/assets/3a0dc353-5bb8-42ce-bc23-917d0bd6fde8)

Nun können Sie nach _CloudCashbox_-Produkten suchen.
In diesem Fall haben wir den Rollout mit einem fiskaltrust.Sorglos-Paket durchgeführt.
Es ist auch möglich, ein fiskaltrust.Sorglos-Paket mit bestehenden Berechtigungen auszurollen, falls Sie welche haben, oder die _CloudCashbox_ als eigenständiges Produkt einzuführen.

![20241016-3-rollout-cloud-cashbox](https://github.com/user-attachments/assets/309ba6b0-26f0-4215-939c-70ae2c29b80a)

Nachdem Sie Ihre Wahl getroffen haben, können Sie den Operator auswählen, für den Sie das Rollout durchführen möchten.
Sie können mehrere Operatoren gleichzeitig auswählen, falls erforderlich.

![20241016-4-rollout-cloud-cashbox](https://github.com/user-attachments/assets/c563f3c3-7e42-4f9b-8ff3-8a70369fab1d)

Nach der Auswahl der Operatoren müssen Sie die Outlets auswählen, die ausgerollt werden sollen. Auch hier können Sie mehrere gleichzeitig auswählen.

![20241016-5-rollout-cloud-cashbox](https://github.com/user-attachments/assets/bb1a68b0-711d-459c-a3d5-11d5d4aabdcd)

In diesem Schritt können Sie Ihre Bestellung überprüfen. Wenn alles Ihren Erwartungen entspricht, klicken Sie auf `Angebot erstellen`.

![20241016-6-rollout-cloud-cashbox](https://github.com/user-attachments/assets/dc6cc622-cb45-48af-b7a0-81e2b7d7e943)

Nach einer kurzen Ladezeit müssen Sie Ihre ausgewählten Produkte durch Klicken auf den Button `In den Warenkorb` legen hinzufügen.

![20241016-7-rollout-cloud-cashbox](https://github.com/user-attachments/assets/c39c51db-bdc1-4fa1-9900-a86403a35ac8)

Dies führt Sie zum Warenkorb, wo Sie den Zahlungsprozess abschließen können.

![20241016-8-rollout-cloud-cashbox](https://github.com/user-attachments/assets/8fb4a6ee-cead-45cc-ab53-750026896978)

Hier können Sie Ihre Bestellung bestätigen. Danach wird Ihre Bestellung generiert, Ihre Rechnung erstellt, und es wird im Hintergrund mit der Erstellung Ihrer _CloudCashbox_ begonnen, die die neue **queue** enthält.

![20241016-9-rollout-cloud-cashbox](https://github.com/user-attachments/assets/ca7193b3-5dbe-422d-b6dd-3d1050c4b910)

Nach einigen Minuten sehen Sie die erstellte **Cashbox**, die über die url und das access token verwendet werden kann.

![20241016-10-cloud-cashbox](https://github.com/user-attachments/assets/9e53c8bb-b243-45c0-a0a4-501afa1ff255)

Auch unter `Konfiguration > Queue` sehen Sie die erstellte Queue. Sie sind jetzt bereit!

![20241016-11-cloud-cashbox](https://github.com/user-attachments/assets/ae2420a1-716a-4182-bcf9-ce9d6162b05b)



### Migration zur _CloudCashbox_

:::info
Die Migrationsfunktion ist derzeit nur für den deutschen Markt verfügbar.
:::

Wenn Sie bereits lokale **Cashboxes** oder solche mit einer TSE in der Cloud haben, können Sie diese in _CloudCashboxes_ migrieren, indem Sie den folgenden Prozess befolgen.

**1. Migration anfordern**

Zuerst müssen Sie zu `Rollout-Management` gehen und dort `Produkt austauschen` auswählen.

![20241017-1-migration-cloud-cashbox](https://github.com/user-attachments/assets/c2430c58-d180-491e-9e86-f2425ac7cfbe)

Wählen Sie im nächsten Bildschirm `Wechsel zur CloudCashbox`.

![20241017-2-migration-cloud-cashbox](https://github.com/user-attachments/assets/4acb281f-8299-41da-bc74-0c25306c94b3)

Danach müssen Sie, wie gewohnt, den PosOperator auswählen, für den Sie die Migration durchführen möchten.

![20241017-3-migration-cloud-cashbox](https://github.com/user-attachments/assets/7ea981cc-d3aa-4327-922e-cab26bd1b8e6)

Anschließend wählen Sie das Outlet und die **queues**, die Sie migrieren möchten.

![20241017-4-migration-cloud-cashbox](https://github.com/user-attachments/assets/0c70e6ee-2738-4f7a-ba08-00131642138c)

Im nächsten Schritt überprüfen Sie Ihre Auswahl. Wenn alles korrekt ist, klicken Sie auf `Migration anfordern`.
Bestätigen Sie Ihre Anfrage im erscheinenden Pop-up-Fenster.

![20241017-5-migration-cloud-cashbox](https://github.com/user-attachments/assets/439ea46f-eee1-43e5-b6a7-9b26fbb73126)

Ihre Anfrage wird nun gesendet und kann bis zu fünf Tage dauern, um validiert zu werden.

![20241017-6-migration-cloud-cashbox](https://github.com/user-attachments/assets/e7b840ee-f63c-48be-9390-015cd3e6f810)

**2. Auf Genehmigung warten**

Sie können den Status Ihrer Anfrage unter `Requests & Updates` überprüfen. Dort sehen Sie die Entwicklung Ihrer Anfrage. Die Anfrage muss von fiskaltrust genehmigt werden, bevor die Migration durchgeführt werden kann.

![20241017-7-migration-cloud-cashbox](https://github.com/user-attachments/assets/6eac02f8-d6c6-47f6-acca-4641123eec65)

Nach der Genehmigung können Sie fortfahren.

![20241017-8-migration-cloud-cashbox](https://github.com/user-attachments/assets/5aa282bb-7a32-4cd4-9d48-fe71db312ef2)


**3. Start-Migrationsbeleg senden**

In der Anfrage sehen Sie eine Liste der **queues** und deren Migrationsstatus.

![20241017-9-migration-cloud-cashbox](https://github.com/user-attachments/assets/41b998d9-6f2b-4272-8496-8a765e6bd7c3)

Sie können die Migration für alle **queues** auf einmal oder in kleineren Gruppen durchführen. Zu Beginn sind alle **queues** im Status _nicht bereit_. Sie müssen für sie einen _Start-Migrationsbeleg_ senden, damit sie bereit werden. Sobald der _Start-Migrationsbeleg_ gesendet wurde und die Daten hochgeladen sind (lassen Sie die **queue** mindestens 5 Minuten nach dem Senden laufen, um sicherzustellen, dass alle Daten hochgeladen werden), wechselt die **queue** in die Spalte `Bereit zur Migration`.

![20241017-10-migration-cloud-cashbox](https://github.com/user-attachments/assets/9d4a017a-78d0-42c2-9b8c-b1c63ed09f40)


:::info

Nach dem Senden des Start-Migrationsbelegs hört die **queue** auf, lokal zu signieren.

:::


**4.Migration durchführen**

Um die technische Migration durchzuführen, wählen Sie die **queues**, die bereit zur Migration sind, und migrieren Sie sie.
Dies dauert nur wenige Minuten.

![20241017-11-migration-cloud-cashbox](https://github.com/user-attachments/assets/d2d68b1a-8670-4188-b414-4a8122c81f41)


![20241017-12-migration-cloud-cashbox](https://github.com/user-attachments/assets/c34e40d8-176e-411f-8f44-8e850c3cf087)

**5. Kassensystem aktualisieren**

Aktualisieren Sie die **Queue URL**, die das Kassensystem verwendet, auf `https://cloudcashbox.fiskaltrust.de`.

Sobald der Schritt **Migration durchführen** für die **queue** abgeschlossen ist, ist die _CloudCashbox_ einsatzbereit. Sie können nun die lokale **CashBox** deinstallieren.

Danach können Sie zur Anfrage zurückkehren, um die Migration für die verbleibenden **queues** durchzuführen.
After this, you can then come back to the request to perform the migration for the remaining queues.

![20241017-13-migration-cloud-cashbox](https://github.com/user-attachments/assets/05e676ac-f253-4d7d-87d7-453752a8b875)

:::info

Wenn Sie "Bring Your Own Datacenter" (BYODC) nutzen, ist es möglicherweise nicht möglich, die URL für eine einzelne **Cashbox** zu ändern.
In diesem Fall wird BYODC automatisch zur _CloudCashbox_ umgeleitet (ab [v1.3.65](https://docs.fiskaltrust.cloud/changelog/middleware/1.3.65#-feature-byodc-now-automatically-acts-as-a-proxy-when-mistakenly-used-with-a-cloudcashbox-queue)), wenn eine migrierte **queue** verwendet wird.

Das bedeutet, dass BYODC die Anfrage nicht selbst verarbeitet, sondern sie bereits in der _CloudCashbox_ verarbeitet wurde und die Antwort weitergeleitet wird.

Dies ermöglicht es Ihnen, **queues** in Ihrem eigenen Tempo zu migrieren und die URL Ihrer BYODC-Installation beizubehalten, bis alle **queues** migriert sind.
Sobald die Migration abgeschlossen ist, können Sie die URL Ihrer BYODC-Installation auf die _CloudCashbox_ ändern und Ihre BYODC-Installation abschalten.

:::
