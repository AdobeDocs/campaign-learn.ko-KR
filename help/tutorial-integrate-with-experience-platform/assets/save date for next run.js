logInfo("=====================")
logInfo("Starting Execution...")

optionName = vars.OPTION_NAME;
logInfo("optionName: " + optionName);
logInfo("NEXT Run Date: " + vars.nextRunTime);
 
//Make sure we have valid values before saving for next run
if (vars.nextRunTime == null || optionName == null){

  logInfo("Unable to find non-null values for optionName/nextRunTime! Throwing Error.")
  throw new Error('Unable to find non-null values for optionName/nextRunTime!  Ending Execution.');

} else {

  // Save the nextRunTime to the database to establish starting point for next run.
  setOption(optionName, vars.nextRunTime);
  logInfo("Date Saved. [" + optionName + "] = [" + vars.lastRunTime + "]")

}

logInfo("Finished Execution.") 
logInfo("===================")