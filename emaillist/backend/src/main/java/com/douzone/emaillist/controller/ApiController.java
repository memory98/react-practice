package com.douzone.emaillist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.douzone.emaillist.dto.JsonResult;
import com.douzone.emaillist.repository.EmailRepository;
import com.douzone.emaillist.vo.EmailVo;

@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	EmailRepository emailRepository = new EmailRepository();
	@GetMapping("/list")
	public ResponseEntity<JsonResult> showList() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emailRepository.findAll()));
	}
	
	@GetMapping("/list?keyword={keyword}")
	public ResponseEntity<JsonResult> showList(@PathVariable("keyword") String keyword) {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emailRepository.findAll()));
	}
	
	@PostMapping("/insert")
	public ResponseEntity<JsonResult> addList(@RequestBody EmailVo emailVo) {
		System.out.println(emailVo);
		emailRepository.insert(emailVo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emailVo));
	}

	@DeleteMapping("/delete/{no}")
	public ResponseEntity<JsonResult> deleteEmail(@PathVariable("no") Long no) {
		emailRepository.deleteEmail(no);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}
}
