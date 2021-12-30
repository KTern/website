import Document, { Html, Head, Main, NextScript } from 'next/document'
import { LogoJsonLd } from "next-seo";
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
      
        {/* <!-- Google Tag Manager --> */}
<script  dangerouslySetInnerHTML={{
              __html: `function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MHZVHTK')`}}/>
{/* <!-- End Google Tag Manager --> */}
          {/* Cookies */}
          <script dangerouslySetInnerHTML={{
              __html: `
!function(){var i,e,t,s=window.legal=window.legal||[];if(s.SNIPPET_VERSION="3.0.0",i="https://widgets.openli.com/v1/legal.js",!s.__VERSION__)if(s.invoked)window.console&&console.info&&console.info("legal.js: The initialisation snippet is included more than once on this page, and does not need to be.");else{for(s.invoked=!0,s.methods=["cookieConsent","document","ensureConsent","handleWidget","signup","user"],s.factory=function(t){return function(){var e=Array.prototype.slice.call(arguments);return e.unshift(t),s.push(e),s}},e=0;e<s.methods.length;e++)t=s.methods[e],s[t]=s.factory(t);s.load=function(e,t){var n,o=document.createElement("script");o.setAttribute("data-legalmonster","sven"),o.type="text/javascript",o.async=!0,o.src=i,(n=document.getElementsByTagName("script")[0]).parentNode.insertBefore(o,n),s.__project=e,s.__loadOptions=t||{}},s.widget=function(e){s.__project||s.load(e.widgetPublicKey),s.handleWidget(e)}}}();



legal.widget({
type: "cookie",
widgetPublicKey: "fDEEdt2w4fHwLQmNSisdwUnC",
});`,
}}/>
          {/* Cookies */}
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
          <script  type="application/ld+json" dangerouslySetInnerHTML={{
            __html: `{
"@context": "https://schema.org",
"@type": "Corporation",
"name": "KTern.AI",
"alternateName": "KTern",
"url": "https://ktern.com",
"logo": "https://storage.googleapis.com/ktern-public-files/website/Brand%20Elements/ktern-logo.png",
"contactPoint": [{
"@type": "ContactPoint",
"telephone": "+1 (530) 830 9925",
"contactType": "sales",
"areaServed": "US",
"availableLanguage": "en"
},{
"@type": "ContactPoint",
"telephone": "+91 (44) 4065 1500",
"contactType": "customer service",
"areaServed": ["155","039","154","151","150","145","034","035","030","143","142","419","015","002"],
"availableLanguage": "en"
}],
"sameAs": [
"https://www.instagram.com/ktern.official",
"https://twitter.com/KTernOfficial",
"https://www.facebook.com/KTernAIOfficial",
"https://www.youtube.com/channel/UCAhQc3bSZ95pucSyweFtusA",
"https://www.linkedin.com/company/ktern/",
"https://ktern.ai",
"https://github.com/KTern"
]
}`}}
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
  

  <LogoJsonLd
        logo={process.env.NEXT_PUBLIC_LOGO}
        url={process.env.NEXT_PUBLIC_URL}
      />

        </Head>
        <body>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MHZVHTK"
height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
          <Main />
          <NextScript />

        </body>
      </Html>
    )
  }
}

