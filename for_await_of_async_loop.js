// run npm install node-fetch if NojdeJs version < 18
import fetch from "node-fetch";

(async () => {
  let count = 0;
  /* const topics = ["e-commerce", "ecommerce", "react"]; // Replace with your own topics array
  const topicQuery = topics.map((topic, i) => i === 0 ? `topic:${topic}` : topic).join("+"); // topicQuery = "topic:e-commerce+ecommerce+react" */
  for await (const repo of fetchRepos("JavaScript")) {
    /* console.log(`
'count + 1', ${count}, 
'Total count: ', ${repo.total_count}
'repo.full_name: ', ${repo.full_name}, 
`); */

console.log(count + 1, repo.full_name);


    if (++count == 50) {
      // stops at 50. The reason for ++ before count is that we don't want to wait for the next iteration to increment count. We want to increment count before the next iteration. If the ++ was after count then the loop would run 51 times.
      break;
    }
  }
})();

// async generator function that generates a sequence of repos for each repository in the array
async function* fetchRepos(repo) {
  let url = `https://api.github.com/search/repositories?q=${repo}`;
  // while the url is not null, fetch the url and the header are for the headers of the response object returned by the fetch function, its purpose is to tell the server that the request is coming from a custom script, not a browser, so that the server can respond accordingly. "User-Agent": "Custom Script" means that the server is running on a different machine, not a browser.
  while (url) {
    const response = await fetch(url, {
      headers: { "User-Agent": "Custom Script" },
    });

    const body = await response.json(); // (array of repos) parse response body as JSON
    // response.headers.get("Link") means that the server is sending back a header called Link, which contains a link to the next page of results. And .match(regex) means that the server is sending back a header called Match, which contains a regex to match the next page of results. This means that the server headers are sending back a link to the next page of results, and the regex to match the next page of results.
    let nextPage = response.headers.get("Link").match(/<(.*?)>; rel="next"/);
    // nextPage?.[1] means that if nextPage is not null, then get the first element of the array.
    nextPage = nextPage?.[1];
    // url = nextPage means that the url is the next page of results so that the loop can continue.
    url = nextPage;

    for (let repo of body.items) {
      // (array of repos) yield or return each repo one by one, until the array ends
      yield repo;
    }
  }
}
/* output: 

1 airbnb/javascript
2 TheAlgorithms/JavaScript
3 trekhleb/javascript-algorithms
4 GitbookIO/javascript
5 wesbos/JavaScript30
6 yangxi0126/javaScript
7 lydiahallie/javascript-questions
8 ryanmcdermott/clean-code-javascript
9 gustavoguanabara/javascript
10 kubernetes-client/javascript
11 jonasschmedtmann/complete-javascript-course
12 TheOdinProject/javascript-exercises
13 sorrycc/awesome-javascript
14 mrdoob/three.js
15 exercism/javascript
16 pubnub/javascript
17 sudheerj/javascript-interview-questions
18 wchaowu/javascript
19 jquery/jquery
20 Asabeneh/30-Days-Of-JavaScript
21 javascript-tutorial/en.javascript.info
22 ulid/javascript
23 MartinChavez/Javascript
24 mrdavidlaing/javascript-koans
25 shichuan/javascript-patterns
26 niomic-id/javascript
27 javascript-obfuscator/javascript-obfuscator
28 john-smilga/javascript-basic-projects
29 microsoft/TypeScript
30 marcuswestin/WebViewJavascriptBridge
31 wesbos/beginner-javascript
32 getsentry/sentry-javascript
33 jestjs/jest
34 liubin915249126/javascript
35 mgechev/javascript-algorithms
36 bellshade/Javascript
37 yml2213/javascript
38 uprock/javascript
39 jobbole/awesome-javascript-cn
40 goldbergyoni/javascript-testing-best-practices
41 michaelliao/learn-javascript
42 clerkinc/javascript
43 da2k/curso-javascript-ninja
44 workshopper/javascripting
45 mozilla/pdf.js
46 shihyu/JavaScript
47 braziljs/eloquente-javascript
48 zero-to-mastery/javascript20-projects
49 niklasvh/html2canvas
50 juliangarnier/anime

*/
