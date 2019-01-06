$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri('com\packtpub\mastering\selenium\Conversion.feature');
formatter.feature({
  "line": 1,
  "name": "Convert between different unit of temperatures",
  "description": "\r\nFormula: C/5 \u003d (F - 32)/9\r\nC \u003d 5(F - 32)/9 \u003d 5(98.6 - 32 \u003d)/9  \u003d 37",
  "id": "convert-between-different-unit-of-temperatures",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Convert  to Celsius from  Fahrenheit",
  "description": "",
  "id": "convert-between-different-unit-of-temperatures;convert--to-celsius-from--fahrenheit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I want to  convert 98.6 degree Fahrenheit to Celsius",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I input the value of Fahrenheit as 98.6 in text field",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "It should be converted to Celsius as 37 degree",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri('com\packtpub\mastering\selenium\TemperatureConversion.feature');
formatter.feature({
  "line": 1,
  "name": "Convert between different unit of temperatures",
  "description": "\r\nC/5 \u003d (F - 32)/9",
  "id": "convert-between-different-unit-of-temperatures",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Convert  to Celsius from  Fahrenheit",
  "description": "",
  "id": "convert-between-different-unit-of-temperatures;convert--to-celsius-from--fahrenheit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I want to  convert Fahrenheit to Celsius",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I input the value of normal body temperature in Fahrenheit",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "It should be converted to expected Celsius value",
  "keyword": "Then "
});
formatter.match({
  "location": "TemperatureConversionStepDefs.I_want_to_convert_Fahrenheit_to_Celsius()"
});
formatter.result({
  "duration": 303674035,
  "status": "passed"
});
formatter.match({
  "location": "TemperatureConversionStepDefs.I_input_the_value_of_normal_body_temperature_in_Fahrenheit()"
});
formatter.result({
  "duration": 7732018724,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Error communicating with the remote browser. It may have died.\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8e7ca8e37638dc3091b2440b90a1d8686f\u0027, time: \u00272015-02-27 09:10:26\u0027\nSystem info: host: \u0027Ripon-PC\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_05\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:593)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.packtpub.mastering.selenium.steps.TemperatureConversionStepDefs.I_input_the_value_of_normal_body_temperature_in_Fahrenheit(TemperatureConversionStepDefs.java:54)\r\n\tat ✽.When I input the value of normal body temperature in Fahrenheit(com\\packtpub\\mastering\\selenium\\TemperatureConversion.feature:8)\r\nCaused by: org.apache.http.conn.HttpHostConnectException: Connect to 127.0.0.1:7056 [/127.0.0.1] failed: Connection refused: connect\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:142)\r\n\tat org.apache.http.impl.conn.PoolingHttpClientConnectionManager.connect(PoolingHttpClientConnectionManager.java:319)\r\n\tat org.apache.http.impl.execchain.MainClientExec.establishRoute(MainClientExec.java:363)\r\n\tat org.apache.http.impl.execchain.MainClientExec.execute(MainClientExec.java:219)\r\n\tat org.apache.http.impl.execchain.ProtocolExec.execute(ProtocolExec.java:195)\r\n\tat org.apache.http.impl.execchain.RetryExec.execute(RetryExec.java:86)\r\n\tat org.apache.http.impl.execchain.RedirectExec.execute(RedirectExec.java:108)\r\n\tat org.apache.http.impl.client.InternalHttpClient.doExecute(InternalHttpClient.java:184)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:72)\r\n\tat org.apache.http.impl.client.CloseableHttpClient.execute(CloseableHttpClient.java:57)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.fallBackExecute(ApacheHttpClient.java:144)\r\n\tat org.openqa.selenium.remote.internal.ApacheHttpClient.execute(ApacheHttpClient.java:72)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:133)\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.execute(NewProfileExtensionConnection.java:165)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver$LazyCommandExecutor.execute(FirefoxDriver.java:362)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:572)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:449)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:357)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\r\n\tat com.packtpub.mastering.selenium.steps.TemperatureConversionStepDefs.I_input_the_value_of_normal_body_temperature_in_Fahrenheit(TemperatureConversionStepDefs.java:54)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:483)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:12)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:36)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:35)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:38)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:267)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:36)\r\n\tat cucumber.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:76)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:65)\r\n\tat cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:20)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.junit.FeatureRunner.run(FeatureRunner.java:72)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:76)\r\n\tat cucumber.junit.Cucumber.runChild(Cucumber.java:36)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.junit.Cucumber.run(Cucumber.java:81)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:74)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:211)\r\n\tat com.intellij.rt.execution.junit.JUnitStarter.main(JUnitStarter.java:67)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:483)\r\n\tat com.intellij.rt.execution.application.AppMain.main(AppMain.java:134)\r\nCaused by: java.net.ConnectException: Connection refused: connect\r\n\tat java.net.DualStackPlainSocketImpl.waitForConnect(Native Method)\r\n\tat java.net.DualStackPlainSocketImpl.socketConnect(DualStackPlainSocketImpl.java:85)\r\n\tat java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:345)\r\n\tat java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:206)\r\n\tat java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:188)\r\n\tat java.net.PlainSocketImpl.connect(PlainSocketImpl.java:172)\r\n\tat java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)\r\n\tat java.net.Socket.connect(Socket.java:589)\r\n\tat org.apache.http.conn.socket.PlainConnectionSocketFactory.connectSocket(PlainConnectionSocketFactory.java:72)\r\n\tat org.apache.http.impl.conn.HttpClientConnectionOperator.connect(HttpClientConnectionOperator.java:125)\r\n\t... 61 more\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TemperatureConversionStepDefs.It_should_be_converted_to_expected_Celsius_value()"
});
formatter.result({
  "status": "skipped"
});
});