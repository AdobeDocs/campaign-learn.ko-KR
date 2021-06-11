---
title: 유효성 검사 워크플로우 만들기
description: 다양한 승인 유효성 검사 워크플로우를 구성하는 방법을 알아봅니다.
feature: 워크플로우, 승인
kt: 7991
doc-type: feature video
activity: setup
team: TM
role: Business Practitioner
level: Experienced
source-git-commit: f6bb16306773a4b6ff7aa390a514e9b31fe047d6
workflow-type: ht
source-wordcount: '265'
ht-degree: 100%

---


# 유효성 검사 워크플로우 만들기

Adobe Campaign은 마케터가 게재 콘텐츠, 캠페인 타깃, 데이터 추출 및 예산 승인을 검토하고 제공할 수 있는 몇 가지 옵션을 제공합니다.

이 튜토리얼에서는 다양한 승인 유효성 검사 워크플로우를 구성하는 방법을 설명합니다.

## 사전 요구 사항 {#prerequisite}

승인 단계를 활성화하기 전에 마케팅 팀은 개별 검토자를 정의해야 합니다.

* 승인 활동 내의 Adobe Campaign 검토자 역할은 단일 검토자(운영자) 또는 검토자 그룹(운영자 역할)일 수 있습니다.
* 캠페인 개발자가 캠페인 또는 게재에서 검토자를 승인자로 선택할 수 있도록 하려면 관리자가 Adobe Campaign에서 검토자와 검토자 그룹을 구성해야 합니다.

## 캠페인 승인 구성 {#configuring-approvals-for-campaigns}

캠페인 워크플로우의 모든 게재에 대해 동일한 검토자 세트가 있는 경우 캠페인 수준에서 승인 및 검토자를 설정하여 캠페인 승인 기능을 적용합니다. 워크플로우가 실행되면 승인 작업 및 검토자가 워크플로우의 각 게재 활동에 푸시됩니다.

>[!VIDEO](https://video.tv.adobe.com/v/25175?quality=12)

## 게재에 대한 승인 구성 {#configuring-approvals-for-deliveries}

게재 수준에서 승인을 설정할 수도 있습니다. 게재 승인 단계 및 검토자가 캠페인 승인 단계 및 검토자와 다른 경우 게재 설정이 캠페인 설정을 덮어씁니다.

>[!VIDEO](https://video.tv.adobe.com/v/25176?quality=12)

## 승인 활동 구성 {#configuring-an-approval-activity}

게재 또는 캠페인 승인과 달리, 승인 활동을 통해 워크플로우 내에서 승인 프로세스를 만들 수 있습니다. 이 방법으로 게재를 시작하기 전에 타기팅 선택 논리를 승인할 수 있습니다. 또한 필요한 경우 워크플로우 내의 여러 수준에서 승인을 받을 수 있습니다.

>[!VIDEO](https://video.tv.adobe.com/v/25174?quality=12)

자세한 내용은 [승인 설명서](https://experienceleague.adobe.com/docs/campaign-classic/using/automating-with-workflows/flow-control-activities/approval.html?lang=ko)를 참조하십시오.
