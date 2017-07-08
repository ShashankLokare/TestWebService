$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/cucumber/test1.feature");
formatter.feature({
  "line": 1,
  "name": "create a test feature for testing",
  "description": "",
  "id": "create-a-test-feature-for-testing",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "launch a webservice and test the weather",
  "description": "",
  "id": "create-a-test-feature-for-testing;launch-a-webservice-and-test-the-weather",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "#Given launching a web service for url \"\u003curl\u003e\" and city \"\u003ccity\u003e\""
    },
    {
      "line": 5,
      "value": "#| url\u003dweburl | city\u003d\u003ccityname\u003e |"
    },
    {
      "line": 6,
      "value": "#When receives a status \"\u003cstatus\u003e\""
    },
    {
      "line": 7,
      "value": "#Then verify the weather \"\u003cRow_num\u003e\""
    }
  ],
  "line": 8,
  "name": "connectto webservice and check status \"200\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "create-a-test-feature-for-testing;launch-a-webservice-and-test-the-weather;",
  "rows": [
    {
      "cells": [
        "weburl",
        "cityname",
        "status",
        "Row_num"
      ],
      "line": 11,
      "id": "create-a-test-feature-for-testing;launch-a-webservice-and-test-the-weather;;1"
    },
    {
      "cells": [
        "urlname",
        "pune",
        "200",
        "1"
      ],
      "line": 12,
      "id": "create-a-test-feature-for-testing;launch-a-webservice-and-test-the-weather;;2"
    },
    {
      "cells": [
        "",
        "",
        "",
        "2"
      ],
      "line": 13,
      "id": "create-a-test-feature-for-testing;launch-a-webservice-and-test-the-weather;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "launch a webservice and test the weather",
  "description": "",
  "id": "create-a-test-feature-for-testing;launch-a-webservice-and-test-the-weather;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "#Given launching a web service for url \"\u003curl\u003e\" and city \"\u003ccity\u003e\""
    },
    {
      "line": 5,
      "value": "#| url\u003dweburl | city\u003d\u003ccityname\u003e |"
    },
    {
      "line": 6,
      "value": "#When receives a status \"\u003cstatus\u003e\""
    },
    {
      "line": 7,
      "value": "#Then verify the weather \"\u003cRow_num\u003e\""
    }
  ],
  "line": 8,
  "name": "connectto webservice and check status \"200\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "STep_Definitions.connectto_webservice_and_check_status(String)"
});
formatter.result({
  "duration": 1214146766,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "launch a webservice and test the weather",
  "description": "",
  "id": "create-a-test-feature-for-testing;launch-a-webservice-and-test-the-weather;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "comments": [
    {
      "line": 4,
      "value": "#Given launching a web service for url \"\u003curl\u003e\" and city \"\u003ccity\u003e\""
    },
    {
      "line": 5,
      "value": "#| url\u003dweburl | city\u003d\u003ccityname\u003e |"
    },
    {
      "line": 6,
      "value": "#When receives a status \"\u003cstatus\u003e\""
    },
    {
      "line": 7,
      "value": "#Then verify the weather \"\u003cRow_num\u003e\""
    }
  ],
  "line": 8,
  "name": "connectto webservice and check status \"200\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "STep_Definitions.connectto_webservice_and_check_status(String)"
});
formatter.result({
  "duration": 500246329,
  "status": "passed"
});
});