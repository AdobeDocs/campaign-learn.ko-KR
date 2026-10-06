---
title: 기술 튜토리얼 - Adobe Campaign용 SMS 설정
description: SMTP 공급자에 대한 SMS 계정을 구성하는 방법 및 구성 분석 및 문제 해결하는 방법을 알아봅니다.
feature: SMS
role: Admin, Developer
badgeV7V8: label="V7, V8에 적용" type="Positive"
thumbnail: 340957.jpg
exl-id: c1eaabbf-c349-431d-9bbb-6ae987926d99
product_v2:
  - id: dfc56824-e8b9-499e-85d4-21aedb507314
    internal-label: Campaign
  - id: d0e9f0b2-1f2b-4134-9844-49cd4e950f27
    internal-label: Campaign v8
feature_v2:
  - id: a4671286-a59f-47e3-b97b-90627a1977d5
    internal-label: Communication channels
subfeature_v2:
  - id: b1bd1421-1927-4c59-9bc6-ce292360e43b
    internal-label: SMS Messaging
role_v2:
  - id: c66ffd68-0f65-42bb-aa23-b4020f12e0bd
    internal-label: Admin
  - id: ff6a42d2-313e-452e-93a6-792e4fad9ff8
    internal-label: Developer
source-git-commit: 369f9c3691b6326e521ebc9139aac1d2ee7c3ce2
workflow-type: tm+mt
source-wordcount: '224'
ht-degree: 100%
---
# 기술 튜토리얼 - Adobe Campaign용 SMS 설정

이 섹션의 튜토리얼은 Adobe Campaign용 SMS 채널을 설정하는 관리자를 위해 설계되었습니다.

다음 주제를 다룹니다.

* **[SMS 소개](/help/tutorial-sms/introduction-to-sms.md)**:
  *SMS 작동 방식과 Adobe Campaign에서 SMS 보내는 방법을 알아봅니다*

* **[표준 SMPP 공급자에 대한 SMS 계정 설정](/help/tutorial-sms/set-up-account-for-standard-smpp-provider.md)**
  *SMS 커넥터를 SMPP 공급자에게 적용하는 방법을 알아봅니다. SMS 설정을 정교하게 조정하여 연결 한도를 처리합니다.  최대 처리량, 전송 창, TLS 암호화를 설정하는 방법을 알아봅니다.*

* **[SMPP 공급자에 SMS 커넥터 맞추기](/help/tutorial-sms/adapt-sms-connector-to-smpp-provider.md)**
  *SMS 설정을 정교하게 조정하여 연결 한도를 처리하는 방법을 알아봅니다. 최대 처리량, 전송 창, TLS 암호화를 설정하는 방법을 알아봅니다.*

* **[SMPP 프로토콜 심층 분석 및 문제 해결](/help/tutorial-sms/smpp-deep-dive-and-troubleshooting.md)**
  *SMPP 연결 설정 방법과 SMPP가 PDU를 통해 데이터를 교환하는 방법을 알아봅니다. 문제 해결 방법을 이해합니다.*

>[!NOTE]
>
>이 튜토리얼은 Adobe Campaign V7 및 Campaign V8에 적용됩니다. 추가 리소스는 제품 설명서에서 찾을 수 있습니다. [SMS 커넥터 프로토콜 및 설정](https://experienceleague.adobe.com/ko/docs/campaign-classic/using/sending-messages/sending-messages-on-mobiles/sms-set-up/sms-protocol).
