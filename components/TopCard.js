import React from 'react'

// import {
//     ApolloClient,
//     InMemoryCache,
//     gql,
//     createHttpLink
//   } from "@apollo/client";
// import { setContext } from '@apollo/client/link/context';

export default function TopCard(props) {
    // console.log(profile);
    const ShowProfile = props.EntryProfile;
    return (
        
        
        
        <div className="card text-center shadow ">



            <div className="w-full flex flex-col items-center pt-10">
                <div className="avatar">
                    <div className="mb-8 w-24 h-24 mask mask-squircle ">
                        <img role="img" src={ShowProfile.avatarUrl} alt="avatar"/>
                    </div>
                </div>
                {/* <div className="avatar online w-24 h-24 mb-3 p-0.5 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <img role="img" className="w-full h-full overflow-hidden object-cover rounded-full" src={ShowProfile.avatarUrl} alt="avatar" />
                </div> */}

                <a tabIndex="0" className="focus:outline-none focus:opacity-75 hover:opacity-75 text-text-w dark:text-gray-100 cursor-pointer focus:underline">
                    <h2 className=" text-2xl tracking-normal font-extrabold mb-1">{ShowProfile.name}</h2>
                </a>

                <a tabIndex="0" className="cursor-pointer hover:text-indigo-700 focus:underline focus:outline-none focus:text-indigo-700 flex text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                    <span className="cursor-pointer mr-1 text-gray-600 dark:text-gray-100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z"></path>
                            <circle cx="12" cy="11" r="3"></circle>
                            <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"></path>
                        </svg>
                    </span>
                    {ShowProfile.location}, Morocco
                </a>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">{ShowProfile.bio}</p>

            </div>

        </div>


    )
}

// export async function getStaticProps() {

//     const httpLink = createHttpLink({
//         uri: 'https://api.github.com/graphql',
//     });

//     const authLink = setContext((_, { headers }) => {
//         // // get the authentication token from local storage if it exists
//         // const token = localStorage.getItem('token');
//         // // return the headers to the context so httpLink can read them
//         return {
//             headers: {
//                 ...headers,
//                 authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
//             }
//         }
//     });

//     const client = new ApolloClient({
//         link: authLink.concat(httpLink),
//         cache: new InMemoryCache()
//     });

//     const { data } = await client.query({
//         query: gql`
//               {   
//                 user(login: "hzeghari") {
//                   bio
//                   avatarUrl
//                   login
//                   name
//                 }
//               }`
//     })

//     const { user } = data;
//     const profile = user.name;

//     console.log(profile);

//     return {
//         props: {
//             profile
//         }
//     }
// }
  