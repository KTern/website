import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  trackVisitor()
            { try
            { 
              if ($zoho)
            { var LDTuvidObj = document.forms['WebToContacts240235000000441159']['LDTuvid'];
            if (LDTuvidObj)
            {LDTuvidObj.value = $zoho.salesiq.visitor.uniqueid(); }
            var firstnameObj = document.forms['WebToContacts240235000000441159']['First Name'];
            if (firstnameObj)
            {name = firstnameObj.value + ' ' + name; } $zoho.salesiq.visitor.name(name);
            var emailObj = document.forms['WebToContacts240235000000441159']['Email'];
            if (emailObj) {email = emailObj.value; $zoho.salesiq.visitor.email(email); } } }
            catch (e) { } }
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
          <script type='text/javascript'
            id='VisitorTracking'>
            var $zoho = $zoho || { };
            $zoho.salesiq = $zoho.salesiq ||
            widgetcode: be16bb919ea6295023cd4a69cca11e6cce115f6ed8a4f421f0b5bd9c6a7baf8d, values: { }, ready: function () { } ;
            var d = document;
            s = d.createElement(script);
            s.type = text/javascript;
            s.id = zsiqscript;
            s.defer = true;
            s.src = https://salesiq.zoho.in/widget;
            t = d.getElementsByTagName(script)[0];
            t.parentNode.insertBefore(s, t);
            </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}