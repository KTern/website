import * as Amplitude from '@amplitude/node';
const AMPLITUDE_KEY = 'fc34969fbb47436070b100efc94f9efa';
var client = Amplitude.init(AMPLITUDE_KEY);
export default function Event(e_data){
    function uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }   
      let user_id;
      let email="",name="";
      console.log(localStorage.getItem('user_id'))
      if(localStorage.getItem('user_id')==undefined){
             user_id=uuidv4();
            localStorage.setItem('user_id',user_id);
        }
        else{
            user_id=localStorage.getItem('user_id')
        }
        if(localStorage.getItem('email')==undefined){
            email="";
        }
        else{
            email=localStorage.getItem('email')
        }
        if(localStorage.getItem('name')==undefined){
         name="";
     }
     else{
         name=localStorage.getItem('name')
     }
    console.log("Events",e_data,user_id)
    const data={
        event_type:e_data.event_name,
        user_id:`${user_id}`,
        user_properties:{
            email:`${email}`,
            name:`${name}`,
            // maps:`${e_data.stream_score.maps}`,
            // projects:`${e_data.stream_score.projects}`,
            // process:`${e_data.stream_score.process}`,
            // labs:`${e_data.stream_score.labs}`,
            // mines:`${e_data.stream_score.mines}`,
            // aggregateScore:`${e_data.interest_score}`
        },
        event_properties:{
            keyString:`${e_data.event_name }`,
            		keyInt: 11,
            		keyBool: true,
            pageSource:`${e_data.page_source}`,
            sectionName:`${e_data.section_name}`,
           
            label:`${e_data.label}`
        }
    }
 
console.log(data)
client.logEvent(data);
client.flush();
}

export  function resolve_stream_score(data){
    let stream_score={maps:0,projects:0,process:0,labs:0,mines:0,}   
     switch(data){
        case 'maps':
            stream_score['maps']+=5;
            break;
        case 'projects':
            stream_score['projects']+=5;
            break;
        case 'process':
            stream_score['process']+=5;
            break;
        case 'labs':
            stream_score['labs']+=5;
            break;
        case 'mines':
            stream_score['mines']+=5;
            break;
    }
    return stream_score
}
export function resolve_interest_score(context){
    let default_score={
        formfill:10,
        buttonclick:2,
        webinaraccess:10,
        resourcedownload:5,
        navigation:1
    }
    return default_score[context]
}
export function page_event(e_data) {
    function uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
      }   
      let user_id;
      let email="",name="";
      console.log(localStorage.getItem('user_id'))
      
      if(localStorage.getItem('user_id')==undefined){
             user_id=uuidv4();
            localStorage.setItem('user_id',user_id);
        }
        else{
            user_id=localStorage.getItem('user_id')
        }
        if(localStorage.getItem('email')==undefined){
           email="";
       }
       else{
           email=localStorage.getItem('email')
       }
       if(localStorage.getItem('name')==undefined){
        name="";
    }
    else{
        name=localStorage.getItem('name')
    }
        const data={
            event_type:e_data.event_name,
            user_id:`${user_id}`,
            user_properties:{
                email:`${email}`,
                name:`${name}`,
                // maps:`${e_data.stream_score.maps}`,
                // projects:`${e_data.stream_score.projects}`,
                // process:`${e_data.stream_score.process}`,
                // labs:`${e_data.stream_score.labs}`,
                // mines:`${e_data.stream_score.mines}`,
                // aggregateScore:`${e_data.interest_score}`
            },
            event_properties:{
                keyString:`${name }`,
                        keyInt: 11,
                        keyBool: true,
                        pageDestination:`${e_data.page_destination}`,
            }
        }
     
    console.log(data)
    client.logEvent(data);
    client.flush();
}