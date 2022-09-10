AWS CDK with AppSync and RDS Aurora w/PostgreSQL

<img width="793" alt="image" src="https://user-images.githubusercontent.com/6836149/189467208-ee98fe55-c528-423b-83da-f5945fd075f3.png">

Run CDK deploy before anything

https://aws.amazon.com/blogs/mobile/building-real-time-serverless-apis-with-postgres-cdk-typescript-and-aws-appsync/

Note: Manual step:

Create the table in the RDS Dashboard using the Secret ARN created by the CDK:

```
CREATE TABLE posts (
 id text UNIQUE,
 title text,
 content text
);
```
