define({ "api": [
  {
    "type": "post",
    "url": "/sign-in",
    "title": "Sign In",
    "name": "Sign_In",
    "group": "Auth",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Status500",
            "description": "<p>success: false, err: msg: login is not success</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Success",
            "description": "<p>true, msg: login is success</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/sign-up",
    "title": "Sign Up",
    "name": "Sign_Up",
    "group": "Auth",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Status500",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Redirect",
            "description": "<p>to /get-pdf</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "get",
    "url": "/get-pdf",
    "title": "Get PDF",
    "name": "Get_PDF",
    "group": "PDF_Pages",
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Err",
            "description": "<p>next(err)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "Stream.pipe",
            "description": "<p>res</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/index.js",
    "groupTitle": "PDF_Pages"
  }
] });