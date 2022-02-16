import React, { Component,useEffect,useState } from "react";
import Modal, { useStore } from "../component/modal";

export default function Test() {
    // constructor() {
    //     super();
    //     this.state = {
    //       show: false
    //     };
    //     this.showModal = this.showModal.bind(this);
    //     this.hideModal = this.hideModal.bind(this);
    //   }
    const [state,dispatch]=useStore();
    // console.log("modal",state)
   
   useEffect(()=>{
    window.addEventListener('load',()=>{
       console.log("Hello")
       const timer=setTimeout(()=>{
        dispatch({type:'update',value:true})
       },5000)
      
     })
   })
    return (
      <>
<Modal   data={{heading:"Heading",subheading:"Answer",Link:"https://www.digitalocean.com/community/tutorials/react-modal-component"}}>
          
          </Modal>
          <div className="flex  flex-col space-y-5 justify-center">
        <h1 className="text-center">React Modal</h1>
        <button   type="button" onClick={()=>{
          dispatch({type:'update',value:true})
        }}>
         <span className="bg-black rounded-xl text-white p-4">Open</span> 
        </button>
        </div>
        
      </>
    );
  
}

