github-files
------------

A simple jQuery plugin that pulls a file from github.com and returns it.

This uses the public GitHub API (v3) over JSONP to pull a raw file from GitHub.

API:

    $.getGithubFile(user, repo, sha, callback, startLineNum, endLineNum)

Examples:

    // fetch this README.md file and return all of the lines
    $.getGithubFile("jamesward", "github-files", "", function(contents) {
        console.log(contents)
    });
    
    // fetch this README.md file and return all of the lines beginning with line 6
    $.getGithubFile("jamesward", "github-files", "", function(contents) {
        console.log(contents)
    }, 6);
    
    // fetch this README.md file and return lines 6 - 15
    $.getGithubFile("jamesward", "github-files", "", function(contents) {
        console.log(contents)
    }, 6, 15);
