var Page = require('../lib/mechanize/page.js'),
should = require('should');


describe("Mechanize/Form/CheckBox", function () {
  var checkBox, form;

  beforeEach(function () {
    var agent = {
      submit: function (form, button, headers, fn) {
        var page = {};
        fn(null, page);
      }
    },
    url = 'form.html',
    response = {},
    body = fixture('form_elements.html'),
    code = null,
    page = new Page(url, response, body, code, agent);
    
    form = page.form('form1');
    
  });

  context("checked check box", function () {
    beforeEach(function () {
      checkBox = form.checkBox("checkBoxChecked");
    });

    it("should be checked", function () {
      checkBox.checked.should.eql(true);
    });
  });

  context("unchecked check box", function () {
    beforeEach(function () {
      checkBox = form.checkBox("checkBoxUnchecked");
    });

    it("should not be checked", function () {
      checkBox.checked.should.eql(false);
    });
  });
});
