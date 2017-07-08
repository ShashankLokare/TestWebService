package Runner;

import java.io.File;
import java.io.FileInputStream;
import java.util.Iterator;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.*;
import org.apache.poi.xssf.*;
import org.apache.poi.xssf.usermodel.XSSFCell;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.json.JSONObject;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpUriRequest;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.util.EntityUtils;
import org.apache.poi.hssf.usermodel.HSSFRow;
import org.apache.poi.hssf.usermodel.HSSFSheet;
import org.apache.poi.hssf.usermodel.HSSFWorkbook;
public class STep_Definitions {

	
	@Given("^launching a web service for url \"([^\"]*)\" and city \"([^\"]*)\"$")
	public void launching_a_web_service_for_url_and_city(String arg1, String arg2, DataTable arg3) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
//	    throw new PendingException();
	    Map<String,String> map1 = arg3.asMap(String.class, String.class);
	    System.out.println(map1.toString());
	}

	@When("^receives a status \"([^\"]*)\"$")
	public void receives_a_status(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	 
	}
	@Then("^connectto webservice and check status \"([^\"]*)\"$")
	public void connectto_webservice_and_check_status(String arg1) throws Throwable {
		
		HttpUriRequest httpReq = new HttpGet("http://services.groupkt.com/country/get/all");
		HttpResponse response = HttpClientBuilder.create().build().execute(httpReq);
		
		
		
		System.out.println(response.getStatusLine().getStatusCode());
		System.out.println(response.getEntity().toString());
		JSONObject jo=new JSONObject(EntityUtils.toString(response.getEntity()));
		System.out.println(jo.get("RestResponse").toString());
	    // Write code here that turns the phrase above into concrete actions
//	    throw new PendingException();
	}
	@Then("^verify the weather \"([^\"]*)\"$")
	public void verify_the_weather(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		File fl=new File("src/test/resources/Data/Book1.xlsx");
	    FileInputStream fin=new FileInputStream(fl);
	    XSSFWorkbook wb=new XSSFWorkbook(fin);
	    XSSFSheet Sheet = wb.getSheetAt(0);
	    
	    int irow = Sheet.getLastRowNum();
	    Iterator Rows = Sheet.rowIterator();
	    
	    while(Rows.hasNext()) {
	    	XSSFRow r = (XSSFRow) Rows.next();
	    	Iterator it = r.cellIterator();
		    while(it.hasNext()) {
		    	XSSFCell cell=(XSSFCell) it.next();
		    	System.out.println(cell.toString());
		    	
		    }
		    
	    }
	    
	}
}
