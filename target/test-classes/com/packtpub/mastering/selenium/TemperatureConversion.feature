Feature: Convert between different unit of temperatures

  C/5 = (F - 32)/9

  Scenario: Convert  to Celsius from  Fahrenheit

    Given I want to  convert Fahrenheit to Celsius
    When I input the value of normal body temperature in Fahrenheit
    Then It should be converted to expected Celsius value