# api-text

# Goal

Your goal is to **implement** *and* **deploy** a REST API that [justifies](https://en.wikipedia.org/wiki/Typographic_alignment#Justified) a monospaced text.

# Constraints

- The justified text's lines length is set to 80 characters.
- [input](https://gist.github.com/id13/e2cb05ce6fdc5fe89fea4876206b149b) / [expected output](https://gist.github.com/id13/c9888fe333161e4c1ac1938d6ffd3260) example
- The endpoint must be in the form `/api/justify`.
  It must return a [justified](https://en.wikipedia.org/wiki/Typographic_alignment#Justified) text uppon a POST request with a body of `ContentType` `text/plain`.
- The `ContentType` of the request response must be `text/plain`.
- There must be an authentication mecanism through a unique token. 
  One can add an endpoint like `api/token` that returns a token from a POST request with a json body `{"email": "foo@bar.com"}`.
- There must be a usage limit per token of the `/api/justify` endpoint, set to 80,000 words per day, any further request must
  be rejected with `402 Payment Required`.
- Any use of a high level text align library/api is forbidden, you are expected to implement it.
- It must be deployed to either a public ip address or url.
- There is no time limit.
- Everything not cited above is authorized :).

# Bonus

- Tests
- Readability

# Good luck 🍑 !