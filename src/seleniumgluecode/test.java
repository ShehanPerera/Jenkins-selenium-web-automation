package seleniumgluecode;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

public class test {

    WebDriver driver;

    @Given("^user go to mspace login page$")
    public void user_go_to_mspace_login_page() throws Throwable
    {
        System.setProperty("webdriver.chrome.driver", "/home/shehan/IdeaProjects/seleniumWebTest/lib/chromedriver");
        ChromeOptions options = new ChromeOptions();
        options.addArguments("headless");
        driver= new ChromeDriver(options);
        driver.get("https://da-mspace.hsenidmobile.com");
        driver.manage().window().maximize();
    }

    @When("^Enter the Username \"(.*)\" and Password \"(.*)\"$")
    public void enter_the_Username_and_Password2(String username, String password) throws Throwable
    {
        driver.findElement(By.id("username")).sendKeys(username);
        Thread.sleep(1000);
        driver.findElement(By.id("password")).sendKeys(password);
        Thread.sleep(1000);
    }

    @Then("^click on login button$")
    public void click_on_login_button() throws Throwable
    {
        driver.findElement(By.cssSelector("#fm1 > div > div > button")).click();
        Thread.sleep(5000);
    }

    @Then("^username need to be as \"(.*)\"$")
    public void username_need_to_be_as(String username) throws Throwable
    {
        String title = driver.findElement(By.cssSelector("#common-header > div > ul.main-header__right > li:nth-child(3) > a > span")).getText();
        Assert.assertEquals(username,title);
    }

    @Then("^close browser$")
    public void close_browser(){
        driver.close();
    }
}
