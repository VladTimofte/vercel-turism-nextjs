import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(
  `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
  {
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
    },
  }
);

export interface LocatieTuristica {
  sys: { id: string };
  locationName: string;
  description: string;
  image: { url: string; title: string };
  mapIframe: string;
}

export async function getLocatii(): Promise<LocatieTuristica[]> {
  const query = gql`
    query {
      greeceCollection {
        items {
          sys {
            id
          }
          locationName
          description
          image {
            url
            title
          }
          mapIframe
        }
      }
    }
  `;

  const data = await client.request<{ greeceCollection: { items: LocatieTuristica[] } }>(query);
  return data.greeceCollection.items;
}

export async function getLocatieById(id: string): Promise<LocatieTuristica> {
  const query = gql`
    query GetLocatieById($id: String!) {
      greece(id: $id) {
        sys {
          id
        }
        locationName
        description
        image {
          url
          title
        }
        mapIframe
      }
    }
  `;

  const variables = { id };
  const data = await client.request<{ greece: LocatieTuristica }>(query, variables);
  return data.greece;
}
