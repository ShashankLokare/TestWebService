Feature: create a test feature for testing

  Scenario Outline: launch a webservice and test the weather
    #Given launching a web service for url "<url>" and city "<city>"
      #| url=weburl | city=<cityname> |
    #When receives a status "<status>"
    #Then verify the weather "<Row_num>"
    Then connectto webservice and check status "200"

    Examples: 
      | weburl  | cityname | status | Row_num |
      | urlname | pune     |    200 |       1 |
      |         |          |        |       2 |
