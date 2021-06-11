---
title: Android용 푸시 알림 시작 - 소개
description: 이 튜토리얼에서는 Adobe Campaign에서 푸시 알림을 전송하고 Android™ 앱에서 해당 알림을 받는 것과 관련된 단계를 안내합니다.
feature: 푸시
kt: 6438
doc-type: article
activity: setup
team: TM
role: Administrator, Developer
level: Experienced
source-git-commit: 39bed2fe5fbe19101a9684b29d73f61026ad77b2
workflow-type: ht
source-wordcount: '318'
ht-degree: 100%

---

# Android용 푸시 알림 시작 - 소개

Adobe Campaign을 통해 개인화 및 세그먼트화한 [!DNL push] 알림을 [!DNL iOS] 및 [!DNL Android™] 모바일 디바이스로 전송할 수 있습니다. 이 튜토리얼에서는 [!DNL push] Adobe Campaign에서 앱으로 알림[!DNL Android™]을 전송하는 단계를 설명합니다.

## 필수 구성 요소

시작하려면 먼저 다음을 수행해야 합니다.

1) **Android™ 모바일 애플리케이션**

   이 튜토리얼에서는 모바일 애플리케이션을 설정하는 데 필요한 세부 단계를 다루지 않습니다. [!DNL Campaign SDK]와 통합된 **[!DNL Android™]모바일 애플리케이션**&#x200B;이 있어야 합니다.

   제품 설명서에서 필요한 단계에 대한 자세한 설명을 확인할 수 있습니다.

   [모바일 애플리케이션에 Campaign SDK 통합](https://experienceleague.adobe.com/docs/campaign-classic/using/sending-messages/sending-push-notifications/integrating-campaign-sdk-into-the-mobile-application.html?lang=ko)

2) **[!DNL Mobile App channel]패키지 설치**

   [!DNL Mobile App channel] 패키지를 [!DNL Campaign] 인스턴스에 설치해야 합니다. 다음 비디오에서는 [!DNL Mobile App channel]이 인스턴스에 설치되어 있는지 확인하는 방법과 설치되어 있지 않은 경우 설치하는 방법을 설명합니다.

>[!VIDEO](https://video.tv.adobe.com/v/326544?quality=12)

## 튜토리얼 개요

목표는 [!DNL Neotrip] [!DNL Android™] 모바일 앱 가입자에게 개인화된 홍보용 [!DNL push] 알림을 보내는 것입니다. [!DNL Neotrip] 앱은 [!DNL Campaign SDK]로 구성되고 [!DNL Mobile App channel]은 [!DNL Campaign] 인스턴스에서 활성화됩니다.

다음 구성 단계가 필요합니다.

### 1단계: 앱 구독 스키마를 확장하여 [!DNL push] 알림 개인화

[!DNL push] 알림을 개인화하려면 먼저 [앱 구독 스키마를 확장](/help/tutorial-get-started-with-push-notifications-for-android/extend-the-app-subscription-schema.md)해야 합니다. 이 서비스를 사용하면 사용자가 서비스에 가입할 때 앱에서 받은 개인화 값을 저장할 수 있습니다.

### 2단계: Campaign에서 Android™ 서비스를 구성하고 모바일 애플리케이션 만들기

다음으로, [Campaign에서 Android™ 서비스가 구성되어 모바일 애플리케이션이 만들어져야 합니다](/help/tutorial-get-started-with-push-notifications-for-android/configure-an-android-service-in-campaign.md). 이 단계에서 [!DNL Neotrip] 앱은 푸시 알림의 대상으로 정의됩니다.

### 3단계: 푸시 알림 구성 및 전송

이제 푸시 알림이 [구성되고 전송](/help/tutorial-get-started-with-push-notifications-for-android/configure-and-send-push-notifications.md)될 준비가 되었습니다.

## 튜토리얼 시작

1단계: [앱 구독 스키마 확장](/help/tutorial-get-started-with-push-notifications-for-android/extend-the-app-subscription-schema.md)
