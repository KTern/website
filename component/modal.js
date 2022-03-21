import Image from "next/image";
import Link from "next/link";
import React, { Component,useEffect,useReducer,useState } from "react";
import { createContext,useContext } from "react";
const Store=createContext();
const reducer =(state,action)=>{
  console.log(action.type,state);
  switch(action.type){
    case "update":{
      state=action.value
      console.log("update",state)
    };
    default:{
      return state;
    }
  }
}
export const useStore=()=>useContext(Store);
export const StoreProvider=({children})=>{
  const [state,dispatch]=useReducer(reducer,false);
  return (
    <Store.Provider value={[state,dispatch]}>
      {children}
    </Store.Provider>
  )
}
export default function Modal({ data })  {
  const [state,dispatch]=useStore()
  // console.log(state,"modal")
  const showHideClassName = state? "modal display-block" : "modal display-none";
 
  return (
    <>
   {state && <div className={showHideClassName}>
      <section className="modal-main shadow-xl rounded-lg">
        <div className="flex justify-end pr-5 pl-2 pt-3">
          <button type="button" className="" onClick={()=>{console.log("clicked");dispatch({type:"update",value:false})}}>
          <Image alt="close" height="14" width="14" src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"/>
          </button>
        </div>
        <div className="p-7 text-center flex flex-col space-y-2 justify-center items-center">
          <h1 className="card-heading">{data.heading}</h1>
          <p className="card-subheading">{data.subheading}</p>
          <Link href={data.Link}><a >{data.Link}</a></Link>
        </div>
      </section>
    </div>}
    </>
  )
}
