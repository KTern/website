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
          <script>{` (function(c,l,a,r,i,t,y){c[ a ] = c[ a ] || function () { (c[ a ].q = c[ a ].q || []).push(arguments) }; t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt"; y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y); })(window, document, "clarity", "script", "9d9bn5pdf5");`}</script>
          <script type='text/javascript'
      id='VisitorTracking'>{`var $zoho = $zoho || {}; $zoho.salesiq = $zoho.salesiq || { widgetcode: 'be16bb919ea6295023cd4a69cca11e6cce115f6ed8a4f421f0b5bd9c6a7baf8d', values: {}, ready: function () { } }; var d = document; s = d.createElement('script'); s.type = 'text/javascript'; s.id = 'zsiqscript'; s.defer = true; s.src = 'https://salesiq.zoho.in/widget'; t = d.getElementsByTagName('script')[0]; t.parentNode.insertBefore(s, t); function trackVisitor() { try { if ($zoho) { var LDTuvidObj = document.forms['WebToContacts240235000000441168']['LDTuvid']; if (LDTuvidObj) { LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid(); } var firstnameObj = document.forms['WebToContacts240235000000441168']['First Name']; if (firstnameObj) { name = firstnameObj.value + ' ' + name; } $zoho.salesiq.visitor.name(name); var emailObj = document.forms['WebToContacts240235000000441168']['Email']; if (emailObj) { email = emailObj.value; $zoho.salesiq.visitor.email(email); } } } catch (e) { } }`}</script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}