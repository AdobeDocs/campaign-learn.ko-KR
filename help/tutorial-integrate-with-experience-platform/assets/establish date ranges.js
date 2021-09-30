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