import { Amplify } from "aws-amplify";
import { AppsyncCdkRdsStack } from "../cdk-exports.json";
import { API } from "aws-amplify";

Amplify.configure({
  aws_appsync_region: AppsyncCdkRdsStack.ProjectRegion,
  aws_appsync_graphqlEndpoint: AppsyncCdkRdsStack.AppSyncAPIURL,
  aws_appsync_apiKey: AppsyncCdkRdsStack.AppSyncAPIKey,
  aws_appsync_authenticationType: "API_KEY", //Primary AWS AppSync authentication type
});

const query = `
    query listPosts {
      listPosts {
        id title content
      }
    }
  `;

async function fetchPosts() {
  const data = await API.graphql({ query });
  console.log("data from GraphQL:", data);
}

const mutation = `
  mutation createPost($post: CreatePostInput!) {
    createPost(post: $post) {
      id title content
    }
  }
`;

async function createPost() {
  await API.graphql({
    query: mutation,
    variables: {
      post: { id: "001", title: "My first post", content: "Hello World" },
    },
  });
  console.log("post successfully created!");
}

(async () => {
  // Create a post
  await createPost();

  // List posts
  await fetchPosts();
})();
