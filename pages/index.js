import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
// import Document, { Html, Head, Main, NextScript } from 'next/document'
import First from '../components/First'
import CustomCursor from '../components/Cursor'
import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

export default function Home({ profile }) {
  console.log(profile);
  return (
    <div>
      <Head>
        <title>Hamza ZEGHARI - LINKS</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <CustomCursor />
        <First profile={profile}/>
      </div>

    </div>
  )
}

export async function getStaticProps() {

  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    // // get the authentication token from local storage if it exists
    // const token = localStorage.getItem('token');
    // // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
            {   
              user(login: "hzeghari") {
                bio
                avatarUrl
                login
                name
                location
              }
            }`
  })

  const { user } = data;
  const profile = user;

  console.log(profile);

  return {
    props: {
      profile
    }
  }
}
