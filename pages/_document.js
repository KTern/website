import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
validateEmail240235000000441168() {
        var form = document.forms['WebToContacts240235000000441168'];
        var emailFld = form.querySelectorAll('[ftype=email]');
        var i;
        for (i = 0; i < emailFld.length; i++) {
          var emailVal = emailFld[i].value;
          if ((emailVal.replace(/^\s+|\s+$/g, '')).length != 0) {
            var atpos = emailVal.indexOf('@');
            var dotpos = emailVal.lastIndexOf('.');
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
              alert('Please enter a valid email address. ');
              emailFld[i].focus();
              return false;
            }
          }
        }
        return true;
      }
       
  trackVisitor (){
        if ( !validateEmail240235000000441168()) { return false; }
        document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
      }

  render() {
    return (
      <Html>
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          <script type='text/javascript'id='VisitorTracking'>
          </script>
          {/* <!-- Clarity tracking code for https://ktern.com/ --> */}
          <script dangerouslySetInnerHTML={{
            __html: ` (function(c,l,a,r,i,t,y){c[ a ] = c[ a ] || function () { (c[ a ].q = c[ a ].q || []).push(arguments) }; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt"; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "9d9bn5pdf5");`
          }}/>
 
          <script type="text/javascript" id="zsiqchat" dangerouslySetInnerHTML={{
            __html:`var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "f440e91b3668705fa583df5dbc6e74336a479d5c9175a86e330df6b09d955c51c217306de45b754907f8ee064f96a38d", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.in/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);`}}/>


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}