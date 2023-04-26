---
title: 내보내기 워크플로우 만들기(1부) - 수신자 목록에 대해 마지막으로 수정한 날짜를 찾습니다
description: 내보내기 워크플로우 만들기 자습서의 첫 번째 부분에서 Experience Platform 세그먼트에서 만든 수신자 목록에 대해 마지막으로 수정한 날짜를 찾는 워크플로우를 만드는 방법을 알아봅니다.
feature: Data Import/Export, Workflows
kt: 8162
thumbnail: 336387.jpg
doc-type: feature video
activity: setup
team: TM
role: Admin
level: Beginner, Experienced
exl-id: 6fd70eea-3be7-4589-a608-05b0a8de93a6
source-git-commit: b1b8d8a99a551239c445fb588cbd126b66a53c9b
workflow-type: ht
source-wordcount: '120'
ht-degree: 100%

---

# 내보내기 워크플로우 만들기(1부) - 수신자 목록에 대해 마지막으로 수정한 날짜를 찾습니다

내보내기 워크플로우 만들기 자습서의 첫 번째 부분에서 Experience Platform 세그먼트에서 만든 수신자 목록에 대해 마지막으로 수정한 날짜를 찾는 워크플로우를 만드는 방법을 알아봅니다.

>[!VIDEO](https://video.tv.adobe.com/v/336387?quality=12&learn=on)

## 자산

날짜 범위를 설정하는 JavaScript:

```java
 var DEFAULT_LOOKBACK_DAYS = 90;
 vars.OPTION_NAME = "BroadLog_CaptureTime";

 logInfo("=====================");
 logInfo("Starting Execution...");

 // Establish the last and next RunTimes
 var lastRunTime = getOption(vars.OPTION_NAME);
 var nextRunTime = getCurrentDate();

 //To reset and run through DEFAULT_LOOKBACK, uncomment the following line.
 //lastRunTime = null;

 logInfo("NEXT Run Date Set: [" + nextRunTime + "]");
 logInfo("LAST Run Date Retrieved (" + lastRunTime + ")");

 //Check for null so we can default the lastRunTime using the DEFAULT_LOOKBACK 
 if (lastRunTime == null || lastRunTime == "null" || lastRunTime == "") {

   logInfo("Empty Date Retrieved, setting to default lookback (-" + DEFAULT_LOOKBACK_DAYS + " days)");
   lastRunTime = new Date();
   lastRunTime.setDate(nextRunTime.getDate() - DEFAULT_LOOKBACK_DAYS);
   logInfo("LAST Run Date Set: [" + lastRunTime + "]");

 } 

 //Persist values through execution of this instance of the workflow.
 vars.lastRunTime = lastRunTime;
 vars.nextRunTime = nextRunTime;

 logInfo("Finished Execution.");
 logInfo("===================");
```

## 다음 비디오

[내보내기 워크플로우 생성(2부) - 외부 계정에 데이터 추출, 포맷, 저장](extract-format-save-data-to-external-account.md)
