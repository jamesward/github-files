describe("github-files", function() {
  
  it("should get the full source of the README.md file", function() {
    var callback = jasmine.createSpy()
    
    $.getGithubFile("jamesward", "github-files", "2e7bf4aa35758d7a9cf87549d6299e924737ff05", callback)

    waitsFor(function() {
      return callback.callCount > 0
    })

    runs(function() {
      expect(callback).toHaveBeenCalled()
      var contents = callback.mostRecentCall.args[0]
      expect(contents).toContain("github-files")
      expect(contents.length).toEqual(830)
    })

  })
  
  it("should get the source of the README.md file starting at line 6", function() {

    var callback = jasmine.createSpy()

    $.getGithubFile("jamesward", "github-files", "2e7bf4aa35758d7a9cf87549d6299e924737ff05", callback, 6)

    waitsFor(function() {
      return callback.callCount > 0
    })

    runs(function() {
      expect(callback).toHaveBeenCalled()
      var contents = callback.mostRecentCall.args[0]
      expect(contents).not.toContain("A simple jQuery plugin")
      expect(contents.length).toEqual(729)
    })

  })

  it("should get the source of the README.md file from line 5 to line 10", function() {

    var callback = jasmine.createSpy()

    $.getGithubFile("jamesward", "github-files", "2e7bf4aa35758d7a9cf87549d6299e924737ff05", callback, 5, 10)

    waitsFor(function() {
      return callback.callCount > 0
    })

    runs(function() {
      expect(callback).toHaveBeenCalled()
      var contents = callback.mostRecentCall.args[0]
      expect(contents).not.toContain("A simple jQuery plugin")
      expect(contents.split("\n").length).toEqual(6)
      expect(contents.length).toEqual(160)
    })

  })

})