//
//  StringTests.swift
//  MyAwesomeProject
//
//  Created by Dominic Opitz on 16.08.17.
//  Copyright © 2017 Facebook. All rights reserved.
//

import XCTest

class StringTests: XCTestCase {
  
  let testString = "test"
  
  func test_string_true() {
    XCTAssertTrue(testString == "test")
  }
  
  func test_string_false() {
    XCTAssertFalse(testString == "iphone")
  }
}
