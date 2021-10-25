import React from 'react'
import TopCard from './TopCard'
import Links from './Links'
import TestTop from './TestTop'

export default function First(props) {
    const EntryProfile = props.profile;
    return (
      <div className="flex flex-wrap overflow-hidden bg-mains bg-cover">

        <div className="w-1/5 overflow-hidden">
          {/* <div className="max-w-full max-h-screen bg-blue-300">
            A Computer Science Portal for Geeks
          </div> */}
        </div>

        <div className="w-3/5 overflow-hidden ">
          <div className="w-full flex flex-col justify-evenly h-screen">
            <TopCard EntryProfile={EntryProfile}/>
            <Links/>
          </div>
        </div>

        <div className="w-1/5 overflow-hidden">
          {/* <div className="max-w-full max-h-full bg-blue-300">
            A Computer Science Portal for Geeks
          </div> */}
        </div>

      </div>
    );
}
