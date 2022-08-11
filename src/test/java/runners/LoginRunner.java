package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src\\test\\java\\features\\TechFiosLogin.feature",
		glue="steps",
		tags="@LoginFeature",
		monochrome=true,
//not necessary		dryRun=false,
		plugin= {
				"pretty",
				"html:target/cucumber",
				"json:target/cucumber.json"
		}
		)
public class LoginRunner {

}
