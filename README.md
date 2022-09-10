Manual steps:

Create the table in the RDS Dashboard using the Secret ARN created by the CDK:

```
CREATE TABLE posts (
 id text UNIQUE,
 title text,
 content text
);
```