/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-ssr/
 */

const React = require("react");

/**
 * @type {import('gatsby').GatsbySSR['onRenderBody']}
 */
exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `en` });

  setHeadComponents([
    <link key="favicon" rel="icon" href="/favicon.ico" />,

    // Google Ads - gtag
    <script
      key="gtag-init"
      async
      src="https://www.googletagmanager.com/gtag/js?id=AW-11117523946"
    />,
    <script
      key="gtag-config"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-11117523946');
        `,
      }}
    />,
  ]);
};
