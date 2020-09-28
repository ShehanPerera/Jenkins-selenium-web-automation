package runner;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java/Features",
        glue= {"seleniumgluecode"},
        plugin = { "pretty", "html:/home/shehan/IdeaProjects/mSpaceSeleniumCucumber/reports"},
        monochrome = true
)
public class runner {
}