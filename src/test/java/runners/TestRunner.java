package runners;

import com.cucumber.listener.Reporter;
import org.junit.AfterClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

import java.io.File;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/resources/features",
        glue= {"steps"},
        plugin = { "pretty","com.cucumber.listener.ExtentCucumberFormatter:/home/shehan/IdeaProjects/mSpaceSeleniumCucumber" +
                "/extentReports/extentReports.html","html:/home/shehan/IdeaProjects/mSpaceSeleniumCucumber" +
                "/htmlReports/"}
)
public class TestRunner {
    @AfterClass
    public static void writeExtentReport() {
        Reporter.loadXMLConfig(new File("config/report.xml"));

    }
}

