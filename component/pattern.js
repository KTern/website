export const pattern={
    pattern:'^[a-zA-Z0-9._%+-]+@(?!gmail.com)(?!yahoo.com)(?!hotmail.com)(?!aol.com)(?!hotmail.co.uk)(?!hotmail.fr)(?!msn.com)(?!yahoo.fr)(?!wanadoo.fr)(?!orange.fr)(?!comcast.net)(?!yahoo.co.uk)(?!yahoo.com.br)(?!yahoo.co.in)(?!live.com)(?!rediffmail.com)(?!free.fr)(?!gmx.de)(?!web.de)(?!yandex.rum)[a-zA-Z0-9_-]+.[a-zA-Z0-9-.]{2,61}$',
    title:'Please enter business email'
}
export default function Email({class_name,name}){
    console.log(class_name)
    return (
        <input
                          type="email"
                          ftype="email"
                          id="Email"
                          name={`${name!==undefined?name:'Email'}`}
                          maxLength="100"
                          className={`${class_name!==undefined?class_name:'input'}`}
                          required
                         
                                        changeitem="SIGNUP_FORM_FIELD"
                          pattern={pattern.pattern}
                          title={pattern.title}
                        />
    )
}