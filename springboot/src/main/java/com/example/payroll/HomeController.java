package com.example.payroll;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

//	@RequestMapping("/**")
//	public String index() {
//		return "index";
//	}
	
	
	
	
	@RequestMapping("/api/test")
	@ResponseBody
	public Employee test(){
		return new Employee("Frodo", "Baggins", "ring bearer");
	}

}
