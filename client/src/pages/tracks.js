import React from 'react';
// import { useQuery, gql } from '@apollo/client';
import {useQuery, gql} from 'urql'
import TrackCard from '../containers/track-card';
import { Layout, QueryResult } from '../components';

/** TRACKS gql query to retreive all tracks */
const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const [{ fetching, error, data }, reexecute] = useQuery({query: TRACKS});

  return (
    <Layout grid>
      <QueryResult error={error} loading={fetching} data={data}>
        {data?.tracksForHome?.map((track, index) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
