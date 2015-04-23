Feature: ng-repeat and $index, $event, $log

  Scenario: On application start
    When I browse to the "/"
    Then I should see "Hello!" in "helloButton"
    And I should see "Nice to meet you!" in "niceToMeetYouButton"
    And I should see "Some big text" in "someBigText"
    And I should see "Learn more" in "learnMoreHref"
