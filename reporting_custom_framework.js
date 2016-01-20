window.global_test_results = {
  "passed": 1,
  "failed": 3,
  "total": 4,
  "duration": 4321,
  "tests": [
    {
      "name": "foo test",
      "result": false,
      "message": "sumthin bad",
      "duration": 4000
    },
    {
      "name": "bar test",
      "result": false,
      "message": "failure",
      "duration": 300
    },
    {
      "name": "baz test",
      "result": true,
      "message": "passed",
      "duration": 20
    },
    {
      "name": "qux test",
      "result": false,
      "message": "test bad",
      "duration": 1
    }
  ]
}