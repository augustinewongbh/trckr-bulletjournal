import Document, { Head, Main, NextScript } from "next/document";
import flush from "styled-jsx/server";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage();
    const styles = flush();
    return { html, head, errorHtml, chunks, styles };
  }

  render() {
    return (
      <html>
        <Head>
          <link
            rel="stylesheet"
            href="/static/semantic-ui-css/semantic.min.css"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500"
          />
          <link rel="stylesheet" href="/static/react-day-picker-style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <style jsx>{`
            body {
              display: flex;
              flex-direction: column;
              align-items: center;
            }
          `}</style>
        </body>
      </html>
    );
  }
}
