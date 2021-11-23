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

          <script dangerouslySetInnerHTML={{
            __html: `window.fbAsyncInit = function() {
    FB.init({
      appId      : '325727978906277',
      xfbml      : true,
      version    : 'v12.0'});
    FB.AppEvents.logPageView();};(function(d, s, id){var js, fjs = d.getElementsByTagName(s)[0];if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "https://connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);}(document, 'script', 'facebook-jssdk'));`}}/>
  


        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

