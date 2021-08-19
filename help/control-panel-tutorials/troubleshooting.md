---
title: Campaign 컨트롤 패널 문제 해결
description: Campaign 컨트롤 패널 문제 해결 방법 알아보기
feature: Campaign 컨트롤 패널
kt: 8520
doc-type: article
activity: use
team: PM
role: Admin
level: Experienced
source-git-commit: 4fc34f56e13c3df5f1c42c24c87a6c7c5caff04b
workflow-type: tm+mt
source-wordcount: '340'
ht-degree: 19%

---

# [!UICONTROL Campaign 컨트롤 패널]을(를) 쏘는 데 문제가 있습니다.

Campaign 컨트롤 패널 문제 해결 방법을 알아봅니다.

## 로그인 및 홈페이지

### 증상: Experience Cloud에 로그인할 수 없습니다.

**방법:**
사용자는 IMS 조직 ID(xxx)를 찾아야 합니다. 관리자는 관리하려는 각 인스턴스에 대해 제품 프로필 &quot;Campaign-xxx-Admins&quot;에 사용자를 추가해야 합니다. 사용자가 모든 인스턴스의 관리자인 경우 자신을 사용자로 추가해야 합니다.

### 증상: Experience Cloud 홈에서 [!UICONTROL Campaign 컨트롤 패널]에 액세스하는 링크가 사용자에게 표시되지 않습니다

**원인:**
사용자는 제품 프로필  _Campaign-xxx-Administrators/Admin에 사용자로 추가될 때까지 링크를 볼 수 없습니다_.

**방법:**
관리자는 관리하려는 각 인스턴스에 대해 제품 프로필  _Campaign-xxx-_  Admin에 사용자를 추가해야 합니다. 사용자가 모든 인스턴스의 관리자인 경우 자신을 사용자로 추가해야 합니다.

### 증상: 인스턴스가 [!UICONTROL Campaign 컨트롤 패널]에 나열되지 않습니다

**원인:**
누락된 인스턴스에 대해  ** userProduct Profile  _Campaign-xxx-Administrators/_ Admin으로 사용자가 추가되어야 함

**방법:**
관리자는 관리하려는 각 인스턴스에 대해 제품 프로필  _Campaign-xxx-_  Admin에 사용자를 추가해야 합니다. 사용자가 모든 인스턴스의 관리자인 경우 자신을 &quot;사용자&quot;로 추가해야 합니다.

### 유용한 비디오

>[!VIDEO](https://video.tv.adobe.com/v/27183?quality=12)

*IMS 조직 ID 확인(00:26)*

>[!VIDEO](https://video.tv.adobe.com/v/27147?quality=12)

*제품 프로필 관리자에 관리자를 추가하여  [!UICONTROL 컨트롤 패널을 사용할 수 있는 방법] (01:03분)*

### 유용한 설명서

* [Campaign 컨트롤 패널 살펴보기](https://experienceleague.adobe.com/docs/control-panel/using/control-panel-home.html?lang=ko)
* [Campaign 컨트롤 패널 권한  [!UICONTROL 관리]](https://experienceleague.adobe.com/docs/control-panel/using/control-panel-home.html?lang=en)

## SFTP 서버에 연결 설정(클라이언트 또는 API)

SFTP 서버에 연결하려면 다음이 필요합니다.

* [!UICONTROL SFTP ] 서버에 연결할 IP 주소를 나열할 수 있도록 허용합니다
* Adobe Campaign에 등록해야 하는 개인/공개 키 쌍
* SFTP 서버에 직접 연결하려면 SFTP 클라이언트 소프트웨어도 필요합니다

### 유용한 설명서 {#helpful-docs}

* [SFTP 서버에 로그인](https://experienceleague.adobe.com/docs/control-panel/using/control-panel-home.html?lang=en)
