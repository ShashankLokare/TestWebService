package Runner;
import cucumber.api.testng.AbstractTestNGCucumberTests;
import cucumber.api.CucumberOptions;

@CucumberOptions(
        plugin = {"html:target/cucumber-html-report",
                  "json:target/cucumber.json",
                  "pretty:target/cucumber-pretty.txt",
                  "usage:target/cucumber-usage.json"
                 },
        features = {"src/test/cucumber/test1.feature" }
//        glue = {"src/test/java/Runner/STep_Definitions" },
//        tags = { }
)

public class TestRunner extends AbstractTestNGCucumberTests{
    
}